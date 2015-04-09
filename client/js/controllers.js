mediaApp.controller('MoviesController', ['$scope', 'movies', function($scope, movies, posterSize) { 
	$scope.data = {};

	movies.query(function(response) {
	  $scope.data.movies = response;
	});

}]);

mediaApp.controller('MovieController', ['$scope', '$routeParams', 'movies', function($scope, $routeParams, movies, posterSize) { 

	movies.get({id: $routeParams.id}, function(response) {
		$scope.movie = response;
  });

}]);