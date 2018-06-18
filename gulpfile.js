// packages
const gulp = require('gulp'); 
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');	
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();
const webpack = require('webpack');
const imagemin = require('gulp-imagemin');
const del = require('del');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');

// STYLES TASK SASS SET UP

gulp.task('styles', function(){
	return gulp.src('./App/src/styles/styles.scss')
		.pipe(sass())
		.on('error', function(errorInfo) {
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./App/build/styles'));
});

// SCRIPTS TASK
/**
gulp.task('scripts', function(callback) {
	webpack(require('./webpack.config.js'), function(err, stats) {
		if (err) {
			console.log(err.toString());
		}

		console.log(stats.toString());
		callback();
	});
});
**/

// WATCH AND BROWSER SYNC

gulp.task('watch', function() {

	browserSync.init({
		notify: false,
		server: {
			baseDir: 'App'
		}
	});

	watch('./App/*.html', function() {
		browserSync.reload();
	});

	watch('./App/src/styles/**/*.scss', function() {
		gulp.start('cssInject');
	});

//	watch('./App/src/scripts/**/*.js', function() {
//		gulp.start('scriptsRefresh');
//	});
});

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./App/build/styles/styles.css')
		.pipe(browserSync.stream());
});
/**
gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
}); **/