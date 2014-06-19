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
        'grunt-exec',
        'grunt-lesslint'
    ].forEach(function(task) { grunt.loadNpmTasks(task); });


    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sprite:{
            all: {
                src: 'src/img/*.png',
                destImg: 'build/assets/sprites.png',
                destCSS: 'src/css/frag/sprites.css'
            },
            retina: {
                src: 'src/img/2x/*.png',
                destImg: 'build/assets/sprites@2x.png',
                destCSS: 'src/css/frag/sprites@2x.css'
            }
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
            scripts: {
                files: ['src/**/*.less','src/*.html','src/js/*.js'],
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
    grunt.registerTask('default', ['clean:build', 'sprite', 'less', 'cssmin', 'uglify', 'processhtml', 'exec']);
   
};


