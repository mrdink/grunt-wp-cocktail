module.exports = {
  options: {
    args: ["--verbose"],
    exclude: [
      ".git*",
      "*.scss",
      "sass",
      "node_modules",
      "bower_components",
      ".bower*",
      ".editorconfig",
      "dist",
      "grunt",
      ".sass-cache",
      "Gruntfile.js",
      "_*.js",
      "package.json",
      "bower.json",
      ".csscomb.json",
      ".DS_Store"
    ],
    recursive: true
  },
  dist: {
    options: {
      src: "./",
      dest: "./dist"
    }
  },
  prod: {
    options: {
      src: "./dist/",
      dest: "public_html/wordpress/wp-content/themes/<%= grunt.configs.package.name %>",
      host: "YOURHOST",
      delete: true
    }
  }
}