const sass = require('node-sass');

module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'public/main.css': 'assets/scss/style.scss'
                }
            }
        },
        cssmin: {
            main: {
                files: {
                    'public/main.min.css': ['public/main.css']
                }
            }
        },
        watch: {
            styles: {
                files: 'assets/scss/*.scss',
                tasks: ['sass', 'cssmin'],
                options: {
                    interrupt: true,
                },
            },
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                            'assets/scss/*.scss'
                        ]
                },
                options: {
                    watchTask: true,
                    proxy: "localhost:80/vorlage-ue2/public"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['sass', 'cssmin']);
    grunt.registerTask('serve', ['default','browserSync','watch']);

};