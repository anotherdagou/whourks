var app = './app';

module.exports = {
	browserSync: {
		server: {
			baseDir: app
		},
		open: true
	},
	app: {
		src: app + '/*.*'
	}
} 