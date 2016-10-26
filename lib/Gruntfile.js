module.exports = function(grunt) {

  grunt.initConfig({
  jshint: {
  files: ['../scripts/**/*.js'],
  options: {esnext: true}
  },
  watch: {
  javascripts: {
  files: ['../scripts/**/*.js'],
  tasks: ['jshint']
  }
  }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'watch']);
};

