module.exports = function (grunt) {
    /*Configure main project settings*/
    grunt.initConfig({
        /*Basic settings and info about our plugins*/
        pkg: grunt.file.readJSON('package.json'),

        /*Plugin name (name without the grunt-contrib-)*/
        cssmin: {
            combine: {
               files:{
                   'public/css/main.min.css': ['public/css/*.css']
               }
            }
        },
        uglify:{
            dist: {
                files: {
                    'public/js/build/main.min.js': ['public/js/build/main.js']
                }
            }
        },
        concat: {
            options: {
                separator: "\n\n"
            },
            dist:{
                src: ['public/app.js', 'public/js/*.js'],
                dest: 'public/js/build/main.js'
            },
            deps:{
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.js'

                ],
                dest: 'public/js/build/dependencies.js'
            },
            css: {
                src:['bower_components/bootstrap/dist/css/bootstrap.js', 'public/css/*.css'],
                dest: 'src/resources/css/mainStyle.css'
            }
        }
    });

    /*Load the plugin*/
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    /*Do the task*/
    grunt.registerTask('default', ['concat', 'uglify']);
};
