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
  assert.ok(html.includes('.contact-intro h2{font:400'));
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
  assert.ok(source.includes('robots.txt'));
  assert.ok(source.includes('sitemap.xml'));
  assert.doesNotMatch(source, /Arial/);
});

test('No private Supabase key is embedded in source', () => {
  assert.doesNotMatch(source, /SUPABASE_SERVICE_ROLE_KEY|sb_secret_/);
});

test('Product exhibition, product detail and admin routes are wired', () => {
  assert.match(html, /id="ob-stage"/);
  assert.match(html, /id="ob-product-rail"/);
  assert.match(html, /id="ob-collection-grid"/);
  assert.match(html, /id="ob-admin"/);
  assert.match(html, /id="ob-product-form"/);
  assert.match(html, /model-viewer/);
  assert.match(source, /url\.pathname === "\/api\/products"/);
  assert.match(source, /url\.pathname === "\/api\/experience"/);
  assert.match(source, /url\.pathname === "\/admin"/);
  assert.match(source, /url\.pathname\.startsWith\("\/products\/"\)/);
});

test('Product studio supports real image sequences, 3D models and verified information', () => {
  assert.match(html, /frame_manifest/);
  assert.match(html, /model_asset/);
  assert.match(html, /function setFrame/);
  assert.match(html, /pointerdown/);
  assert.match(html, /addEventListener\('wheel'/);
  assert.match(html, /information_type/);
  assert.match(html, /background_primary/);
  assert.match(html, /ocean-breeze-products/);
});

test('Admin authorisation uses trusted app metadata and not user metadata', () => {
  assert.match(html, /claims\.app_metadata\.role/);
  assert.doesNotMatch(html, /user_metadata\.role/);
  assert.match(source, /SUPABASE_PUBLISHABLE_KEY/);
  assert.doesNotMatch(source, /SUPABASE_SERVICE_ROLE_KEY|sb_secret_/);
});
