const {src} = require('./define');

module.exports = {
	alias: {
		'~': src
	},
	extensions: ['.ts', '.tsx', '.js'],
	modules: ['node_modules', 'src']
};
