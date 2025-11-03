## Repo snapshot (what this repo is)

This repository is a small front-end examples collection (static HTML/CSS). There is no build system, package.json, or server code — just files you can open in a browser. The primary purpose is educational/demo examples grouped by topic.

## High-level structure

- `html/` — grouped topic folders (e.g. `Lists/`, `Table/`, `Forms/`, `Image_Mapping/`). Each folder contains example `.html` pages.
- `css/` — shared CSS files (e.g. `Registration_Form1.css`). Examples typically reference these with relative paths.
- `img/` and `html/Image_Mapping/Images/` — image assets used by pages.

Key example files to reference when editing or adding examples:
- `html/Lists/21.html` — simple list example (current working file).
- `html/Table/Registration_Form.html` and `Registration_Form1.html` — form/table examples referencing `css/Registration_Form1.css`.
- `html/Image_Mapping/*.html` — image map examples (uses local images under `Images/`).

## Why this structure

Files are organized by teaching topic. Each HTML page is intended to be a self-contained example demonstrating a specific HTML/CSS concept. Keep that pattern when adding new content: one example per page inside the relevant topic folder.

## Conventions and patterns an AI should follow

- Paths are relative. When editing an HTML file inside `html/<topic>/`, reference CSS with `../css/...` or `../../css/...` depending on nesting. Check existing pages for the correct relative depth.
- Naming: examples use descriptive names or numbers (e.g. `21.html`, `Registration_Form.html`). Preserve existing naming patterns for easy browsing.
- Self-contained pages: prefer adding minimal inline notes in HTML comments to explain what the example shows. Avoid adding JS or external assets unless the example needs it.
- CSS: shared styles live in `css/`. If adding component-specific CSS, either place it in `css/` with a clear name or add a small `<style>` block in the example page.

Examples from the repo:
- Link to CSS in `html/Table/Registration_Form.html`:
  - Uses a relative path to `../..` depending on the folder depth — follow that pattern when adding new links.
- Image maps in `html/Image_Mapping/jalgaon.html` reference images in the local `Images/` directory — keep assets grouped under `Images/`.

## Developer workflows (discovered / inferred)

- Previewing: open any `html/... .html` file directly in a browser. For a lightweight server (recommended for correct relative routing or testing fetches), run a static server from the repo root, for example:
  - `python -m http.server` (serves current directory on localhost)
  - Or use VS Code Live Server extension to serve the workspace and reload on changes.
- There are no tests or build steps to run. PRs should be small and example-focused.

## What to change in PRs

- When adding an example, place a single HTML page in the appropriate `html/<topic>/` folder, add any required images under `img/` or `html/<topic>/Images/`, and link to shared CSS in `css/` if possible.
- Keep examples minimal and self-explanatory. Use HTML comments to explain intent.

## Things NOT to do

- Do not add a complex build system or heavy dependencies for a simple examples repo. If you propose such a change, document the reason in the PR description.
- Avoid global-breaking changes to shared CSS unless every example is updated accordingly; prefer adding new CSS files scoped to new examples.

## Where to look next (important files)

- `html/Lists/21.html` — example page currently open in the editor; useful to model new list examples.
- `css/Registration_Form1.css` — example of shared styling used by form pages.
- `html/Image_Mapping/` — demonstrates image asset usage and mapping patterns.

If anything here is unclear or you want the guidance tuned (for example: add a short commit message template, or a live-server npm script), tell me which areas to expand and I will iterate.
