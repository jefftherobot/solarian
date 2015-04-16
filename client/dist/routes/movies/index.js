System.register([], function (_export) {
	var _classCallCheck, _createClass, Movies;

	return {
		setters: [],
		execute: function () {
			"use strict";

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

			_createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			Movies = (function () {
				function Movies() {
					_classCallCheck(this, Movies);
				}

				_createClass(Movies, [{
					key: "activate",
					value: function activate(params, queryString, routeConfig) {
						console.log(params);
					}
				}, {
					key: "canDeactivate",
					value: function canDeactivate() {}
				}]);

				return Movies;
			})();

			_export("Movies", Movies);
		}
	};
});
//# sourceMappingURL=index.js.map