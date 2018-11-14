var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
	browserSync.init({ 
		notify: false,      
		server: {
			baseDir: "dist"
		}
	});
});

gulp.task('deleteDistFolder', function() {
	return del('./dist');
});

// task to copy images to dist folder
gulp.task('optimizeImages', ['deleteDistFolder'], function() {
	return gulp.src(['./App/src/images/**/*'])
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe(gulp.dest('./dist/src/images'));
});

// task to copy styles and scripts to dist folder
gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], function() {
	return gulp.src('./App/*.html')
		.pipe(usemin({
			css: [function() {return rev()}, function() {return cssnano()}],
			js: [function() {return rev()}, function() {return uglify()}]
		}))
		.pipe(gulp.dest('./dist'));
});

gulp.task('php', ['deleteDistFolder'], function() {
	return gulp.src('./App/src/php/*.php')
		.pipe(gulp.dest('./dist/src/php'));
});

gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin', 'php']);