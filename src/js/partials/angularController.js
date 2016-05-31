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

        var msg = $('#ResultsForm').serialize();
        $.ajax({
            type: 'POST',
            url: 'http://localhost:9000/res.php',
            data: msg,
            success: function (data) {
                $('#serverResult').html(data);
            },
            error: function (xhr, str) {
                alert('Возникла ошибка: ' + xhr.responseCode);
            }
        });


    }


}]);