'use strict';

angular.module('testAssignment', [])

.controller('testController', ['$scope', function ($scope) {

    $scope.student = {
        firstname: "",
        lastname: "",
        lesson: "",
        marksnumber: "",
        allLessons: "",
        missedminus: ""
    };

    $scope.sendResults = function () {

        console.log($scope.student);

    }


}]);