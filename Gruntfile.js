'use strict';

module.exports = function(grunt) {
	var path = require('path');

	require('load-grunt-config')(grunt, {
		// path to task.js files, defaults to grunt dir
		configPath: path.join(process.cwd(), 'grunt-tasks'),

		// auto grunt.initConfig
		init: true,

		//can optionally pass options to load-grunt-tasks.
		//If you set to false, it will disable auto loading tasks.
		loadGruntTasks: {
			pattern: ['grunt-*', '@*/grunt-*'],
			config: './package',
			scope: 'devDependencies'
		}
	});

	grunt.registerTask('serve', ['build', 'concurrent:serve']);

	grunt.registerTask('build', ['compileCSS', 'compileJS']);

	grunt.registerTask('compileCSS', ['sass']);

	grunt.registerTask('compileJS', ['webpack']);
};