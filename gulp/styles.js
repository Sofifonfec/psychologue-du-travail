const gulp = require('gulp'); 
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');

gulp.task('styles', function() {
	return gulp.src('./App/src/styles/styles.scss')
		.pipe(sass())
		.on('error', function(errorInfo) {
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./App/build/styles'));
});