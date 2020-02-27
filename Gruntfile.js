module.exports = function (grunt) {
	 grunt.initConfig ({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'dist/css/style.css' : 'css/style.scss'
				}
			}
		},
		cssmin: {
			minify: {
				src: 'dist/css/style.css',
				dest: 'dist/css/style.min.css'
			}
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'dist/css/style.min.css',
						'*.html'
					]
				},
				options: {
					watchTask: true,
					server: ''
				}
			}
		},
		watch: {
			css: {
				files: 'css/style.scss',
				tasks: ['sass', 'cssmin']
			}
		},
		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: 'images',
					src: '*.{gif,GIF,jpg,JPG,png,PNG}',
					dest: 'images'
				}]
			}
		}
	})
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default', ['browserSync', 'imagemin', 'watch']);
};