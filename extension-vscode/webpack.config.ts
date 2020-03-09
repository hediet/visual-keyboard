import * as webpack from "webpack";
import path = require("path");
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyPlugin = require("copy-webpack-plugin");
import { readFileSync } from "fs";

const r = (file: string) => path.resolve(__dirname, file);

module.exports = {
	target: "node",
	entry: r("./src/extension"),
	output: {
		path: r("./dist"),
		filename: "extension.js",
		libraryTarget: "commonjs2",
		devtoolModuleFilenameTemplate: "../[resource-path]",
	},
	devtool: "source-map",
	externals: {
		vscode: "commonjs vscode",
		"@hediet/visual-keyboard-frontend": "@hediet/visual-keyboard-frontend",
		iohook: "iohook",
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "ts-loader",
					},
				],
			},
		],
	},
	node: {
		__dirname: false,
	},
	plugins: [
		new CleanWebpackPlugin(),
		includeDependency("../frontend"),
		includeDependency("iohook"),
	],
} as webpack.Configuration;

function includeDependency(pkg: string) {
	const pkgJson = path.join(pkg, "package.json");
	const pkgJsonPath = require.resolve(pkgJson);
	const pkgPath = path.join(pkgJsonPath, "../");

	const content = readFileSync(pkgJsonPath, {
		encoding: "utf8",
	});
	const pkgName = JSON.parse(content).name;

	return new CopyPlugin([
		{
			from: pkgPath,
			to: r(`./dist/node_modules/${pkgName}`),
			ignore: ["**/node_modules/**/*"],
		},
	]);
}
