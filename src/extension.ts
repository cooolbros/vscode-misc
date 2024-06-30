import { TextEditor, TextEditorEdit, commands, type ExtensionContext } from "vscode"

export function activate(context: ExtensionContext) {

	context.subscriptions.push(
		commands.registerCommand("decodeURIComponent", (editor: TextEditor, edit: TextEditorEdit) => {
			edit.replace(editor.selection, decodeURIComponent(editor.document.getText(editor.selection)))
		})
	)

	context.subscriptions.push(
		commands.registerCommand("encodeURIComponent", (editor: TextEditor, edit: TextEditorEdit) => {
			edit.replace(editor.selection, encodeURIComponent(editor.document.getText(editor.selection)))
		})
	)
}
