var app = angular.module('starWars');

app.controller('mainController', function($scope, $location, starService){
	
	

// $scope.person = {name: '', description: ''};

	$scope.addCharacter = function(){
		var person = {};
		person.name = $scope.character.name;
		person.description = $scope.character.description;
		starService.addCharacter(person);
		// $scope.characters.push($scope.person)
		$location.path('/');
	}

	$scope.getCharacters = function(){
		$scope.characters = starService.getCharacters();
	}
	$scope.getCharacters();
});