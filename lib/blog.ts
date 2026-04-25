export function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function generateUniqueSlug(
  title: string,
  exists: (slug: string) => Promise<boolean>,
) {
  const base = slugify(title) || "post";
  let candidate = base;
  let count = 1;

  while (await exists(candidate)) {
    count += 1;
    candidate = `${base}-${count}`;
  }

  return candidate;
}

export function extractHeadings(content: string) {
  const lines = content.split("\n");
  const headings = lines
    .filter((line) => line.trim().startsWith("##"))
    .map((line) => line.replace(/^#+\s*/, "").trim())
    .filter(Boolean);

  return headings;
}

export function headingId(text: string) {
  return slugify(text);
}
