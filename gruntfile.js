module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'public/js/script.js',
        dest: 'public/js/script.min.js'
      }
    },
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'public/styles.css': 'public/styles.scss'
            }
        }
    },
    watch: {
      scripts: {
        files: ['public/js/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
        },
      },
      sass: {
        files: ['public/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },

    },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass']);
  grunt.registerTask('start', ['watch']);
};