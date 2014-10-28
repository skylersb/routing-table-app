var app = angular.module('starWars', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', {
		templateUrl: '/views/list.html',
		controller: 'mainController'
	})
	.when('/new-character', {
		templateUrl: '/views/newCharacter.html',
		controller: 'mainController'
	})
	.when('/edit/:id', {
		templateUrl: '/views/newCharacter.html',
		controller: 'editController'
	})
	.otherwise({

		redirectTo: '/'
	})

})

