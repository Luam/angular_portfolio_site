
// create the module and include ngRoute
var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

//configure our routes
portfolioApp.config(function($routeProvider){
	$routeProvider


	.when('/', {
		templateUrl : 'pages/about-me.html',
		controller : 'aboutController'
	})

	.when('/portfolio', {
		templateUrl : 'pages/portfolio.html',
		controller : 'portfolioController'
	})

	.when('/demos', {
		templateUrl : 'pages/demos.html',
		controller : 'demoController'
	})

	.when('/contact', {
		templateUrl : 'pages/contact.html',
		controller : 'contactController'
	});


});



// create the controller and inject Angular's $scope
portfolioApp.controller('aboutController', function($scope) {
	// create a message to display in our view
        //$scope.message = 'About Me';
});

// create the controller and inject Angular's $scope
portfolioApp.controller('portfolioController', function($scope) {
	// create a message to display in our view
        // $scope.message = 'Freelance Services';
});

// create the controller and inject Angular's $scope
portfolioApp.controller('demoController', function($scope) {
	// create a message to display in our view
        // $scope.message = 'Welcome to the playground';
});

// create the controller and inject Angular's $scope
portfolioApp.controller('contactController', function($scope) {
	// create a message to display in our view
        // $scope.message = 'Let\'s get Social!!!';
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



    // define angular module/app
    var formApp = angular.module('formApp', []);
    // create angular controller and pass in $scope and $http
    function formController($scope, $http) {
      // create a blank object to hold our form information
      // $scope will allow this to pass between controller and view
      $scope.formData = {};
      // process the form
      $scope.processForm = function() {
        $http({
              method  : 'POST',
              url     : 'process.php',
              data    : $.param($scope.formData),  // pass in data as strings
              headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
          })
              .success(function(data) {
                  console.log(data);
                  if (!data.success) {
                    // if not successful, bind errors to error variables
                      $scope.errorName = data.errors.name;
                      $scope.errorSuperhero = data.errors.superheroAlias;
                  } else {
                    // if successful, bind success message to message
                      $scope.message = data.message;
                                        $scope.errorName = '';
                      $scope.errorSuperhero = '';
                  }
              });
      };
    }
