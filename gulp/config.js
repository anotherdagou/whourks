var app = './app';

module.exports = {
	browserSync: {
		server: {
			baseDir: app
		},
		open: true
	},
	app: {
		src: app + '/js/app.jsx',
		dest: app + '/js/'
	}
} 