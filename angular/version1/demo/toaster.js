angular.module('main', ['toaster', 'ngAnimate'])
    .controller('myController', function($scope, toaster) {
        $scope.pop = function(){
            toaster.pop('success', "title", "text");
        };
    });