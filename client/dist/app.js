System.register(["aurelia-router"], function (_export) {
	var Router, _classCallCheck, _createClass, App;

	return {
		setters: [function (_aureliaRouter) {
			Router = _aureliaRouter.Router;
		}],
		execute: function () {
			"use strict";

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

			_createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			App = (function () {
				function App(router) {
					_classCallCheck(this, App);

					this.router = router;
					this.router.configure(function (config) {
						config.title = "Solarian";
						config.map([{ route: "movies", moduleId: "./routes/movies/index", nav: true }, { route: "movies/:id/detail", moduleId: "./routes/movies/detail" }, { route: "", redirect: "movies" }]);
					});
				}

				_createClass(App, null, [{
					key: "inject",
					value: function inject() {
						return [Router];
					}
				}]);

				return App;
			})();

			_export("App", App);
		}
	};
});
//# sourceMappingURL=app.js.map