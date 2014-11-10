module.exports = function (grunt) {

    var appFiles = {"public/js/app.js": ["lib/main.js"]};
    var vendorFiles = {"public/js/vendor.js": ["lib/vendor/main.js"]};
    var uglifyFiles = {"public/js/app.js": ["public/js/app.js"]};

    grunt.initConfig({
        jshint: { // Build related
            all: [
                "Gruntfile.js",
                "test/unit/*.js"
            ],
            options: {
                jshintrc: ".jshintrc"
            }
        },
        browserify: { // Build related
            vendor: {
                files: vendorFiles
            },
            app: {
                files: appFiles,
                options: {
                    // Handle underscore templates
                    transform: ['node-underscorify'],
                    debug: true
                },
                browserifyOptions: {
                    debug: true
                }
            }
        },
        uglify: { // Build related
            release: {
                files: uglifyFiles
            }
        },
        clean: { // Build related
            all: ["coverage", "public"]
        },
        sync: { // Build related
            main: {
                files: [{
                    cwd: "lib",
                    src: ["main.html"],
                    dest: "public"
                }]
            }
        },
        connect: { // Test related: Dev server
            server: {
                options: {
                    port: 8000,
                    base: "./public",
                    keepalive: true,
                    debug: true
                }
            }
        },
        karma: { // Test related: Test runner
            unit: {
                configFile: "karma.conf.js"
            }
        }
    });

    require("load-grunt-tasks")(grunt);

    grunt.registerTask("lint", ["jshint"]);
    grunt.registerTask("build", ["clean", "lint", "browserify:vendor", "browserify:app", "sync:main"]);
    grunt.registerTask("build:release", ["build", "uglify:release"]);
    grunt.registerTask("test", ["build", "karma:unit"]);
    grunt.registerTask("serve", ["connect:server"]);

    grunt.registerTask("default", ["build"]);
};
