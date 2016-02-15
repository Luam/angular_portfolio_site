
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




// var instagramApp = angular.module("instagram", []);

// instagramApp.factory('instagram', ['$http', function($http){

// 	return {
// 		fetchPopular: function(callback){
            
//             var endPoint = "https://api.instagram.com/v1/media/popular?client_id=642176ece1e7445e99244cec26f4de1f&callback=JSON_CALLBACK";
            
//             $http.jsonp(endPoint).success(function(response){
//                 callback(response.data);
//             });
// 		}
// 	}

// }]);

// instagramApp.controller('instagramGridController', ['$scope', 'instagram' ,
// function ($scope, instagram){

	

// 	$scope.layout = 'grid';
    
//     $scope.setLayout = function(layout){
//         $scope.layout = layout;
//     };
    
//     $scope.isLayout = function(layout){
//         return $scope.layout == layout;
//     };

// 	$scope.pics = [];

	
// 	instagram.fetchPopular(function(data){

// 		$scope.pics = data;
// 	});

// }]);


