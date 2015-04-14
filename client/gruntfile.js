module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
			files: 'src/**/*.js',
			tasks: ['babel']
		},
		babel: {
			options: {
				sourceMap: true,
				modules: 'system'
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'src',
					src: '**/*.js',
					dest: 'dist'
				}]
			}
		},
		browserSync: {
			dev: {
				bsFiles: {
					src : [
						'dist/**/*.js',
						'*.html'
					]
				},
				options: {
					watchTask: true,
					server: './'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default', ['browserSync', 'watch']);
}