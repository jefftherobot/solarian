mediaApp.filter('size', function () {
	return function(poster, width) {
		return poster.replace("original",width);
	}
});
