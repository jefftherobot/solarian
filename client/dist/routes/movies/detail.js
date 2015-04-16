System.register(['../../services/solarian_service'], function (_export) {
	var SolarianAPI, _classCallCheck, _createClass, Movie;

	return {
		setters: [function (_servicesSolarian_service) {
			SolarianAPI = _servicesSolarian_service.SolarianAPI;
		}],
		execute: function () {
			'use strict';

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

			_createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			Movie = (function () {
				function Movie(SolarianAPI) {
					_classCallCheck(this, Movie);

					this.solarianAPI = SolarianAPI;
					this.movie = [];
				}

				_createClass(Movie, [{
					key: 'activate',
					value: function activate(params) {
						var _this = this;

						var id = params.id;

						if (id !== undefined) {
							this.solarianAPI.getMovie(id).then(function (r) {
								_this.movie = r.content;
							});
						}
					}
				}], [{
					key: 'inject',
					value: function inject() {
						return [SolarianAPI];
					}
				}]);

				return Movie;
			})();

			_export('Movie', Movie);
		}
	};
});
//# sourceMappingURL=detail.js.map