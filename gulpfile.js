var gulp = require('gulp')
var concat = require('gulp-concat')
var clean = require('gulp-clean')
var copy = require('gulp-copy')
var uglify = require('gulp-uglify')
var browserify = require('gulp-browserify')
var rename = require('gulp-rename')
var minifycss = require('gulp-minify-css')
var jshint = require('gulp-jshint')

var config = {
	images: {

	},
	fonts: {
		src: [
			'bower_components/bootstrap/dist/fonts/*.*',
			'bower_components/material-design-iconic-font/dist/fonts/*.*'
		],
		dist: 'public/css/fonts'
	},
	css: {
		src: [
			'bower_components/bootstrap/dist/css/bootstrap.min.css',
			'bower_components/bootstrap/dist/css/bootstrap.min.map',
			'bower_components/bootstrap-sweetalert/dist/sweetalert.css',
			'bower_components/animate.css/animate.min.css',
			'bower_components/material-design-iconic-font/dist/css/material-design-iconic-font.min.css'
		],
		dist: 'public/css/lib',
		source: 'public/css/src/*.css',
		build: 'public/css/build'
	},
	js: {
		src: [
			'bower_components/jquery/dist/jquery.min.js',
			'bower_components/jquery/dist/jquery.min.map',
			'bower_components/paging/jquery.paging.min.js',
			'bower_components/bootstrap/dist/js/bootstrap.min.js',
			'bower_components/bootstrap/js/carousel.js',
			'bower_components/bootstrap-sweetalert/dist/sweetalert.min.js',
			'bower_components/moment/min/moment.min.js'
		],
		dist: 'public/js/lib'
	}
}

gulp.task('clean', function() {
	return gulp.src(['public/js/build/client/build.js', 'public/js/build/admin/build.js'])
		.pipe(clean({
			force: true
		}))
})

// 检查脚本
gulp.task('lint', function() {
	return gulp.src('public/js/src/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
})

gulp.task('images', function() {

})

gulp.task('fonts', function() {
	gulp.src(config.fonts.src)
		.pipe(gulp.dest(config.fonts.dist))
})

gulp.task('css', function() {
	gulp.src(config.css.src)
		.pipe(gulp.dest(config.css.dist))

	gulp.src(config.css.source)
		.pipe(concat('main.css'))
		.pipe(gulp.dest(config.css.build))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(minifycss())
		.pipe(gulp.dest(config.css.build))
})

gulp.task('js', ['lint'], function() {
	gulp.src(config.js.src)
		.pipe(gulp.dest(config.js.dist))

	gulp.src('public/js/src/client/main.js')
		.pipe(gulp.dest('public/js/build/client'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('public/js/build/client'))

	gulp.src('public/js/src/admin/main.js')
		.pipe(gulp.dest('public/js/build/admin'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('public/js/build/admin'))
})

gulp.task('browserify', ['clean', 'lint'], function() {
	gulp.src('public/js/src/client/app.js')
		.pipe(browserify({
			transform: ["debowerify", "vueify"]
		}))
		.pipe(rename('build.js'))
		.pipe(gulp.dest('public/js/build/client'))

	gulp.src('public/js/src/admin/app.js')
		.pipe(browserify({
			transform: ["debowerify", "vueify"]
		}))
		.pipe(rename('build.js'))
		.pipe(gulp.dest('public/js/build/admin'))
})

gulp.task('build', ['images', 'fonts', 'css', 'js', 'browserify'])

gulp.task('watch', ['build'], function() {
	gulp.watch(['public/js/src/**/*.js', 'public/js/src/components/**/*.vue'], ['browserify'])
	gulp.watch(['public/css/src/*.css'], ['css'])
})

gulp.task('default', ['watch'])
