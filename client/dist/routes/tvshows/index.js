System.register([], function (_export) {
	var _classCallCheck, _createClass, Tvshows;

	return {
		setters: [],
		execute: function () {
			"use strict";

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

			_createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			Tvshows = (function () {
				function Tvshows() {
					_classCallCheck(this, Tvshows);
				}

				_createClass(Tvshows, [{
					key: "activate",
					value: function activate(params, queryString, routeConfig) {
						console.log(params);
					}
				}, {
					key: "canDeactivate",
					value: function canDeactivate() {}
				}]);

				return Tvshows;
			})();

			_export("Tvshows", Tvshows);
		}
	};
});
//# sourceMappingURL=index.js.map