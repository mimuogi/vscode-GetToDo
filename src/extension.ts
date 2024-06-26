// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { HelloWorldPanel } from './HelloWorldPanel';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-gettodo" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	context.subscriptions.push(
		vscode.commands.registerCommand('vscode-gettodo.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
			vscode.window.showInformationMessage('Hello World from Jolivert\'s Extension!');
	}
	));

	context.subscriptions.push(
		vscode.commands.registerCommand('vscode-gettodo.helloWorldPanel', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
			HelloWorldPanel.createOrShow(context.extensionUri);
	}
	));


	context.subscriptions.push(
		vscode.commands.registerCommand("vscode-gettodo.askQuestion", async () => {
			
			const answer = await vscode.window.showInformationMessage("How was your day?", "Good", "Bad");

			if (answer === "Bad") {
				vscode.window.showInformationMessage("Sorry about that :(");
				
			} 
			else if (answer === "Good"){
				vscode.window.showInformationMessage("Hope you have a productive day! :)");
			} else {console.log({answer});}
	}
	));
}

// This method is called when your extension is deactivated
export function deactivate() {}
