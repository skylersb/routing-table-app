Routing Table App

**We are going to building a simple app to demonstrate routing in angularjs. We will build a table where you can add a name and description of your choosing. There will be different views created to display the information in the table, with list, edit, and add views.

***************************************************************************************************************
Step 1: Setup files
-App.js
-index.html
-Controller.js

***************************************************************************************************************
Step2: Connect view and controller via $scope.
-Add ng-app to index.html
-Add a controller (for now) to index.html so we can test if they are connected.
-Create a test variable on scope and test.
-Create a table. Example code:

<table class="table table-striped">
		<thead>
			<tr>
				<td></td>
				<td></td>
				<td></td>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td></td>
				<td></td>
				<td></td>
			</tr>
		</tbody>
</table>

***************************************************************************************************************
Step3: Display names and descriptions of table data you created.
-Create a list.html view and cut and paste table into there.
-Add ng-repeat to table to display data.
-Make sure you add the properties when binding as you use ng-repeat to display individual names and descriptions.
Ex: {{person.name}}, {{person.description}}

***************************************************************************************************************
Step4: Setup Routing
-In app.js, add the following code under the var app = ('yourAppName', []):

		app.config(function($routeProvider){
			
			$route Provider
		})

-Add a route to the list.html including both a templateUrl and a controller it will be using. Ex:

	.when('/', {
	templateUrl: 'views/list.html',
	controller: 'mainController'
	})
	
-Add the appropriate routes, controllers and views necessary in order to display the additional information we will be making available.

***************************************************************************************************************
Step 5: Create Service
-Create your array of objects in here.
Ex:
var characters = [
	{name: 'Luke Skylerwalker', description: 'Jedi Knight'},
	]
-Remember to add service file to your index.html

***************************************************************************************************************
Step 6: Add methods to service
-getCharacters
-save

***************************************************************************************************************
Step 7: Add functions to mainController
-inject your service
-inject $location so that you can redirect to appropriate view inside function when function has completed.
ex: $scope.save = function(){
	
	$location.path('/')
}

***************************************************************************************************************
BONUS: Include html5 mode to cleanup URL and remove #.
-inject $locationProvider
ex:
$locationProvider.html5Mode(true);

