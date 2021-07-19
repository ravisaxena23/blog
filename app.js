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
            redirectTo: '/home'
        })
}])

// main controller

// app.controller('appController',['$scope','$http', function($scope, $http){
//     $scope.name = "ravi";
// }])

app.controller('blogController',['$scope','$http', function($scope, $http){

    $scope.blogtype = ["Technical","Economics","Research","Enviroment","Engineering"];
    
    $scope.blog = [];
    $scope.message = ""
    $scope.addBlog = function(){
        $scope.blog.push({
            name: $scope.blog.username,
            email: $scope.blog.email,
            imgURL: $scope.blog.imgURL,
            title: $scope.blog.title,
            type: $scope.blog.type,
            content: $scope.blog.content,
            available:true
        });
        
        $scope.blog.username = ""
        $scope.blog.email = ""
        $scope.blog.imgURL = ""
        $scope.blog.title = ""
        $scope.blog.type = ""
        $scope.blog.content = ""
        $scope.message= "Thank you for your submission"
    }
    if($scope.addBlog===true){
        console.log("success")
    }
}])
app.controller('contactController',['$scope','$http', function($scope, $http){
    $scope.name = "I'am contact page";
}])
app.controller('homeController',['$scope','$http', function($scope, $http){
    $scope.name = "ravi's";
}])