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
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-sync");

    grunt.registerTask("lint", ["jshint"]);
    grunt.registerTask("test", ["lint"]);
    grunt.registerTask("build", ["test", "browserify:vendor", "browserify:app", "sync:main"]);
    grunt.registerTask("build:release", ["build", "uglify:release"]);
    grunt.registerTask("serve", ["connect:server"]);

    grunt.registerTask("default", ["build"]);
};
