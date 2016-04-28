module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

     banner: '/*!\n' +
            ' * Slabs v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2016-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under the <%= pkg.license %> license\n' +
            ' */\n',

    clean: {
      dist: 'dist',
      docs: 'docs/dist'
    },

    tag:{
      banner: '/*!\n' +
              ' * <%= pkg.name %>\n' +
              ' * <%= pkg.title %>\n' +
              ' * <%= pkg.url %>\n' +
              ' * @author <%= pkg.author %>\n' +
              ' * @version <%= pkg.version %>\n' +
              ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
              ' */\n'
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/css/<%= pkg.name%>.css' : 'scss/slabs.scss'
        }
      },
      docs: {
        options: {
          style: 'expanded',
        },
        files: {
          'docs/assets/css/docs.css' : 'docs_scss/docs.scss'
        }
      }
    },

    cssmin: {
      minify: {
        expand: true,
        cwd: 'dist/css',
        src: ["slabs.css", "slabs.min.css"],
        dest: 'dist/css',
        ext: '.min.css'
      }
    },

    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: false
      },
      slabs: {
        src: [
          'js/<%= pkg.name%>.js',
          'js/<%= pkg.name%>.headers.js',
          'js/ekko-lightbox.js',
          'js/slick.js'
        ],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },

    coffee: {
      compile: {
        options: {
          bare: true
        },
        files: {
          'js/<%= pkg.name%>.js': 'coffee/<%= pkg.name%>.coffee',
          'js/<%= pkg.name%>.headers.js': 'coffee/headers.coffee'
        }
      },
    },

    uglify: {
      options: {
        compress: {
            warnings: false
          },
        mangle: true,
        report: 'min',
        banner: '<%= banner %>'
      },
      slabs: {
        src: '<%= concat.slabs.dest %>',
        dest: 'dist/js/<%= pkg.name %>.min.js'
      }
     },

    copy: {
      docs: {
        expand: true,
        cwd: 'dist/',
        src: [
          '**/*'
        ],
        dest: 'docs/dist/'
      },
      imgs:{
        expand: true,
        cwd: 'img/',
        src: [
          '**/*'
        ],
        dest: 'dist/img/'
      }
    },

    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml',
        incremental: false,
        serve: true
      },
      docs: {}
    },

    watch: {
      sass: {
        files: ['scss/**/*.scss', 'docs_scss/**/*.scss'],
        tasks: ['dist'],
        options: {
          livereload: 1337
        }
      },
      coffee: {
        files: ['coffee/*.coffee'],
        tasks: ['dist-js', 'copy:docs'],
        options: {
          livereload: 1337
        }
      }
    },
    compress: {
      main: {
        options: {
          archive: '<%= pkg.name%>-<%= pkg.version %>-dist.zip',
          mode: 'zip',
          level: 9,
          pretty: true
        },
        files: [
          {
            expand: true,
            cwd: 'dist/',
            src: ['**'],
            dest: '<%= pkg.name%>-<%= pkg.version %>-dist'
          }
        ]
      }
    },
    'gh-pages': {
      options: {
        base: '_gh_pages'
      },
      src: ['**/*']
    }

  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // CSS distribution task
  grunt.registerTask('dist-css', ['sass:dist', 'cssmin']);

  // JS distribution task
  grunt.registerTask('dist-js', ['coffee', 'concat', 'uglify']);

  // Docs distribution task
  grunt.registerTask('dist-docs', ['sass:docs', 'copy:imgs', 'copy:docs']);

  // Full distribution task.
  grunt.registerTask('dist', ['clean', 'dist-css', 'dist-js', 'dist-docs']);

  // Default task
  grunt.registerTask('default', ['dist']);
};
