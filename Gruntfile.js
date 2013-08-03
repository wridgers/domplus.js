module.exports = function(grunt) {

  // config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - <%= grunt.template.today("yyyy-mm-dd") %> - https://github.com/wridgers/domplus.js */\n'
      },
      build: {
        src: 'src/domplus.js',
        dest: 'build/domplus.min.js'
      }
    },
    jshint: {
      files: ['src/*.js']
    },
    watch: {
      files: ['src/*.js'],
      tasks: ['jshint', 'uglify']
    }
  });

  // plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // default
  grunt.registerTask('default', ['jshint', 'uglify', 'watch']);
};
