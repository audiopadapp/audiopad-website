// Types for GitHub Release
interface GitHubReleaseAsset {
  name: string;
  browser_download_url: string;
  size: number;
  content_type: string;
  created_at: string;
}

interface GitHubRelease {
  id: number;
  tag_name: string;
  name: string;
  body: string;
  draft: boolean;
  prerelease: boolean;
  created_at: string;
  published_at: string;
  assets: GitHubReleaseAsset[];
  html_url: string;
}

// Helper to format file size
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

// Fetch latest release from GitHub
export async function fetchLatestRelease(): Promise<GitHubRelease | null> {
  try {
    const res = await fetch('https://api.github.com/repos/audiopadapp/audiopad/releases/latest', {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    if (!res.ok) return null;
    return res.json();
  } catch (e) {
    console.error('Failed to fetch latest release:', e);
    return null;
  }
}

// Fetch all releases from GitHub
export async function fetchAllReleases(): Promise<GitHubRelease[]> {
  try {
    const res = await fetch('https://api.github.com/repos/audiopadapp/audiopad/releases', {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    if (!res.ok) return [];
    return res.json();
  } catch (e) {
    console.error('Failed to fetch all releases:', e);
    return [];
  }
}

// Filter assets to get Windows and Linux
export function filterReleaseAssets(release: GitHubRelease) {
  const windowsAsset = release.assets.find(
    (a) => a.name.endsWith('.exe')
  );
  const linuxDebAsset = release.assets.find(
    (a) => a.name.endsWith('.deb')
  );
  const linuxRpmAsset = release.assets.find(
    (a) => a.name.endsWith('.rpm')
  );
  const linuxAppImageAsset = release.assets.find(
    (a) => a.name.endsWith('.AppImage')
  );
  return {
    windows: windowsAsset,
    linux: {
      deb: linuxDebAsset,
      rpm: linuxRpmAsset,
      appImage: linuxAppImageAsset,
    },
  };
}
