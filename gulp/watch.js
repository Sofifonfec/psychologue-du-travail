const gulp = require('gulp'); 	
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

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

	watch('./App/src/scripts/**/*.js', function() {
		gulp.start('scriptsRefresh');
	});

	watch('./App/src/contact-form.php', function() {
		browserSync.reload();
	});
});

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./App/build/styles/styles.css')
		.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
});