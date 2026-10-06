# Changelog Authoring Guide

Complete reference for adding and writing changelog entries.

Suggested location in your repo: `content/changelog/README.md` (safe there, because only `.mdx` files are read as entries).

---

## 1. How it works (30-second overview)

- Every release is **one `.mdx` file** inside `content/changelog/`.
- The **filename is the URL**: `v1.1.0.mdx` → `/changelog/v1.1.0`
- Every entry automatically appears on:
  - the list page: `/changelog`
  - its own detail page: `/changelog/<filename>`
  - the sitemap (`/sitemap.xml`)
- Pages are generated at **build time** on the server. After adding or editing a file, you must **redeploy** (or restart `npm run dev` locally) for changes to go live.
- Entries are sorted by **`date`, newest first** (not by version number).

---

## 2. Adding a new entry (step by step)

1. Create a file in `content/changelog/`, e.g. `v1.2.0.mdx`.
2. Paste the frontmatter template (section 3) and fill it in.
3. Write the release notes below the frontmatter (section 5).
4. (Optional) Add images (section 6).
5. Run `npm run dev` and check `/changelog` and `/changelog/v1.2.0`.
6. Commit and deploy.

---

## 3. Frontmatter reference

Frontmatter is the block between the two `---` lines at the very top of the file. It must be the first thing in the file.

```mdx
---
title: Faster Dashboard and Team Invites
description: Big performance wins plus team collaboration.
version: v1.1.0
date: 2026-10-06
tags: [feature, performance]
image: /changelog/v1.1.0/cover.png
imageAlt: The redesigned analytics dashboard
---
```

### Field table

| Field | Required? | Type | Purpose |
|---|---|---|---|
| `title` | **Mandatory** | text | Headline of the release. Shown as the page `<h1>`, the card title, and in the browser tab / Google result. |
| `version` | **Mandatory** | text | Version label shown as a badge, e.g. `v1.1.0`. Any text works (`2026.10`, `Beta 3`). |
| `date` | **Mandatory** | date | Release date in `YYYY-MM-DD` format. Controls sorting. |
| `description` | Optional | text | One or two sentences. Used as the card subtitle and as the SEO meta description. **Strongly recommended** for SEO. |
| `tags` | Optional | list of text | Badges such as `feature`, `fix`, `improvement`. Defaults to none. |
| `image` | Optional | path | Cover image. Shown on the list card, the top of the detail page, and the social share preview. |
| `imageAlt` | Optional | text | Alt text for the cover image. Falls back to the `title` if omitted. Write a real description for SEO and accessibility. |

If a **mandatory** field is missing or the date is invalid, the **build fails** with the file name in the error message. A broken entry can never be deployed by accident.

### Frontmatter rules and gotchas

- **Date format**: always `YYYY-MM-DD` (example: `2026-10-06`). Do not use `06/10/2026`.
- **Quote values containing a colon**. In YAML, a colon followed by a space breaks parsing.
  ```yaml
  title: "Performance: 60% faster dashboard"   # correct, quoted
  title: Performance: 60% faster dashboard     # WRONG, breaks
  ```
- **Quote values starting with special characters** such as `@`, `#`, `*`, `&`, `!`, `[`, or `{`.
- **Tags** must be a list: `tags: [feature, fix]`, or on separate lines:
  ```yaml
  tags:
    - feature
    - fix
  ```
- **Version without quotes** is fine as text (`version: v1.1.0`). If it looks like a number (`version: 1.10`), quote it (`version: "1.10"`) so it is not turned into `1.1`.
- **Image paths** start with `/` and point to a file inside `public/` (details in section 6).

### Recommended tag vocabulary

Tags are free text, but stay consistent so the list stays tidy:

`feature` · `improvement` · `fix` · `performance` · `security` · `breaking` · `deprecation` · `release`

---

## 4. File naming rules

