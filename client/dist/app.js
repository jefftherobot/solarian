System.register(["aurelia-framework", "aurelia-router"], function (_export) {
	var inject, Router, _classCallCheck, App;

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}, function (_aureliaRouter) {
			Router = _aureliaRouter.Router;
		}],
		execute: function () {
			"use strict";

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

			App = (function () {
				function App(router) {
					_classCallCheck(this, _App);

					this.router = router;
					this.router.configure(function (config) {
						config.title = "Solarian";
						config.map([{ route: ["", "movies"], moduleId: "./routes/movies/index", nav: true, title: "Movies" }, { route: "movies/:id", moduleId: "./routes/movies/detail" }, { route: "tvshows", moduleId: "./routes/tvshows/index", nav: true, title: "TV Shows" }, { route: "tvshows/:id", moduleId: "./routes/tvshows/detail" }]);
					});
				}

				var _App = App;
				App = inject(Router)(App) || App;
				return App;
			})();

			_export("App", App);
		}
	};
});
//# sourceMappingURL=app.js.map