# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VS Code extension that provides a custom editor for viewing SQLite database files (`.sqlite`, `.db`, `.sqlite3`). Built with TypeScript, using VS Code's `CustomReadonlyEditorProvider` API with a webview-based UI.

## Development Commands

```bash
# Install dependencies
npm install

# Compile extension (webpack)
npm run compile

# Watch mode (auto-recompile on changes)
npm run watch

# Lint TypeScript files
npm run lint

# Run tests (compiles tests first, then runs in VS Code test host)
npm test

# Production build with source maps
npm run package
```

### Running the Extension

Press `F5` in VS Code to launch the Extension Development Host with the extension loaded. This uses the "Run Extension" launch configuration which compiles via webpack before launching.

### Running a Single Test

```bash
# Compile tests first
npm run compile-tests

# Run via vscode-test CLI (tests in out/test/)
npx vscode-test --grep "test name pattern"
```

## Architecture

### Extension Entry Point
- `src/extension.ts` - Activates extension, registers the `SqliteEditorProvider`

### Custom Editor Provider
- `src/sqliteEditor.ts` - Implements `CustomReadonlyEditorProvider`:
  - `openCustomDocument()` - Creates document handle for SQLite file
  - `resolveCustomEditor()` - Sets up webview panel with embedded HTML/CSS UI
  - `getHtmlForWebview()` - Returns complete HTML with VS Code theme CSS variables

### Build System
- **Webpack** bundles TypeScript to `dist/extension.js`
- **ts-loader** handles TypeScript compilation
- `vscode` module is external (provided by VS Code runtime)

### Custom Editor Registration
Defined in `package.json` under `contributes.customEditors`:
- View type: `vscode-sqlite-viewer.sqliteEditor`
- File patterns: `*.sqlite`, `*.db`, `*.sqlite3`
- Priority: `default` (opens automatically for these extensions)

### Webview Communication Pattern
The webview uses VS Code CSS variables for theming (e.g., `--vscode-sideBar-background`). Communication between extension host and webview is via `webviewPanel.webview.postMessage()` and `webview.onDidReceiveMessage()` (not yet implemented).

## Current State

The extension currently displays a placeholder UI with:
- Left sidebar showing hardcoded table names
- Main content area with database path and roadmap status
- No actual SQLite parsing implemented yet

Next steps per roadmap:
1. Integrate SQLite parsing library (e.g., `sql.js` or `better-sqlite3`)
2. Extract table list from database
3. Display actual table data in the webview
4. Add SQL query execution

## ESLint Configuration

Uses flat config (`eslint.config.mjs`) with TypeScript ESLint:
- Naming conventions for imports (camelCase/PascalCase)
- Requires curly braces, strict equality, semicolons
- No throw literals

## Test Configuration

Tests use `@vscode/test-cli` configured in `.vscode-test.mjs`:
- Test files compiled to `out/test/**/*.test.js`
- Run in VS Code Extension Host environment
