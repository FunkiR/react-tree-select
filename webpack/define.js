const {resolve} = require('path');

const {NODE_ENV: environment} = process.env;
const development = environment === 'development';
const production = environment === 'production';
const dist = resolve(__dirname, '../dist');
const build = resolve(__dirname, '../build');
const src = resolve(__dirname, '../src');

module.exports = {
	build,
	development,
	dist,
	mode: environment,
	production,
	src
};
