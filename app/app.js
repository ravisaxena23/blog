// app initiaization
var app = angular.module('app',['ngRoute']);

// Routing

app.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/home',{
            templateUrl: '/component/home/homecomponent.html'
            // controller: 'appController'
        })
        .when('/contact',{
            templateUrl: '/component/contact/contactcomponent.html'
        })
        .when('/blog',{
            templateUrl: '/component/blog/blogcomponent.html'
        })
        .otherwise({
            redirectTo: '/'
        })
}])

// main controller

// app.controller('appController',['$scope','$http', function($scope, $http){
//     $scope.name = "ravi";
// }])
