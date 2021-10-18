const loaders = require('./loaders');
const optimization = require('./optimization');
const plugins = require('./plugins');
const resolve = require('./resolve');
const {build, mode} = require('./define');

module.exports = {
	entry: ['@babel/polyfill', './src/index.ts'],
	mode,
	module: loaders,
	optimization,
	output: {
		filename: 'index.js',
		library: '@funkir/react-tree-select',
		libraryTarget: 'umd',
		globalObject: 'this',
		path: build
	},
	externals: {
		'react': {
			commonjs: "react",
			commonjs2: "react",
			amd: "react",
			var: '_'
		},
	},
	plugins,
	resolve
};
