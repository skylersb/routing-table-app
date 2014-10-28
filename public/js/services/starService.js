var app = angular.module('starWars');

app.service('starService', function(){
	
	var characters = [
		{name: 'Luke Skywalker', description:'Jedi Knight'},
		// {name: 'Yoda', description:'Grand Master'},
		// {name: 'Han Solo', description:'Smuggler'},
		];

	this.getCharacters = function(){
		return characters;
	};

	this.addCharacter = function(character){
		characters.push(character);
	};

	this.removeCharacter = function(character){
		for(var i = 0; i < characters.length; i++){
			if(chracters[i].name === character){
				chracters.splice(i, 1);
			}
		}
	}
});