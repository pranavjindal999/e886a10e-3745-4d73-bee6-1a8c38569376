module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n',
                ASCIIOnly : true
            },
            build: {
                files: {
                    'dist/js/_temp/services.min.js': 'src/js/services/**/*.js',
                    'dist/js/_temp/controllers.min.js': ['src/js/modules/**/*.js','src/js/indexController.js'],
                    'dist/js/_temp/directives.min.js': 'src/js/directives/**/*.js',
                    'dist/js/_temp/libs.min.js': ['src/js/library/angular.js', 'src/js/library/angular-ui-router.js', 'src/js/library/angular-scroll.js', 'src/js/library/waves.js'],
                    'dist/js/_temp/app.config.min.js': ['src/js/app.config.js', 'src/js/app.config.prod.js'],
                    'dist/js/app.min.js': ['dist/js/_temp/libs.min.js', 'dist/js/_temp/app.config.min.js', 'dist/js/_temp/directives.min.js', 'dist/js/_temp/services.min.js', 'dist/js/_temp/controllers.min.js']
                }
            }
        },
        cssmin: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'dist/css/style.purified.min.css': ['dist/css/style.purified.css']
                }
            }
        },
        purifycss: {
            options: {},
            target: {
                src: ['dist/js/app.min.js', 'src/**/*.html','index.html'],
                css: ['src/css/materialize.css', 'src/css/main.css'],
                dest: 'dist/css/style.purified.css'
            },
        },
        clean: ['dist/js/_temp/','dist/css/style.purified.css']
    });
    grunt.registerTask('default', ['uglify', 'purifycss', 'cssmin', 'clean']);
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-purifycss');
    grunt.loadNpmTasks('grunt-contrib-clean');
};
