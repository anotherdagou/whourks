var gulp	= require('gulp'),
	config	= require('../config');

gulp.task('watch', ['browserSync'], function() {
	gulp.watch(config.app.src, ['app']);
});