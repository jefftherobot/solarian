System.register([], function (_export) {
	var _classCallCheck, _createClass, PosterSizeValueConverter;

	return {
		setters: [],
		execute: function () {
			"use strict";

			_classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

			_createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

			//"w92", "w154", "w185", "w342", "w500", "w780", "original"

			PosterSizeValueConverter = (function () {
				function PosterSizeValueConverter() {
					_classCallCheck(this, PosterSizeValueConverter);
				}

				_createClass(PosterSizeValueConverter, [{
					key: "toView",
					value: function toView(val, size) {
						if (val) {
							return val.replace(/original/g, size);
							//return val.filter(item => item['poster'] = item['poster'].replace(/original/g,size));
						}
					}
				}]);

				return PosterSizeValueConverter;
			})();

			_export("PosterSizeValueConverter", PosterSizeValueConverter);
		}
	};
});
//# sourceMappingURL=poster-size.js.map