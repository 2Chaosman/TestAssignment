/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js


/*
 * Custom
 */
//= partials/app.js
'use strict';

angular.module('testAssignment', [])

    .controller('testController', ['$scope', function($scope) {
                
                $scope.student = {firstname:"", lastname:"", lesson:"", marksnumber:"", missedplus:"", missedminus:""};
        
                $scope.sendResults = function() {
                    
                    console.log($scope.student);
                    
                }
        
        
               }])
;