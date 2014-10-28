var app = angular.module('starWars');

app.controller('editController', function($scope, $location, $routeParams, starService){
	$scope.character = $scope.characters[$routeParams.id];
	
	$scope.addCharacter = function(){
		$location.path('/');
	}
});