- Extension must be **`.mdx`**. A `.md` file is ignored.
- The filename (without extension) becomes the **URL slug** and is permanent. Changing it later changes the URL and breaks existing links.
- Use **lowercase, no spaces**. Use hyphens or dots: `v1.2.0.mdx`, `2026-10-launch.mdx`.
- Filenames must be unique.
- Good: `v1.2.0.mdx`, `v2.0.0-beta.1.mdx`
- Bad: `Version 1.2.mdx`, `release notes.mdx`

---

## 5. Writing the content

Everything below the closing `---` is the body.

### Headings

The page title (`title` in frontmatter) is already the `<h1>`. **Never use `#` in the body.** Start with `##`.

```mdx
## Added
### Details
```

Heading levels `##` to `####` are fine. Use consistent section names such as **Added, Improved, Fixed, Removed, Security, Breaking changes**.

### Text formatting

```mdx
**bold**  *italic*  ~~strikethrough~~  `inline code`
```

### Lists

```mdx
- Bullet item
- Another item
  - Nested item

1. Numbered item
2. Another item

- [x] Task list item (done)
- [ ] Task list item (open)
```

### Links

```mdx
[Read the docs](https://example.com/docs)
[Another release](/changelog/v1.0.0)
```

Use a path starting with `/` for internal links. Bare URLs such as `https://example.com` are turned into links automatically.

### Tables

```mdx
| Plan | Limit | Price |
|------|-------|-------|
| Free | 100   | $0    |
| Pro  | 10k   | $19   |
```

### Blockquotes

```mdx
> Note: this change requires re-authenticating existing sessions.
```

### Code blocks

````mdx
```bash
npm install my-package@latest
```

```ts
const user = await getUser(id);
```
````

Code blocks are rendered as formatted, scrollable blocks. **Colored syntax highlighting is not set up**, so add a highlighter plugin (such as `rehype-pretty-code`) if you want it later.

### Horizontal rule

```mdx
---
```

Only use this in the body after the frontmatter has closed.

### Comments (not shown on the page)

```mdx
{/* This is a hidden note for the team */}
```

### Inline HTML / JSX (use with care)

MDX treats HTML as JSX, so:

- Use `className`, not `class`.
- Close every tag: `<br />`, not `<br>`.
- Only plain HTML tags work, plus any components you register in `components/changelog/mdx-components.tsx`.

---

## 6. Images

### Where to store them

Put files in `public/changelog/<version>/`:

```
public/changelog/
  v1.1.0/
    cover.png
    invite.png
    dashboard.png
```

A file at `public/changelog/v1.1.0/cover.png` is available at `/changelog/v1.1.0/cover.png`. Never include `public` in the path.

### Cover image (frontmatter)

```yaml
image: /changelog/v1.1.0/cover.png
imageAlt: The redesigned analytics dashboard
```

The cover is used in three places:

1. The card on the list page.
2. The top of the detail page.
3. The social share preview (Open Graph / Twitter) and the structured data for Google.

### Inline images (body)

Standard markdown syntax:

```mdx
![Team invite dialog](/changelog/v1.1.0/invite.png)
```

The text in the brackets is the **alt text**. Always write it meaningfully.

### Image rules

- Use paths that start with `/`. Relative paths like `./invite.png` do **not** work.
- Best size: **16:9** (for example 1600×900), format `.webp` or `.png`. Other ratios still display, but may cause a small layout shift.
- Keep each image under roughly 500 KB (Next.js optimizes them, but smaller sources build faster).
- External image URLs only work if the hostname is listed in `images.remotePatterns` in `next.config.ts`. Local files in `public/` need no setup.
- Animated `.gif` files are not optimized. Prefer `.webp`.
- A missing image file shows a broken image but does not fail the build, so check it in dev.

---

## 7. Characters that break MDX

MDX is stricter than plain markdown. These characters in normal text can cause build errors:

