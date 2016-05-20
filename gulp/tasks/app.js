var gulp 		= require('gulp');
var config  	= require('../config').app; 
var cache		= require('gulp-cached');
var browserify  = require('browserify');
var babelify    = require('babelify');
var browserSync = require('browser-sync');
var source = require('vinyl-source-stream');

gulp.task('app', function() {
	return browserify({
        extensions: ['.js', '.jsx'],
        entries: config.src,
        debug: true
    })
    .transform(babelify.configure({
        presets: ["es2015", "react"]
    }))
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.dest))
	.pipe(browserSync.reload({stream:true}));
});