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
                    'dist/js/_temp/controllers.min.js': 'src/js/modules/**/*.js',
                    'dist/js/_temp/directives.min.js': 'src/js/directives/**/*.js',
                    'dist/js/_temp/libs.min.js': ['src/js/library/angular.js', 'src/js/library/angular-ui-router.js', 'src/js/library/angular-scroll.js', 'src/js/library/angular-touch.js', 'src/js/library/waves.js', 'src/js/library/moment.js', 'src/js/library/moment-duration-format.js', 'src/js/library/nprogress.js', 'src/js/library/Autolinker.js'],
                    'dist/js/_temp/app.config.min.js': ['src/js/prodKey.js','src/js/app.config.js', 'src/js/app.config.prod.js', 'src/js/gapi.js'],
                    'dist/js/iframeAPI.js' : 'src/js/library/iframeAPI.js',
                    'dist/js/www-widgetapi.js' : 'src/js/library/www-widgetapi.js',
                    'dist/js/youtube.min.js': ['dist/js/_temp/libs.min.js', 'dist/js/_temp/app.config.min.js', 'dist/js/_temp/directives.min.js', 'dist/js/_temp/services.min.js', 'dist/js/_temp/controllers.min.js']
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
                src: ['dist/js/youtube.min.js', 'src/**/*.html'],
                css: ['src/css/materialize.css', 'src/css/icons.css', 'src/css/nprogress.css', 'src/css/main.css'],
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