| Character | Problem | Fix |
|---|---|---|
| `{` and `}` | Parsed as a JavaScript expression | Write `\{` and `\}` or put them in `` `backticks` `` |
| `<` | Parsed as a JSX tag | Write `&lt;` or put it in `` `backticks` `` |
| `<br>`, `<img>` (unclosed) | JSX requires closed tags | Use `<br />` |

Example: writing `Supports {id} placeholders` directly fails. Write `` Supports `{id}` placeholders `` instead.

Anything inside **backticks** or **code blocks** is always safe.

---

## 8. SEO checklist

Before publishing an entry, confirm:

- [ ] `title` is specific and clear (60 characters or fewer is ideal).
- [ ] `description` is filled in (about 120 to 160 characters).
- [ ] `date` is correct.
- [ ] `image` and `imageAlt` are set (gives a rich social preview).
- [ ] The body starts at `##`, with no `#` heading.
- [ ] All inline images have meaningful alt text.
- [ ] Filename is lowercase and stable (it will not change later).
- [ ] Opened `/changelog/<slug>` locally and checked it renders correctly.

What the site does automatically for every entry: server-side rendered HTML, a unique `<title>` of `{version} – {title}`, a meta description, a canonical URL, Open Graph and Twitter tags, JSON-LD structured data, and a sitemap entry.

---

## 9. Full example (copy and edit)

```mdx
---
title: Faster Dashboard and Team Invites
description: Dashboard loads 60% faster, and you can now invite teammates by email.
version: v1.1.0
date: 2026-10-06
tags: [feature, performance]
image: /changelog/v1.1.0/cover.png
imageAlt: The redesigned analytics dashboard
---

This release focuses on speed and collaboration.

## Added

- Invite teammates by email with role selection
- Keyboard shortcut `Cmd + K` for quick search

![Team invite dialog](/changelog/v1.1.0/invite.png)

## Improved

- Dashboard load time reduced by **60%**
- Export now supports large files up to 1 GB

| Metric | Before | After |
|--------|--------|-------|
| Load time | 2.5s | 1.0s |

## Fixed

- CSV export used the wrong timezone
- Sidebar flickered on first load

## Breaking changes

> The `/api/v1/stats` endpoint is deprecated. Migrate to `/api/v2/stats` before December.

```bash
curl https://api.example.com/v2/stats
```
```

---

## 10. Troubleshooting

| Problem | Likely cause | Fix |
|---|---|---|
| Entry does not appear | File is not `.mdx`, or is outside `content/changelog/` | Check the extension and folder, then restart dev |
| Build fails: "Invalid frontmatter in ... .mdx" | Missing `title`, `version` or `date`, or a bad date | Read the error: it names the file and field |
| Build fails with a strange parse error | Unescaped `{`, `<` or an unclosed tag in the body | See section 7 |
| Title with colon breaks | Unquoted YAML value | Wrap the value in `"quotes"` |
| Image does not show | Wrong path, or path includes `public/` | Use `/changelog/...` and confirm the file exists |
| Image works locally but not in production | File name case mismatch (`Cover.png` vs `cover.png`) | Match the case exactly. Linux servers are case sensitive |
| Version shows `1.1` instead of `1.10` | Value was read as a number | Quote it: `version: "1.10"` |
| Wrong order on the list | Sorting is by `date`, not by version | Fix the `date` values |
| Edit does not show in production | Static pages are built at deploy time | Redeploy |
| Entry with a future date is already visible | There is no date filtering | Set the real date, or only commit the file on release day |

---

## 11. Quick reference

**Mandatory:** `title`, `version`, `date`
**Optional:** `description` (recommended), `tags`, `image`, `imageAlt`
**Filename:** lowercase `.mdx`, becomes the URL, never rename
**Headings:** start at `##`, never `#`
**Images:** files in `public/changelog/<version>/`, paths start with `/`
**Avoid:** raw `{`, raw `<`, unquoted colons in titles, relative image paths
**Deploy:** every change needs a rebuild or redeploy