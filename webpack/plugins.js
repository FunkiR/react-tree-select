const CircularDependencyPlugin = require('circular-dependency-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const {development} = require('./define');

module.exports = [
	new MiniCssExtractPlugin({
		filename: development ? '[name].css' : 'index.css'
	}),
	new CircularDependencyPlugin(),
	//new BundleAnalyzerPlugin()
];
