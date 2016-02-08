
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




