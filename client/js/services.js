mediaApp.factory('movies', ['$resource', function($resource) {
	return $resource( '../api/movies/:id',{ id: '@id' },{});
}]);
