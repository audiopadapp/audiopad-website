// Types for GitHub Release
export interface GitHubReleaseAsset {
  id?: number;
  name: string;
  browser_download_url: string;
  size: number;
  download_count: number;
  content_type?: string;
  created_at?: string;
  updated_at?: string;
}

export interface GitHubRelease {
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

type GithubRepoResponse = {
  stargazers_count: number;
};

const GITHUB_REPO_API = "https://api.github.com/repos/audiopadapp/audiopad";

function getGithubHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "AudioPad-Website",
  };
  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
}

// Helper to format file size
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
}

// Helper to format download count nicely (e.g. 2670 -> "2,670")
export function formatDownloadCount(count: number): string {
  return count.toLocaleString("en-US");
}

// Helper to format compact count (e.g. 2670 -> "2.7k")
export function formatCompactCount(count: number): string {
  if (count >= 1_000_000) {
    return (count / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (count >= 1_000) {
    return (count / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return count.toString();
}

// Calculate total downloads for a single release
export function getReleaseTotalDownloads(release: GitHubRelease): number {
  if (!release || !release.assets) return 0;
  return release.assets.reduce(
    (sum, asset) => sum + (asset.download_count || 0),
    0
  );
}

// Calculate total downloads across all releases and all assets
export function calculateTotalDownloads(releases: GitHubRelease[]): number {
  if (!releases || !Array.isArray(releases)) return 0;
  return releases.reduce(
    (total, release) => total + getReleaseTotalDownloads(release),
    0
  );
}

// Calculate download breakdown by platform/asset category
export function calculatePlatformDownloads(releases: GitHubRelease[]): {
  windows: number;
  linux: number;
  source: number;
  other: number;
  total: number;
} {
  let windows = 0;
  let linux = 0;
  let source = 0;
  let other = 0;

  for (const rel of releases) {
    for (const asset of rel.assets || []) {
      const count = asset.download_count || 0;
      const lower = asset.name.toLowerCase();
      if (lower.endsWith(".exe") || lower.includes("win")) {
        windows += count;
      } else if (
        lower.endsWith(".deb") ||
        lower.endsWith(".rpm") ||
        lower.endsWith(".appimage") ||
        lower.includes("linux")
      ) {
        linux += count;
      } else if (lower.endsWith(".tar.gz") || lower.endsWith(".zip")) {
        source += count;
      } else {
        other += count;
      }
    }
  }

  return {
    windows,
    linux,
    source,
    other,
    total: windows + linux + source + other,
  };
}

// Fetch latest release from GitHub
export async function fetchLatestRelease(): Promise<GitHubRelease | null> {
  try {
    const res = await fetch(
      `${GITHUB_REPO_API}/releases/latest`,
      {
        headers: getGithubHeaders(),
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );
    if (!res.ok) return null;
    return res.json();
  } catch (e) {
    console.error("Failed to fetch latest release:", e);
    return null;
  }
}

// Fetch all releases from GitHub
export async function fetchAllReleases(): Promise<GitHubRelease[]> {
  try {
    const res = await fetch(
      `${GITHUB_REPO_API}/releases?per_page=100`,
      {
        headers: getGithubHeaders(),
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );
    if (!res.ok) return [];
    return res.json();
  } catch (e) {
    console.error("Failed to fetch all releases:", e);
    return [];
  }
}

// Fetch total download count directly (SSR / ISR cached)
export async function fetchTotalDownloads(): Promise<number> {
  const releases = await fetchAllReleases();
  return calculateTotalDownloads(releases);
}

// Filter assets to get Windows and Linux
export function filterReleaseAssets(release: GitHubRelease) {
  const windowsAsset = release.assets.find((a) => a.name.endsWith(".exe"));
  const linuxDebAsset = release.assets.find((a) => a.name.endsWith(".deb"));
  const linuxRpmAsset = release.assets.find((a) => a.name.endsWith(".rpm"));
  const linuxAppImageAsset = release.assets.find((a) =>
    a.name.endsWith(".AppImage")
  );
  const tarGzAsset = release.assets.find((a) => a.name.endsWith(".tar.gz"));

  return {
    windows: windowsAsset,
    linux: {
      deb: linuxDebAsset,
      rpm: linuxRpmAsset,
      appImage: linuxAppImageAsset,
    },
    tarGz: tarGzAsset,
    all: release.assets || [],
  };
}

export async function getGithubStars(): Promise<number> {
  try {
    const response = await fetch(GITHUB_REPO_API, {
      headers: getGithubHeaders(),
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      throw new Error(`Github API returned ${response.status}`);
    }

    const repo: GithubRepoResponse = await response.json();
    return repo.stargazers_count;
  } catch (error) {
    console.error("Failed to fetch Github stars", error);
    return 0;
  }
}