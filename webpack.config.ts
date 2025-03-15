import { join } from "path"
import type { Configuration } from "webpack"

export default {
	mode: "production",
	target: "node",
	entry: {
		extension: join(import.meta.dirname, "src/extension.ts")
	},
	output: {
		path: join(import.meta.dirname, "dist"),
		libraryTarget: "commonjs2",
		clean: true,
	},
	externals: {
		vscode: "commonjs vscode"
	},
	resolve: {
		extensions: [".ts"]
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: {
					loader: "ts-loader",
					options: {
						onlyCompileBundledFiles: true
					}
				}
			}
		]
	}
} satisfies Configuration
