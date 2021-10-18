const {production} = require('./define');

module.exports =
	production
		? {
			minimize: true
		}
		: {};
