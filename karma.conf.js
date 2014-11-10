module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["mocha", "chai"],
    files: [
      "public/js/vendor.js",
      "public/js/app.js",
      "test/*.spec.js"
    ],
    reporters: ["dots", "coverage"],
    port: 9876,
    colors: true,
    singleRun: true,
    browsers: ["PhantomJS"]
  });
};
