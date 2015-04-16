module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
			files: 'src/**/*',
			tasks: ['copy' , 'babel']
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
		copy: {
			main: {
				files: [{
					expand: true,
					cwd: 'src',
					src: '**/*.html',
					dest: 'dist'
				}]
			}
		},
		browserSync: {
			dev: {
				bsFiles: {
					src : [
						'dist/**/*',
						'!dist/**/*.map'
					]
				},
				options: {
					watchTask: true,
					server: './'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default', ['browserSync', 'watch']);
}