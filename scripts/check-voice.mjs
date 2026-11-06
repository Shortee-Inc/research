#!/usr/bin/env node
// Third person only (owner 2026-11-05: "correct all the first person and make sure that never happens again").
// Every public page on research.myshortee.com speaks as "Shortee" / "Shortee Research", never "we", "our",
// "us", "I" or "my". Two monthly issues were written by hand and pushed straight here, past the content
// engine's own check, and went live in the first person. So the check lives HERE, in the Pages build
// (.github/workflows/pages.yml): a page that fails it is never published.
//
// The rule is the content engine's (services/content-engine/article.mjs, validateArticle), so an article
// the engine accepts is accepted here too:
//   - link URLs are dropped, link text is kept;
//   - an *italic title* is someone else's words (*What We Watched on Vertical*) and is skipped;
//   - FAQ questions are the reader's own words, so everything after "## FAQ" is skipped;
//   - "US" (the country) is upper case and never matches "us".
// Run: node scripts/check-voice.mjs   (exit 1 lists every offending line)
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const SKIP_DIRS = new Set(['.git', '.github', '_site', '.jekyll-cache', 'node_modules', 'scripts', 'assets']);
// Not published: the repo's own working notes.
const SKIP_FILES = new Set(['README.md']);
export const FIRST_PERSON = /\b([Ww]e|[Ww]e're|[Ww]e've|[Ww]e'll|[Ww]e'd|[Oo]urs?|[Oo]urselves|us|I|I'm|I've|[Mm]y)\b/g;

/** The visible prose of one file: what a reader sees, minus the parts the rule exempts. */
export function prose(text) {
  return String(text)
    .split(/^## FAQ\s*$/m)[0]
    .replace(/\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/g, ' ') // Liquid
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]*>/g, ' ') // HTML tags and their attributes; their text stays
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1') // links: keep the text
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/\*\*([^*\n]+)\*\*/g, '$1') // bold is the article's own words
    .replace(/\*[^*\n]+\*|_[^_\n]+_/g, ' '); // italic titles are someone else's
}

/** Every offending line in one file: [{ line, words, text }]. */
export function findFirstPerson(text) {
  const out = [];
  String(text).split(/^## FAQ\s*$/m)[0].split('\n').forEach((raw, i) => {
    const words = prose(raw).match(FIRST_PERSON);
    if (words) out.push({ line: i + 1, words: [...new Set(words)], text: raw.trim().slice(0, 140) });
  });
  return out;
}

function files(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) return SKIP_DIRS.has(name) ? [] : files(p);
    return /\.(md|html)$/.test(name) && !SKIP_FILES.has(name) ? [p] : [];
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  let bad = 0;
  const all = files(ROOT);
  for (const f of all) {
    for (const hit of findFirstPerson(readFileSync(f, 'utf8'))) {
      bad++;
      console.log(`${relative(ROOT, f)}:${hit.line}  [${hit.words.join(', ')}]  ${hit.text}`);
    }
  }
  if (bad) {
    console.log(`\nFAIL: ${bad} line(s) in the first person. Write "Shortee", "Shortee Research" or the passive; never "we", "our", "us", "I" or "my".`);
    process.exit(1);
  }
  console.log(`ok: ${all.length} public files, all third person`);
}
