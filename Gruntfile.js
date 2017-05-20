
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
          files: 'test/sass/**/*.sass',
          tasks: ['sass']
    },
  	sass: {
            dev: {
                files: {
                    'css/style.css': 'sass/style.sass'
                }
            }
        },
    
    browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        'test/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './test'
                }
            }
        }
  });
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  // Default task(s).
  grunt.registerTask('default', ['browserSync', 'watch']);
};