System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "js/*.js",
    "github:*": "js/vendor/github/*.js",
    "npm:*": "js/vendor/npm/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.1.9",
    "babel-runtime": "npm:babel-runtime@5.1.9",
    "core-js": "npm:core-js@0.8.3",
    "jquery": "github:components/jquery@2.1.3",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:core-js@0.8.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

