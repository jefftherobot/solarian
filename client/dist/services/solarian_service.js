System.register(['aurelia-http-client'], function (_export) {
	var HttpClient, _classCallCheck, _createClass, SolarianAPI;

	return {
		setters: [function (_aureliaHttpClient) {
			HttpClient = _aureliaHttpClient.HttpClient;
		}],
		execute: function () {
			'use strict';

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

			_createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			SolarianAPI = (function () {
				function SolarianAPI(http) {
					_classCallCheck(this, SolarianAPI);

					this.http = http;
					this.baseUrl = 'http://jefftherobot.com/medialibrary/api/';
				}

				_createClass(SolarianAPI, [{
					key: 'getAllMovies',
					value: function getAllMovies() {
						return this.http.get(this.baseUrl + 'movies');
					}
				}, {
					key: 'getMovie',
					value: function getMovie(id) {
						return this.http.get(this.baseUrl + 'movies/' + id);
					}
				}], [{
					key: 'inject',
					value: function inject() {
						return [HttpClient];
					}
				}]);

				return SolarianAPI;
			})();

			_export('SolarianAPI', SolarianAPI);
		}
	};
});
//# sourceMappingURL=solarian_service.js.map