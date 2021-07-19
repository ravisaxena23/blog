app = angular.module('app',['ngRoute']);

app.config(['$routerProvider', ($routerProvider)->
    
    $routerProvider.when('/home',{
            templateUrl: '/component/home/homecomponent.html'
        })
        .when('/contact',{
            templateUrl: '/component/contact/contactcomponent.html'
        })
        .when('./blog',{
            templateUrl: '/component/blog/blogcomponent.html'
        })
        .otherwise({
            redirectTO: '/home'
        })
])