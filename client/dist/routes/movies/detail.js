System.register(['aurelia-framework', '../../services/solarian_service'], function (_export) {
	var inject, SolarianAPI, _classCallCheck, _createClass, Movie;

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}, function (_servicesSolarian_service) {
			SolarianAPI = _servicesSolarian_service.SolarianAPI;
		}],
		execute: function () {
			'use strict';

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

			_createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			Movie = (function () {
				function Movie(SolarianAPI) {
					_classCallCheck(this, _Movie);

					this.solarianAPI = SolarianAPI;
					this.movie = [];
				}

				var _Movie = Movie;

				_createClass(_Movie, [{
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
				}]);

				Movie = inject(SolarianAPI)(Movie) || Movie;
				return Movie;
			})();

			_export('Movie', Movie);
		}
	};
});
//# sourceMappingURL=detail.js.map