# Task List: Production Readiness (PRD-0009)

## Relevant Files

- `.github/workflows/ci.yml` - CI workflow configuration
- `.github/workflows/publish.yml` - CD/Publishing workflow configuration
- `src/utils/logger.ts` - New logging utility service
- `src/utils/telemetry.ts` - New telemetry service wrapper
- `package.json` - Dependency and script updates
- `webpack.config.js` - Build configuration updates for WASM/Assets
- `README.md` - Documentation updates
- `CHANGELOG.md` - Release history tracking
- `LICENSE` - License file verification
- `images/icon.png` - Extension icon
- `images/screenshot-*.png` - Marketplace screenshots

### Notes

- Focus on stability and automation over new features
- Ensure all secrets (VSCE_PAT) are configured in GitHub repository settings
- Telemetry must be strictly opt-in or follow VS Code's telemetry guidelines
- License compatibility check is critical before publishing

## Tasks

### 1.0 Build & Dependencies (Priority: High, Effort: M)
- [ ] 1.1 Select and install SQLite driver
  - **Dependencies**: None
  - **Effort**: S (2 hours)
  - **Acceptance Criteria**: `sql.js` (or chosen driver) installed as runtime dependency and verified working in Electron environment
  - **Files**: `package.json`

- [ ] 1.2 Update Webpack configuration
  - **Dependencies**: 1.1
  - **Effort**: M (4 hours)
  - **Acceptance Criteria**: Webpack correctly bundles WASM files and external native modules; extension runs without "module not found" errors
  - **Files**: `webpack.config.js`

- [ ] 1.3 Audit and Move Dependencies
  - **Dependencies**: None
  - **Effort**: S (1 hour)
  - **Acceptance Criteria**: All runtime requirements are in `dependencies`, build tools in `devDependencies`. No unused packages.
  - **Files**: `package.json`

### 2.0 CI/CD Pipeline (Priority: High, Effort: L)
- [ ] 2.1 Create CI Workflow
  - **Dependencies**: None
  - **Effort**: M (4 hours)
  - **Acceptance Criteria**: GitHub Action runs on PRs, executing linting, compilation, and tests. Fails on errors.
  - **Files**: `.github/workflows/ci.yml`

- [ ] 2.2 Create Publishing Workflow
  - **Dependencies**: 2.1
  - **Effort**: M (4 hours)
  - **Acceptance Criteria**: GitHub Action runs on release tags, builds .vsix, and publishes to VS Code Marketplace using secrets.
  - **Files**: `.github/workflows/publish.yml`

- [ ] 2.3 Configure GitHub Repository Secrets
  - **Dependencies**: 2.2
  - **Effort**: S (30 mins)
  - **Acceptance Criteria**: `VSCE_PAT` and other necessary secrets are added to the repo settings.
  - **Files**: N/A (GitHub Settings)

### 3.0 Telemetry & Logging (Priority: Medium, Effort: M)
- [ ] 3.1 Implement Output Channel Logger
  - **Dependencies**: None
  - **Effort**: S (2 hours)
  - **Acceptance Criteria**: Extension writes info/error logs to a "SQLite Viewer" output channel in VS Code.
  - **Files**: `src/utils/logger.ts`

- [ ] 3.2 Integrate Telemetry Service
  - **Dependencies**: None
  - **Effort**: M (4 hours)
  - **Acceptance Criteria**: Basic anonymous usage events (activation, open file) are sent; respects `telemetry.enableTelemetry` setting.
  - **Files**: `src/utils/telemetry.ts`

- [ ] 3.3 Add Error Boundary/Global Handler
  - **Dependencies**: 3.1, 3.2
  - **Effort**: S (3 hours)
  - **Acceptance Criteria**: Uncaught exceptions are caught, logged, and reported without crashing the extension host.
  - **Files**: `src/extension.ts`

### 4.0 Marketplace Assets (Priority: Medium, Effort: S)
- [ ] 4.1 Design and Add Extension Icon
  - **Dependencies**: None
  - **Effort**: S (2 hours)
  - **Acceptance Criteria**: `images/icon.png` (128x128) exists and is referenced in `package.json`.
  - **Files**: `images/icon.png`, `package.json`

- [ ] 4.2 Capture Screenshots
  - **Dependencies**: Functional Prototype
  - **Effort**: S (1 hour)
  - **Acceptance Criteria**: High-quality screenshots of the viewer (light/dark mode) added to `images/` and README.
  - **Files**: `images/screenshot-*.png`

- [ ] 4.3 Update Manifest Metadata
  - **Dependencies**: 4.1
  - **Effort**: S (1 hour)
  - **Acceptance Criteria**: `displayName`, `description`, `keywords`, `repository`, and `bugs` fields are accurate and optimized for search.
  - **Files**: `package.json`

### 5.0 Documentation & Compliance (Priority: Medium, Effort: S)
- [ ] 5.1 Update README.md
  - **Dependencies**: 4.2
  - **Effort**: S (2 hours)
  - **Acceptance Criteria**: Clear feature list, usage instructions, known issues, and "Alpha" disclaimer if applicable. No broken links.
  - **Files**: `README.md`

- [ ] 5.2 Initialize CHANGELOG.md
  - **Dependencies**: None
  - **Effort**: S (30 mins)
  - **Acceptance Criteria**: File exists with initial entry for current version.
  - **Files**: `CHANGELOG.md`

- [ ] 5.3 Verify License Compatibility
  - **Dependencies**: 1.1
  - **Effort**: S (1 hour)
  - **Acceptance Criteria**: All bundled dependencies allow redistribution under the project's license (MIT/Apache).
  - **Files**: `LICENSE`, `3rd-party-licenses.txt` (optional)