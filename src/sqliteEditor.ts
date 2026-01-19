import * as vscode from 'vscode';

export class SqliteEditorProvider implements vscode.CustomReadonlyEditorProvider {

    public static readonly viewType = 'vscode-sqlite-viewer.sqliteEditor';

    public static register(context: vscode.ExtensionContext): vscode.Disposable {
        const provider = new SqliteEditorProvider(context);
        const providerRegistration = vscode.window.registerCustomEditorProvider(SqliteEditorProvider.viewType, provider);
        return providerRegistration;
    }

    constructor(
        private readonly context: vscode.ExtensionContext
    ) { }

    async openCustomDocument(
        uri: vscode.Uri,
        openContext: vscode.CustomDocumentOpenContext,
        token: vscode.CancellationToken
    ): Promise<vscode.CustomDocument> {
        // Just return a simple custom document for now
        return { uri, dispose: () => { } };
    }

    async resolveCustomEditor(
        document: vscode.CustomDocument,
        webviewPanel: vscode.WebviewPanel,
        _token: vscode.CancellationToken
    ): Promise<void> {
        // Setup webview options
        webviewPanel.webview.options = {
            enableScripts: true,
        };

        // Set the HTML content
        webviewPanel.webview.html = this.getHtmlForWebview(webviewPanel.webview, document.uri);
    }

    private getHtmlForWebview(webview: vscode.Webview, uri: vscode.Uri): string {
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>SQLite Viewer</title>
                <style>
                    :root {
                        --container-paddding: 20px;
                        --input-padding-vertical: 6px;
                        --input-padding-horizontal: 8px;
                        --input-margin-vertical: 4px;
                        --input-margin-horizontal: 0;
                    }
                    body {
                        font-family: var(--vscode-font-family);
                        padding: 0;
                        margin: 0;
                        color: var(--vscode-foreground);
                        background-color: var(--vscode-editor-background);
                        display: flex;
                        height: 100vh;
                        overflow: hidden;
                    }
                    .sidebar {
                        width: 250px;
                        background-color: var(--vscode-sideBar-background);
                        border-right: 1px solid var(--vscode-sideBar-border);
                        display: flex;
                        flex-direction: column;
                    }
                    .sidebar-header {
                        padding: 10px 20px;
                        font-weight: bold;
                        text-transform: uppercase;
                        font-size: 0.8em;
                        color: var(--vscode-sideBarTitle-foreground);
                    }
                    .table-list {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        flex-grow: 1;
                        overflow-y: auto;
                    }
                    .table-list li {
                        padding: 8px 20px;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                    }
                    .table-list li:hover {
                        background-color: var(--vscode-list-hoverBackground);
                        color: var(--vscode-list-hoverForeground);
                    }
                    .table-list li.active {
                        background-color: var(--vscode-list-activeSelectionBackground);
                        color: var(--vscode-list-activeSelectionForeground);
                    }
                    .main-content {
                        flex-grow: 1;
                        display: flex;
                        flex-direction: column;
                        padding: var(--container-paddding);
                        overflow-y: auto;
                    }
                    h1 {
                        margin-top: 0;
                        color: var(--vscode-editor-foreground);
                        border-bottom: 1px solid var(--vscode-panel-border);
                        padding-bottom: 10px;
                    }
                    .card {
                        background-color: var(--vscode-editorWidget-background);
                        border: 1px solid var(--vscode-editorWidget-border);
                        padding: 15px;
                        margin-bottom: 20px;
                        border-radius: 4px;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    }
                    .card h2 {
                        margin-top: 0;
                        font-size: 1.1em;
                        color: var(--vscode-textLink-foreground);
                    }
                    .roadmap ul {
                        padding-left: 20px;
                    }
                    .roadmap li {
                        margin-bottom: 5px;
                    }
                    .status-badge {
                        display: inline-block;
                        padding: 2px 6px;
                        border-radius: 3px;
                        font-size: 0.8em;
                        font-weight: bold;
                        margin-left: 8px;
                    }
                    .status-done {
                        background-color: var(--vscode-charts-green);
                        color: white;
                    }
                    .status-todo {
                        background-color: var(--vscode-charts-orange);
                        color: white;
                    }
                    code {
                        font-family: var(--vscode-editor-font-family);
                        background-color: var(--vscode-textBlockQuote-background);
                        padding: 2px 4px;
                        border-radius: 3px;
                    }
                </style>
            </head>
            <body>
                <div class="sidebar">
                    <div class="sidebar-header">Tables</div>
                    <ul class="table-list">
                        <li class="active">sqlite_sequence</li>
                        <li>users</li>
                        <li>products</li>
                        <li>orders</li>
                    </ul>
                </div>
                <div class="main-content">
                    <h1>${uri.path.split('/').pop()}</h1>

                    <div class="card">
                        <h2>Database Info</h2>
                        <p><strong>Path:</strong> <code>${uri.fsPath}</code></p>
                        <p><strong>Size:</strong> <span style="opacity: 0.7;">Unknown (Loading...)</span></p>
                    </div>

                    <div class="card roadmap">
                        <h2>Development Roadmap</h2>
                        <ul>
                            <li>View Tables and Schema <span class="status-badge status-done">DONE</span></li>
                            <li>Execute SQL Queries <span class="status-badge status-todo">TODO</span></li>
                            <li>Support for .sql files <span class="status-badge status-todo">PLANNED</span></li>
                        </ul>
                    </div>

                    <div class="card">
                         <h2>Data Preview (Placeholder)</h2>
                         <p>Select a table from the sidebar to view data.</p>
                         <div style="text-align: center; padding: 40px; color: var(--vscode-disabledForeground); border: 2px dashed var(--vscode-panel-border); border-radius: 4px;">
                            No table selected
                        </div>
                    </div>
                </div>
            </body>
            </html>`;
    }
}
