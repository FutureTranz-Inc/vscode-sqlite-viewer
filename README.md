# SQLite Viewer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-0.0.1-green.svg)](https://github.com/FutureTranz-Inc/vscode-sqlite-viewer)

**Professional SQLite Database Management for VS Code**

> **Graphics Note:** Visual assets for this project are designed using **Nano Banana Pro**.

VS Code extension to view and manipulate SQLite database files with ease. Designed for developers who need quick access to their data without leaving their editor.

![SQLite Viewer Demo](images/demo_placeholder.png)

> **Note:** Screenshots coming soon! Please add `demo.png` and `editor_view.png` to the `images` folder.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Architecture](#architecture)
- [Troubleshooting](#troubleshooting)
- [Roadmap](#roadmap)
- [Ethics & Governance](#ethics--governance)
- [Privacy Policy](#privacy-policy)
- [Contributing](#contributing)
- [License](#license)

## Features

- **View SQLite Files**: Open `.sqlite`, `.db`, and `.sqlite3` files directly in VS Code by clicking on them in the explorer.
- **Table Viewer**: Inspect tables and their data in a modern, responsive webview.
- **Schema Inspection**: View database schema and structure to understand your data model.
- **SQL Execution**: (Coming Soon) Run custom SQL queries directly from the interface.

![Editor View](images/editor_view_placeholder.png)

## Installation

1. Open **Visual Studio Code**.
2. Go to the **Extensions** view (`Ctrl+Shift+X` or `Cmd+Shift+X`).
3. Search for "SQLite Viewer".
4. Click **Install**.
   *(Note: Until published to the Marketplace, you can clone this repo and run `F5` to test)*

## Usage

1. **Open a Database**: Locate a `.sqlite`, `.db`, or `.sqlite3` file in your file explorer.
2. **Click to Open**: The extension automatically registers as a custom editor for these file types.
3. **Explore Data**:
    - Use the sidebar to navigate between tables.
    - View the schema and data in the main view.

## Architecture

This extension uses VS Code's `CustomReadonlyEditorProvider` API.

### System Design

```mermaid
graph TD
    subgraph VS Code Extension Host
        Ext[Extension Entry Point] --> Provider[CustomEditorProvider]
        Provider -->|Read File| API[VS Code FS API]
        Provider -->|Post Message| WV[Webview Panel]
    end
    
    subgraph Webview Context
        WV -->|HTML/CSS/JS| UI[User Interface]
        UI -->|Request Data| Provider
    end
    
    subgraph Local File System
        API -->|Stream| DB[(SQLite Database)]
    end
    
    style Ext fill:#007acc,stroke:#fff,color:#fff
    style Provider fill:#007acc,stroke:#fff,color:#fff
    style WV fill:#e05a00,stroke:#fff,color:#fff
    style DB fill:#4CAF50,stroke:#fff,color:#fff
```

- **Frontend**: A Webview populated with HTML/CSS/JS that communicates with the extension host.
- **Backend**: The extension host reads the SQLite file from disk and sends data to the Webview.
- **Security**: The Webview is sandboxed and only allows scripts defined by the extension.

### Data Flow

```mermaid
sequenceDiagram
    participant User
    participant VSCode as VS Code
    participant Ext as Extension Host
    participant Webview
    
    User->>VSCode: Click .sqlite file
    VSCode->>Ext: resolveCustomEditor()
    Ext->>Webview: Create Webview Panel
    Webview-->>Ext: Ready
    Ext->>Webview: Send HTML Content
    Webview-->>User: Display Loading State
    Webview->>Ext: Request Table List
    Ext->>VSCode: Read Database Header
    VSCode-->>Ext: Database Metadata
    Ext->>Webview: Return Table List
    Webview-->>User: Render Tables
```

## Troubleshooting

- **File not opening?** Ensure the file extension is supported (`.db`, `.sqlite`, `.sqlite3`). You can right-click the file and select "Open With..." -> "SQLite Viewer".
- **Large files:** Opening very large database files (> 100MB) might be slow initially as we optimize data loading.

## Roadmap

- [x] Basic File Viewer
- [ ] Execute SQL Queries
- [ ] SQL File Support (.sql)
- [ ] Data Editing
- [ ] Export Data

## Ethics & Governance

This project adheres to the ethical development standards defined in our [AI Dev Tasks](https://github.com/FutureTranz-Inc/ai-dev-tasks) framework. We are committed to:
- Transparency in our development process.
- Responsible use of automation and AI.
- Ensuring user data privacy (this extension runs entirely locally).

## Privacy Policy

Your privacy is important to us.
- **Local Only:** This extension operates entirely on your local machine.
- **No Data Collection:** We do not collect or transmit any of your database content or personal information.
- See the full [Privacy Policy](PRIVACY.md).

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on code of conduct and the pull request process.

## License

This project is licensed under the [MIT License](LICENSE).
Free and open source for personal and commercial use.
