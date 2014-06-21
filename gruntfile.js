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
        'grunt-spritesmith',
        'grunt-contrib-concat',
        'grunt-exec',
        'grunt-lesslint'
    ].forEach(function(task) { grunt.loadNpmTasks(task); });


    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sprite:{
            all: {
                src: 'src/img/sprites/*.png',
                destImg: 'build/assets/sprites.png',
                destCSS: 'src/css/frag/sprites.css'
            },
            retina: {
                src: 'src/img/sprites/2x/*.png',
                destImg: 'build/assets/sprites@2x.png',
                destCSS: 'src/css/frag/sprites@2x.css'
            }
        },

        concat: {
            dist: {
                src: ['src/css/frag/sprites@2x.css', 'src/css/frag/sprites.css'],
                dest: 'src/css/frag/sprites.less'
            },
        },

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

            sprites: {
                files: ['src/img/*.*'],
                tasks: ['spritesChanged'],
                options: {
                    debounceDelay: 500,
                    atBegin: function() {

                        grunt.log.writeln('Sprites updating...');

                    },
                }
            },

            scripts: {
                files: ['src/js/*.js'],
                tasks: ['scriptsChanged'],
                options: {
                    debounceDelay: 500,
                    atBegin: function() {

                        grunt.log.writeln('Scripts updating...');

                    },
                }
            },

            html: {
                files: ['src/*.html'],
                tasks: ['htmlChanged'],
                options: {
                    debounceDelay: 500,
                    atBegin: function() {

                        grunt.log.writeln('HTML updating...');

                    },
                }
            },

            css: {
                files: ['src/**/*.less'],
                tasks: ['stylesheetChanged'],
                options: {
                    debounceDelay: 500,
                    atBegin: function() {

                        grunt.log.writeln('CSS updating...');

                    },
                }
            }

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
            options: {
                banner: '/*\
                Hipocracy - A custom tumblr theme by Chris Nicholls\
                */'
            },
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
        },

        exec: {
            copy_template: {
                cmd: 'clip < build/theme.html'
            }
        }


    });

    grunt.registerTask('parse', ['lesslint']);
    grunt.registerTask('default', ['clean:build', 'sprite', 'concat', 'less', 'cssmin', 'uglify', 'processhtml', 'exec']);

    grunt.registerTask('default', ['clean:build', 'sprite', 'concat', 'less', 'cssmin', 'uglify', 'processhtml', 'exec']);
    grunt.registerTask('stylesheetChanged', ['less', 'cssmin', 'processhtml', 'exec']);
    grunt.registerTask('scriptsChanged', ['uglify', 'processhtml', 'exec']);
    grunt.registerTask('spritesChanged', ['sprite', 'concat', 'less', 'cssmin', 'processhtml','exec']);
    grunt.registerTask('htmlChanged', ['processhtml','exec']);
   
};


