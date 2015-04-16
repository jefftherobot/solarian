System.register(['aurelia-router', '../../services/solarian_service'], function (_export) {
	var Router, SolarianAPI, _classCallCheck, _createClass, Movies;

	return {
		setters: [function (_aureliaRouter) {
			Router = _aureliaRouter.Router;
		}, function (_servicesSolarian_service) {
			SolarianAPI = _servicesSolarian_service.SolarianAPI;
		}],
		execute: function () {
			'use strict';

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

			_createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			Movies = (function () {
				function Movies(router, SolarianAPI) {
					_classCallCheck(this, Movies);

					this.solarianAPI = SolarianAPI;
					this.movies = [];
					this.router = router;

					this.router.configure(function (config) {
						config.map([{ route: ['', ':id'], moduleId: './detail' }]);
					});
				}

				_createClass(Movies, [{
					key: 'activate',
					value: function activate() {
						var _this = this;

						this.solarianAPI.getAllMovies().then(function (r) {
							_this.movies = r.content;
						});
					}
				}], [{
					key: 'inject',
					value: function inject() {
						return [Router, SolarianAPI];
					}
				}]);

				return Movies;
			})();

			_export('Movies', Movies);
		}
	};
});
//# sourceMappingURL=index.js.map