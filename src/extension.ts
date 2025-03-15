import { randomUUID } from "crypto"
import { TextEditor, TextEditorEdit, commands, type ExtensionContext } from "vscode"

export function activate(context: ExtensionContext) {

	context.subscriptions.push(
		commands.registerTextEditorCommand("decodeURIComponent", (editor: TextEditor, edit: TextEditorEdit) => {
			edit.replace(editor.selection, decodeURIComponent(editor.document.getText(editor.selection)))
		})
	)

	context.subscriptions.push(
		commands.registerTextEditorCommand("encodeURIComponent", (editor: TextEditor, edit: TextEditorEdit) => {
			edit.replace(editor.selection, encodeURIComponent(editor.document.getText(editor.selection)))
		})
	)

	context.subscriptions.push(
		commands.registerTextEditorCommand("randomUUID", (editor: TextEditor, edit: TextEditorEdit) => {
			for (const selection of editor.selections) {
				edit.insert(selection.start, randomUUID())
			}
		})
	)

	context.subscriptions.push(
		commands.registerTextEditorCommand("secure", (editor: TextEditor, edit: TextEditorEdit) => {
			edit.replace(editor.selection, "X".repeat(editor.document.getText(editor.selection).length))
		})
	)
}
