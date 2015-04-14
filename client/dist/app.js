System.register(['models/test-module'], function (_export) {
  var double;
  return {
    setters: [function (_modelsTestModule) {
      double = _modelsTestModule.double;
    }],
    execute: function () {
      'use strict';

      console.log(double(3));
    }
  };
});
//# sourceMappingURL=app.js.map