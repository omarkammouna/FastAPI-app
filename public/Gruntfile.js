module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            options: {
                includePaths: ["node_modules/bootstrap-sass/assets/stylesheets"],
            },
            dist: {
                options: {
                outputStyle: "compressed",
                },
                files: [
                    {
                        "dist/assets/css/e-learn.style.min.css":             [ "scss/main.scss"],
                        "dist/assets/css/prism.min.css":                     [ "node_modules/prismjs/themes/prism.css"],
                        "dist/assets/css/fullcalendar.min.css":              [ "node_modules/fullcalendar/main.min.css"],
                        "dist/assets/css/carousel.min.css":                  [ "node_modules/owl.carousel2/dist/assets/owl.carousel.min.css"],
                    },
                ],
            },
        },
        uglify: {
            my_target: {
                files: {
                    "dist/assets/bundles/libscripts.bundle.js":         [ "node_modules/jquery/dist/jquery.js", "node_modules/bootstrap/dist/js/bootstrap.bundle.js"],
                    "dist/assets/bundles/apexcharts.bundle.js":         [ "node_modules/apexcharts/dist/apexcharts.min.js"],
                    "dist/assets/bundles/sparkline.bundle.js":          [ "node_modules/jquery-sparkline/jquery.sparkline.min.js"],
                    "dist/assets/bundles/prism.bundle.js":              [ "node_modules/prismjs/prism.js"],
                    "dist/assets/bundles/fullcalendar.bundle.js":       [ "node_modules/fullcalendar/main.min.js"],
                    "dist/assets/bundles/carousel.bundle.js":           [ "node_modules/owl.carousel2/dist/owl.carousel.min.js"],
                },
            },
        },
    });
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask("buildcss", ["sass"]);	
    grunt.registerTask("buildjs", ["uglify"]);
};

