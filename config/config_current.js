module.exports = {
	name: 'manage',
	express: {
		host: '127.0.0.1',
		port: 2222
	},
	db: {
		mongo: {
			host: '127.0.0.1',
			port: 27017,
			db: 'vue-seed'
		},
		redis: {
			host: '127.0.0.1',
			port: 6379,
			dbIndex: 7,
			ttl: 3600 * 24 * 365, // one year (session TTL)
			secret: '1'
		},
	},
	cookie: {
		secret: '1',
		name: '',
	}
};
