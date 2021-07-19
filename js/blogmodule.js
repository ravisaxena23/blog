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
}])