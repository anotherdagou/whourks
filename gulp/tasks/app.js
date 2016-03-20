var gulp 		= require('gulp');
var config  	= require('../config').app; 
var cache		= require('gulp-cached');
var browserSync = require('browser-sync');

gulp.task('app', function() {
	return gulp.src(config.src)
	.pipe(cache('cache'))
	.pipe(browserSync.reload({stream:true}));
});