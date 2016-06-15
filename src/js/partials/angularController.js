'use strict';

angular.module('testAssignment', [])

.controller('testController', ['$scope', '$http', function ($scope, $http) {

    $scope.student = {
        firstname: "",
        lastname: "",
        lesson: "",
        marksnumber: 0,
        allLessons: 0,
        missedminus: 0,

    };

    $scope.sendResults = function () {

        console.log($scope.student);

        /*var msg = $('#ResultsForm').serialize();
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
        });*/


        $http({
            url: 'res.php',
            method: "POST",
            data: $scope.student
        }).success(function (data, status, headers, config) {
            $scope.data = data;
            console.log(data);
        }).error(function (data, status, headers, config) {
            $scope.status = status;
        });



    };
    
    $scope.addMarkFields = function () {
        /* Добавление полей для выставление оценок */

        var numberOfMarks = $scope.student.marksnumber /*document.getElementById("marksnumber").value*/ ;
        var markBegin = document.getElementById("addmarks")
        markBegin.innerHTML = '';

        for (var i = 0; i < numberOfMarks; i++) {
            markBegin.insertAdjacentHTML("afterBegin", "<input type='number' min='1' class='form-control' name='mark' required>");
        }
    }

    $scope.averageMark = function() {
        /* Подсчет средней оценки */

        var div = document.getElementById("addmarks");
        var elems = div.getElementsByTagName("*");
        var sum = 0;

        for (var i = 0; i < elems.length; i++) {
            sum += Number(elems[i].value);
        }

        return Math.round(sum / elems.length);
    };

    $scope.missedLessons = function() {
        /* получение процента пропущенных занятий */

        var all = $scope.student.allLessons;
        var missed = $scope.student.missedminus;

        return missed / all * 100;

    };

    $scope.toGrade = function() {
        /* Выставление оценки */

        var miss = $scope.missedLessons();
        var average = $scope.averageMark();

        var resultElem = document.getElementById("result")
        resultElem.innerHTML = '';

        if (miss <= 10 && average >= 4) {
            resultElem.insertAdjacentHTML("beforeEnd", "<p style='color:green; font-weight:bold'>Результат: Зачтено</p>");
        } else
            resultElem.insertAdjacentHTML("beforeEnd", "<p style='color:red; font-weight:bold'>Результат: Незачтено</p>");
    };


}]);