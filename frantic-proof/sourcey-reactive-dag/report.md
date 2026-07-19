# ReactiveDAG Sourcey documentation report

## Delivery summary

- Adopted upstream through https://github.com/richardsmythe/reactive-dag/pull/2 at commit `8b1ba36fdde1c8013fdcece8c2acf08606341796`.
- The contribution merged at `8bb0a64acda71169e7f156bfff455cd287558719`; the live deployment is the verified descendant `8b1ba36fdde1c8013fdcece8c2acf08606341796` after 6 maintainer follow-up commit(s).
- Those follow-ups repaired four Reference-section links that Sourcey rewrote incorrectly on GitHub Pages. The original validation missed clicking those links; the current proof checks the repaired live pages rather than hiding that QA gap.
- Rebuilt five Sourcey 3.6.5 pages from a clean checkout with `npm ci`, `npm run build`, and `npm run verify`.
- Documented 75 public C# declarations across four reference sections, above the 20-entry threshold.
- Verified project-scoped search with 83 entries and immutable line-level source links.
- Confirmed the project-owned site, all five pages, `llms.txt`, `llms-full.txt`, and `sitemap.xml` are public.
- Sealed this validation with runx-cli 0.7.1.

## User value

- Developers can search complete signatures, overloads, properties, delegates, and constructors without expanding the README.
- Each API entry links to the exact upstream source line at the adopted commit.
- The README remains the concise architecture and usage entry point while the generated site provides full reference depth.
- Context exports make the same public reference available to search engines and coding assistants.

## Maintainer-facing gaps

- The source extractor is deterministic but syntax-based rather than Roslyn-based; future uncommon C# syntax may need explicit parser support.
- API changes should regenerate the committed Markdown so repository review and the deployed site stay aligned.
- Parameter, return, exception, and generic-constraint XML tags could be expanded into richer structured sections in a later iteration.
