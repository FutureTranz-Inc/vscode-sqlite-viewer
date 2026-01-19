# 0009-prd-production-readiness.md

## Introduction/Overview
The Production Readiness PRD addresses the critical infrastructure, compliance, and distribution gaps required to transform the `vscode-sqlite-viewer` from a prototype into a publishable VS Code extension. This phase focuses on "plumbing," security, and the delivery pipeline rather than core feature development.

## Goals
1.  Establish a fully automated CI/CD pipeline for building, testing, and publishing.
2.  Ensure all runtime dependencies are correctly bundled and licensed.
3.  Implement robust error handling, logging, and telemetry.
4.  Finalize marketplace assets and user documentation.
5.  Verify security compliance for file access and webview content security policies (CSP).

## User Stories
*   **As a maintainer**, I want an automated build pipeline so that I can ensure every PR passes tests before merging.
*   **As a release manager**, I want a one-click publish workflow to the VS Code Marketplace to minimize manual errors.
*   **As a user**, I want helpful error messages and logs when the extension fails to open a corrupt database.
*   **As a user**, I want to see accurate screenshots and feature descriptions in the Marketplace before installing.

## Functional Requirements

### 1. Build & Dependencies
*   **SQLite Driver:** Select and install a compatible SQLite driver (Recommendation: `sql.js` for pure JS/WASM compatibility in VS Code, or `better-sqlite3` if native bindings are managed).
*   **Bundling:** Update `webpack.config.js` to correctly bundle WASM files or native bindings if required.
*   **Production Deps:** Move necessary libraries from `devDependencies` to `dependencies` in `package.json`.

### 2. CI/CD Pipeline
*   **CI Workflow:** Create a GitHub Action (`.github/workflows/ci.yml`) that runs on PRs:
    *   Linting (`npm run lint`)
    *   Unit & Integration Tests (`npm test`)
    *   Build Verification (`npm run package`)
*   **CD Workflow:** Create a GitHub Action (`.github/workflows/publish.yml`) that runs on tags/releases:
    *   Bumps version number.
    *   Publishes to VS Code Marketplace (requires `VSCE_PAT` secret).
    *   Creates a GitHub Release artifact (`.vsix`).

### 3. Telemetry & Logging
*   **Output Channel:** Implement a dedicated VS Code Output Channel ("SQLite Viewer") for logging errors and debug info.
*   **Telemetry:** Integrate `vscode-extension-telemetry` (or similar compliant library) to track:
    *   Extension activation counts.
    *   File open success/failure rates.
    *   Performance metrics (time to open DB).
    *   *Note: Must respect user's strict privacy settings.*

### 4. Marketplace Assets
*   **Icon:** Create and add a high-res extension icon (`128x128`).
*   **Screenshots:** Generate real screenshots of the extension in action (Dark/Light themes).
*   **Manifest:** Update `package.json` metadata:
    *   `icon` path.
    *   `keywords` for better discoverability.
    *   `repository` and `bugs` links.

### 5. Documentation
*   **README Update:** Replace placeholder text and fix broken image links. accurately describe current capabilities (Alpha/Beta status).
*   **CHANGELOG:** Initialize `CHANGELOG.md` following [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) standards.
*   **License Check:** Verify `LICENSE` file is accurate and all bundled dependencies are license-compatible.

## Non-Goals
*   Implementation of new viewing features (e.g., Query Editor) not already in scope.
*   Support for remote/SSH file systems (focus on local filesystem first).

## Technical Considerations
*   **WASM Support:** If using `sql.js`, ensure the `wasm` file is correctly served to the Webview and strict Content Security Policy (CSP) headers allow its execution.
*   **Bundle Size:** Monitor the `.vsix` size. SQLite WASM binaries can be large; consider lazy loading if possible.

## Success Metrics
*   **Build Reliability:** CI pipeline passes 100% of the time for valid code.
*   **Marketplace Acceptance:** Extension is successfully validated and published to the Marketplace without rejection.
*   **Crash Rate:** < 1% of sessions result in an unhandled exception logged.