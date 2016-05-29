'use strict';

angular.module('testAssignment', [])

    .controller('testController', ['$scope', function($scope) {
                
                $scope.student = {firstname:"", lastname:"", lesson:"", marksnumber:"", allLessons:"", missedminus:""};
        
                $scope.sendResults = function() {
                    
                    console.log($scope.student);
                    
                }
        
        
               }])
;

function addMarkFields() {
    /* Добавление полей для выставление оценок */
    
    var numberOfMarks = document.getElementById("marksnumber").value;
    var inputContainer = document.createDocumentFragment();
    var markBegin = document.getElementById("addmarks")
    markBegin.innerHTML = '';
    
    for (var i = 0; i < numberOfMarks; i++){
        markBegin.insertAdjacentHTML("afterBegin", "<input type='number' min='1' class='form-control' name='mark' required>");
    }
}

function averageMark() {
    /* Подсчет средней оценки */
    
    var div = document.getElementById("addmarks");
    var elems = div.getElementsByTagName("*");
    var sum = 0;
    
    for (var i = 0; i < elems.length; i++) {
        sum += Number(elems[i].value);
    }
    
    return Math.round(sum / elems.length);
}

function missedLessons() {
    /* получение процента пропущенных занятий */
    
    var all = document.getElementById("allLessons").value;
    var missed = document.getElementById("missedminus").value;
    
    return missed / all * 100;
    
}

function toGrade() {
    /* Выставление оценки */
    
    var miss = missedLessons();
    var average = averageMark();
    
    var resultElem = document.getElementById("result")
    resultElem.innerHTML = '';
    
    if (miss <= 10 && average >= 4) {
        resultElem.insertAdjacentHTML("beforeEnd", "<p style='color:green; font-weight:bold'>Результат: Зачтено</p>");
    }
    else 
        resultElem.insertAdjacentHTML("beforeEnd", "<p style='color:red; font-weight:bold'>Результат: Незачтено</p>");
}