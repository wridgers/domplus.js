module.exports = function(grunt) {

  // config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/core.js'],
        dest: 'build/domplus-<%= pkg.version %>.js'
      }
    },
    jshint: {
      files: ['src/*.js']
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - <%= grunt.template.today("yyyy-mm-dd") %> - https://github.com/wridgers/domplus.js */\n'
      },
      build: {
        src: 'build/domplus-<%= pkg.version %>.js',
        dest: 'build/domplus-<%= pkg.version %>.min.js'
      }
    },
    watch: {
      files: ['src/*.js'],
      tasks: ['jshint', 'concat', 'uglify']
    }
  });

  // plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // default
  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'watch']);
};
