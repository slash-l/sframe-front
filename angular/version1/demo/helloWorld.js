/**
 * Created by liu on 2016/10/29.
 */

var myApp = angular.module('myApp',[]);
myApp.controller("UserController", function ($scope) {
    console.log("my first controller");
    $scope.user = {};
    $scope.user.name = "mumu";
    $scope.user.email = "slash@163.com";
    $scope.user.subscribe = function () {
        console.log($scope.user.name + ", 邮箱是：" + $scope.user.email);
    }
})

myApp.controller("ShowController", function ($scope) {
    $scope.shows = [
        {title: 'java', subscribe: true, updated: 1288323623},
        {title: ".net", subscribe: false, updated: 1288323623},
        {title: "angularjs", subscribe: true, updated: 1288323623}
    ];
})

