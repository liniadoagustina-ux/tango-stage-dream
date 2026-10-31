# Project architecture

- Store uploaded website media as Lovable Assets pointer files and import each pointer’s `.url`; this keeps binaries out of source control while preserving stable delivery.
- Store intrinsic image dimensions in a shared image catalog and reference lossless WebP pointers; this preserves artwork while preventing layout shifts.
- Centralize per-page canonical, social metadata and PerformingGroup data in the SEO helper so all public pages remain consistent.
- Generate sitemap URLs from explicit router inclusion decisions; this keeps public routes synchronized without build-time lastmod values.
- Keep the shared Reveal wrapper static; only hero presentations use reveal motion, guarded by reduced-motion preferences.
- Keep Show facts and credits in shared data and gallery enlargement in a focused component; this separates audience content from image interaction without adding a Gallery route.
- Keep Company biographical facts and trajectory lists in shared data; this makes factual dates and ages testable independently of page presentation.
- Keep Artists-page grouping, show roles and credits in a presentation catalog keyed by existing artist slugs; this preserves original portraits, full biographies and homepage cast ordering.
