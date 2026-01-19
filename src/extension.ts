import * as vscode from 'vscode';
import { SqliteEditorProvider } from './sqliteEditor';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "vscode-sqlite-viewer" is now active!');

    // Register our custom editor provider
    context.subscriptions.push(SqliteEditorProvider.register(context));

    const disposable = vscode.commands.registerCommand('vscode-sqlite-viewer.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from SQLite Viewer!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
