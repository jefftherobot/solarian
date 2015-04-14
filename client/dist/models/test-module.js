System.register([], function (_export) {
  var double;
  return {
    setters: [],
    execute: function () {
      "use strict";

      double = function double(x) {
        return x + x;
      };

      _export("double", double);
    }
  };
});
//# sourceMappingURL=test-module.js.map