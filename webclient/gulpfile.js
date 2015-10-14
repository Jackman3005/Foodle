var gulp = require('gulp'),
	watch = require('gulp-watch'),
	gutil = require('gulp-util'),
	path = require('path'),
	karma = require('karma'),
	karmaParseConfig = require('karma/lib/config').parseConfig,
	connect = require('gulp-connect');

function runKarma(configFilePath, options) {

	configFilePath = path.resolve(configFilePath);

	//var log = gutil.log, colors = gutil.colors;
	var config = karmaParseConfig(configFilePath, {});

	Object.keys(options).forEach(function (key) {
		config[key] = options[key];
	});

	new karma.Server(config, function (exitCode) {
		process.exit(exitCode);
	}).start();
}

/** Gulp tasks */

gulp.task('serve', function () {
	connect.server();
});

gulp.task('default', ['serve', 'livereload']);

gulp.task('livereload', function () {
	gulp.src(['app/**/*.js', 'app/**/*.html'])
		.pipe(connect.reload());
});

/** single test run */
gulp.task('test', function (cb) {
	runKarma('karma.conf.js', {
		autoWatch: false,
		singleRun: true
	}, cb);
});

/** continuous ... using karma to watch */
gulp.task('test-dev', function (cb) {
	runKarma('karma.conf.js', {
		autoWatch: true,
		singleRun: false
	}, cb);
});