
// create the module and include ngRoute
var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

//configure our routes
portfolioApp.config(function($routeProvider){
	$routeProvider


	.when('/', {
		templateUrl : 'pages/about-me.html',
		controller : 'aboutController'
	})

	.when('/freelance', {
		templateUrl : 'pages/freelance.html',
		controller : 'freelanceController'
	})

	.when('/demos', {
		templateUrl : 'pages/demos.html',
		controller : 'playgroundController'
	})

	.when('/social', {
		templateUrl : 'pages/social.html',
		controller : 'socialController'
	});


});



// create the controller and inject Angular's $scope
portfolioApp.controller('aboutController', function($scope) {
	// create a message to display in our view
        //$scope.message = 'About Me';
});

// create the controller and inject Angular's $scope
portfolioApp.controller('freelanceController', function($scope) {
	// create a message to display in our view
        $scope.message = 'Freelance Services';
});

// create the controller and inject Angular's $scope
portfolioApp.controller('playgroundController', function($scope) {
	// create a message to display in our view
        $scope.message = 'Welcome to the playground';
});

// create the controller and inject Angular's $scope
portfolioApp.controller('socialController', function($scope) {
	// create a message to display in our view
        $scope.message = 'Let\'s get Social!!!';
});












// Todo list demo

function TodoCtrl($scope) {
  $scope.todos = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false}],
    

  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };

  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  $scope.delete = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
}




