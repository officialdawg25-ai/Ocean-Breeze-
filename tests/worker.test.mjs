import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../worker.js', import.meta.url), 'utf8');
const html = source.match(/const HTML = String\.raw\x60([\s\S]*?)\x60;/)?.[1] ?? '';

test('Worker source contains a complete document', () => {
  assert.ok(html.startsWith('<!doctype html>'));
  assert.match(html, /<\/html>/);
  assert.match(html, /<main id="main">/);
});

test('Primary experience sections and navigation targets exist', () => {
  for (const id of ['home', 'story', 'water', 'future', 'connect']) {
    assert.match(html, new RegExp('id="' + id + '"'));
    assert.match(html, new RegExp('href="#' + id + '"'));
  }
});

test('Mobile and accessibility affordances exist', () => {
  assert.match(html, /name="viewport"/);
  assert.match(html, /Skip to content/);
  assert.match(html, /aria-expanded/);
  assert.match(html, /prefers-reduced-motion/);
  assert.match(html, /aria-live="polite"/);
});

test('Enquiry form is wired to the Worker endpoint', () => {
  assert.match(html, /id="enquiry-form"/);
  assert.match(html, /fetch\('\/api\/enquiries'/);
  assert.match(source, /url\.pathname === "\/api\/enquiries"/);
  assert.match(source, /SUPABASE_PUBLISHABLE_KEY/);
  assert.match(source, /company_website/);
  assert.match(source, /origin !== url\.origin/);
});

test('Server validates input and returns non-cacheable JSON', () => {
  assert.match(source, /validEmail/);
  assert.match(source, /message\.length < 10/);
  assert.match(source, /"cache-control": "no-store"/);
  assert.match(source, /content-security-policy/);
});

test('No private Supabase key is embedded in source', () => {
  assert.doesNotMatch(source, /SUPABASE_SERVICE_ROLE_KEY|sb_secret_/);
});
