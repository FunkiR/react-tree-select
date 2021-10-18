const autoprefixer = require('autoprefixer');
const {development} = require('./define');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	rules: [
		{
			exclude: /node_modules/,
			test: /\.tsx?$/,
			loader: 'ts-loader',
			options: {
				transpileOnly: true
			}
		},
		{
			exclude: /node_modules/,
			test: /\.tsx?$/,
			use: {
				loader: 'babel-loader'
			}
		},
		{
			test: /\.(css|scss)$/,
			use: [
				{
					loader: MiniCssExtractPlugin.loader
				},
				{
					loader: 'css-loader',
					options: {
						modules: {
							localIdentName: development ? '[path][name]__[local]' : '[local]__[hash:base64]',
						},
						sourceMap: development
					}
				},
				{
					loader: 'postcss-loader',
					options: {
						postcssOptions: {
							plugins: [
								autoprefixer()
							]
						},
						sourceMap: development
					}
				},
				{
					loader: 'sass-loader',
					options: {
						sourceMap: development
					}
				}
			]
		},
		{
			test: /\.(gif|png|jpg|jpeg|woff|woff2|ttf|eot|svg)$/,
			use: 'file-loader'
		}
	]
};
