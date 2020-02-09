'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '!js/*.js',
        '|js/plugins/*.js',
        '!js/scripts.min.js',
        '!js/materialize/bin/materialize.js',
        '!js/app/voluntarios/*.js'
      ]
    },
    uglify: {
      dist: {
        files: {
          'js/scripts.min.js': [
            'js/plugins/*.js',
            'js/materialize/bin/materialize.js',
            'js/_*.js'
          ]
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'images/',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: 'images/'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: '{,*/}*.svg',
          dest: 'images/'
        }]
      }
    },
    watch: {
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint','uglify']
      }
    },
    clean: {
      dist: [
        'js/scripts.min.js'
      ]
    },
    modernizr: {
      "crawl": false,
      "all": [
        '!app/voluntarios/*.js'
      ],
      "customTests": [],
      "dest": "js/modernizr.js",
      "tests": [
        "applicationcache",
        "canvas",
        "contextmenu",
        "cookies",
        "cors",
        "customelements",
        "emoji",
        "cssanimations",
        "csstransitions"
      ],
      "options": [
        "domPrefixes",
        "prefixes",
        "hasEvent",
        "prefixed",
        "testAllProps",
        "testProp",
        "testStyles",
        "html5shiv",
        "setClasses"
      ],
      "uglify": true
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks("grunt-modernizr");

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'modernizr',
    'uglify',
    'imagemin',
    'svgmin'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};