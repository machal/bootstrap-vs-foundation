module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

	copy: {
	  main: {
	    files: [

	      // includes files within path and its sub-directories
	      {expand: true, cwd: 'bower_components/bootstrap/dist/', src: ['**'], dest: 'bootstrap/assets/'},

	      // includes files within path and its sub-directories
	      {expand: true, cwd: 'bower_components/foundation/css/', src: ['**'], dest: 'foundation/assets/css/'},

	      // includes files within path and its sub-directories
	      {expand: true, cwd: 'bower_components/foundation/js/', src: ['**'], dest: 'foundation/assets/js/'},	      

	    ]
	  }
	}

  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task.
  grunt.registerTask('default', ['copy']);

};