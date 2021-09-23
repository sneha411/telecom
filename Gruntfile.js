module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    precision: 2
                },
                files: {
                    'assets/css/custom.css': 'assets/sass/custom.scss'
                }
            }
        },
        jshint: {
            files: {
                src: ['assets/js/**/*.js']
            }
        },
        usemin: {
            html: ['build/*.html']
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'assets/css/*.css',
                        './templates/**/*.shtml',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    proxy: "http://localhost/telecom"
                }
            }
        },
        tinypng: {
            options: {
                apiKey: "7_yk9teC5pMwn3LgDIHp7gwG0RGeb0Z5",
                summarize: true
            },
            compress: {
                expand: true,
                src: 'assets/**/*.png',
                dest: './images/',
                ext: '.png'
            },
            compress2: {
                expand: true,
                src: 'assets/**/*.jpg',
                dest: './images/',
                ext: '.jpg'
            },
        },
        uglify: {
            options: {
                mangle: false,
                beautify: false,
                compress: false
            },
            my_target: {
                files: {
                    'assets/js/vendor.js': [
                        'assets/js/libraries/jquery.js',
                        'assets/js/libraries/modernizr.js',
                        'assets/js/libraries/jquery.validate.min.js',
                        'assets/js/libraries/bootstrap.min.js',
                        'assets/js/libraries/swiper.min.js',
                        'assets/js/libraries/wow.js',
                        'assets/js/libraries/particles.js',

                    ],
                    'build/assets/js/custom.js': 'build/assets/js/custom.js'
                }
            }
        },
        usemin: {
            html: ['build/*.html']
        },
        copy: {
            html: {
                expand: true,
                cwd: '',
                src: ['*.html'],
                dest: 'build/',
            },
            html1: {
                expand: true,
                cwd: '',
                src: ['view/*.html'],
                dest: 'build/',
            },
            php: {
                expand: true,
                cwd: '',
                src: ['*.php'],
                dest: 'build/',
            },
            images: {
                expand: true,
                cwd: 'assets/images/',
                src: '**',
                dest: 'build/assets/images/'
            },
            fonts: {
                expand: true,
                cwd: 'assets/fonts/',
                src: '**',
                dest: 'build/assets/fonts/'

            },
            css: {
                expand: true,
                cwd: 'assets/css',
                src: '**/*.css',
                dest: 'build/assets/css/'

            },
            js: {
                expand: true,
                cwd: 'assets/js',
                src: '**/*.js',
                dest: 'build/assets/js/'
            },
            videos: {
                expand: true,
                cwd: 'assets/video',
                src: '**/*.mp4',
                dest: 'build/assets/video/'
            }
        },
        clean: {
            build: {
                src: ['build/*.shtml']
            }
        },
        watch: {
            grunt: { files: ['Gruntfile.js'] },
            sass: {
                files: ['assets/sass/**/*.scss'],
                tasks: ['sass']
            },
            js: {
                files: ['assets/js/**/*.js'],
                tasks: ['uglify']
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-tinypng');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('build', ['copy', 'usemin', 'uglify']);
}