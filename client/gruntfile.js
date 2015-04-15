module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
			files: 'src/js/**/*.js',
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
					cwd: 'src/js',
					src: '**/*.js',
					dest: 'dist/js'
				}]
			}
		},
		browserSync: {
			dev: {
				bsFiles: {
					src : [
						'dist/**/*'
					]
				},
				options: {
					watchTask: true,
					server: './dist'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default', ['browserSync', 'watch']);
}