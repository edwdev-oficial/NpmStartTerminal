const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.startNpm', function () {
        const terminal = vscode.window.createTerminal();
        terminal.show();
        terminal.sendText('npm start');
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;
