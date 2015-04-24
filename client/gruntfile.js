module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
			scripts: {
				files: ['src/**/*.js'],
				tasks: ['babel']
			},
			html: {
				files: ['src/**/*.html'],
				tasks: ['copy']
			},
			css: {
				files: ['src/**/*.scss'],
				tasks: ['sass']
			}
		},
		babel: {
			options: {
				sourceMap: true,
				modules: 'system',
				stage:2,
				optional: [
					"es7.decorators",
					"es7.classProperties"
				]
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
		sass: {
			dist: {
				options: {
					style: 'compressed',
					require: ['sass-globbing', 'sass-css-importer']
				},
				files: {
					'dist/app.css': 'src/app.scss'
				}
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
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default', ['browserSync', 'watch']);
}