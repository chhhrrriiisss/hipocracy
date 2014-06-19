'use strict';

module.exports = function(grunt) {

     // load tasks
    [
        'grunt-processhtml',
        'grunt-contrib-clean',
        'grunt-contrib-cssmin',
        'grunt-contrib-less',
        'grunt-contrib-watch',
        'grunt-contrib-uglify',
        'grunt-lesslint'
    ].forEach(function(task) { grunt.loadNpmTasks(task); });


    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        lesslint: {
            src: ['src/**/*.less']
        },

        clean: {
            build: ["build/", "build/assets"],
        },

        uglify: {
            my_target: {
                files: {
                    'build/assets/theme.min.js': ['src/js/theme.js']
                }
            }
        },

        watch: {
            scripts: {
                files: ['src/*.less','src/*.html','src/*.js'],
                tasks: ['default'],
                options: {
                    debounceDelay: 2000
                },
            },
        },

        less: {
            config: {
                compress: true
            },
            css: {
                src: ['src/css/frag/screen.less'],
                dest: 'src/css/style.css'
            }
        },

        cssmin: {
            css: {
                src: ['src/css/style.css'],
                dest: 'src/css/style.min.css'
            }        
        },

        processhtml: {
            dist: {
                files: {
                    'build/theme.html': ['src/theme.html']
                }
            }
        }

    });

    grunt.registerTask('parse', ['lesslint']);
    grunt.registerTask('default', ['clean:build', 'less', 'cssmin', 'uglify', 'processhtml']);
   
};


