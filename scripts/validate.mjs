import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
import { load } from "cheerio";
const root = path.resolve("dist");
async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((e) =>
        e.isDirectory()
          ? files(path.join(dir, e.name))
          : path.join(dir, e.name),
      ),
    )
  ).flat();
}
let count = 0;
for (const file of (await files(root)).filter(
  (f) => f.endsWith(".html") && !f.endsWith("404.html"),
)) {
  const $ = load(await readFile(file, "utf8"));
  const lang = $("html").attr("lang");
  assert(["en", "es"].includes(lang), "Document language");
  assert.equal($("h1").length, 1);
  assert($("title").text().includes("Sergio Cornejo"));
  assert($("meta[name=description]").attr("content"));
  assert(
    $("link[rel=canonical]")
      .attr("href")
      ?.startsWith("https://sergiocorne.github.io/"),
  );
  assert.equal($("link[rel=alternate]").length, 3);
  assert.equal($("main").length, 1);
  const ids = $("[id]")
    .map((_, el) => $(el).attr("id"))
    .get();
  assert.equal(new Set(ids).size, ids.length, "Unique IDs");
  for (const el of $("a[href],link[href],script[src],img[src]").toArray()) {
    const href = $(el).attr("href") || $(el).attr("src");
    if (!href || /^(https?:|mailto:|data:)/.test(href)) continue;
    const [pathname, hash] = href.split("#");
    if (!pathname && hash) {
      assert(ids.includes(hash), `Missing anchor ${href}`);
      continue;
    }
    const target = path.resolve(
      root,
      "." + (pathname.startsWith("/") ? pathname : "/" + pathname),
    );
    assert(target === root || target.startsWith(root + path.sep));
    const info = await stat(target).catch(() => null);
    assert(info, `Missing resource ${href}`);
    if (info.isDirectory()) await stat(path.join(target, "index.html"));
  }
  const schema = JSON.parse($('script[type="application/ld+json"]').text());
  assert.equal(schema.mainEntity.name, "Sergio Cornejo");
  count++;
}
assert.equal(count, 2);
console.log(
  "Validated both locales: metadata, structured data, unique IDs, local links, anchors and assets.",
);
