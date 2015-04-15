System.register(['models/test-module', 'jquery'], function (_export) {
  var double, $;
  return {
    setters: [function (_modelsTestModule) {
      double = _modelsTestModule.double;
    }, function (_jquery) {
      $ = _jquery['default'];
    }],
    execute: function () {
      'use strict';

      console.log($.fn.jquery);
      console.log(double(30));
    }
  };
});
//# sourceMappingURL=main.js.map