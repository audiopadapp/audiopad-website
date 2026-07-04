import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

// Verify GitHub webhook signature
async function verifySignature(request: NextRequest, body: string): Promise<boolean> {
  const signatureHeader = request.headers.get('x-hub-signature-256');
  if (!signatureHeader || !process.env.REVALIDATE_SECRET) {
    return false;
  }

  const encoder = new TextEncoder();
  const secretKeyBytes = encoder.encode(process.env.REVALIDATE_SECRET);
  const bodyBytes = encoder.encode(body);

  // Create HMAC signature
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    secretKeyBytes,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signatureBytes = await crypto.subtle.sign('HMAC', cryptoKey, bodyBytes);
  const signature = Array.from(new Uint8Array(signatureBytes))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

  const expectedSignature = `sha256=${signature}`;

  // Timing-safe comparison (to avoid timing attacks)
  function timingSafeEqual(a: string, b: string): boolean {
    if (a.length !== b.length) {
      return false;
    }
    let result = 0;
    for (let i = 0; i < a.length; i++) {
      result |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }
    return result === 0;
  }

  return timingSafeEqual(expectedSignature, signatureHeader);
}

export async function POST(request: NextRequest) {
  try {
    // Get raw body for signature verification
    const body = await request.text();

    // Verify GitHub webhook signature
    const isValid = await verifySignature(request, body);
    if (!isValid) {
      return NextResponse.json(
        { message: 'Invalid signature' },
        { status: 401 }
      );
    }

    // Parse the JSON body to check event type
    const eventType = request.headers.get('x-github-event');
    if (eventType !== 'release') {
      // Not a release event - ignore but return 200 so GitHub doesn't retry
      return NextResponse.json({ message: 'Ignoring non-release event' });
    }

    // Revalidate the paths that use fetchLatestRelease and fetchAllReleases
    await Promise.all([
      revalidatePath('/'),
      revalidatePath('/download'),
    ]);

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
    });
  } catch (err) {
    console.error('Revalidation error:', err);
    return NextResponse.json(
      { message: 'Error revalidating' },
      { status: 500 }
    );
  }
}
