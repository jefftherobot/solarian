var mediaApp = angular.module('mediaApp', ['ngRoute','ngResource']);

/******************
  ROUTES
******************/

mediaApp.config(function ($routeProvider, $locationProvider) {
	$routeProvider.
		when('/movies', { templateUrl: 'templates/movies.html', controller: 'MoviesController'}).
		when('/movies/:id', { templateUrl: 'templates/movie.html', controller: 'MovieController'}).
		otherwise({ redirectTo: '/movies'});
});