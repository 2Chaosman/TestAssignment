"use strict";function addMarkFields(){var e=document.getElementById("marksnumber").value,n=(document.createDocumentFragment(),document.getElementById("addmarks"));n.innerHTML="";for(var t=0;e>t;t++)n.insertAdjacentHTML("afterBegin","<input type='number' min='1' class='form-control' name='mark' required>")}function averageMark(){for(var e=document.getElementById("addmarks"),n=e.getElementsByTagName("*"),t=0,r=0;r<n.length;r++)t+=Number(n[r].value);return Math.round(t/n.length)}function missedLessons(){var e=document.getElementById("allLessons").value,n=document.getElementById("missedminus").value;return n/e*100}function toGrade(){var e=missedLessons(),n=averageMark(),t=document.getElementById("result");t.innerHTML="",10>=e&&n>=4?t.insertAdjacentHTML("beforeEnd","<p style='color:green; font-weight:bold'>Результат: Зачтено</p>"):t.insertAdjacentHTML("beforeEnd","<p style='color:red; font-weight:bold'>Результат: Незачтено</p>")}angular.module("testAssignment",[]).controller("testController",["$scope",function(e){e.student={firstname:"",lastname:"",lesson:"",marksnumber:"",allLessons:"",missedminus:""},e.sendResults=function(){console.log(e.student)}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYWRkTWFya0ZpZWxkcyIsIm51bWJlck9mTWFya3MiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJtYXJrQmVnaW4iLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaW5uZXJIVE1MIiwiaSIsImluc2VydEFkamFjZW50SFRNTCIsImF2ZXJhZ2VNYXJrIiwiZGl2IiwiZWxlbXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInN1bSIsImxlbmd0aCIsIk51bWJlciIsIk1hdGgiLCJyb3VuZCIsIm1pc3NlZExlc3NvbnMiLCJhbGwiLCJtaXNzZWQiLCJ0b0dyYWRlIiwibWlzcyIsImF2ZXJhZ2UiLCJyZXN1bHRFbGVtIiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJzdHVkZW50IiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJsZXNzb24iLCJtYXJrc251bWJlciIsImFsbExlc3NvbnMiLCJtaXNzZWRtaW51cyIsInNlbmRSZXN1bHRzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFrQkEsU0FBU0EsaUJBR0wsR0FBSUMsR0FBZ0JDLFNBQVNDLGVBQWUsZUFBZUMsTUFFdkRDLEdBRGlCSCxTQUFTSSx5QkFDZEosU0FBU0MsZUFBZSxZQUN4Q0UsR0FBVUUsVUFBWSxFQUV0QixLQUFLLEdBQUlDLEdBQUksRUFBT1AsRUFBSk8sRUFBbUJBLElBQy9CSCxFQUFVSSxtQkFBbUIsYUFBYywyRUFJbkQsUUFBU0MsZUFPTCxJQUFLLEdBSkRDLEdBQU1ULFNBQVNDLGVBQWUsWUFDOUJTLEVBQVFELEVBQUlFLHFCQUFxQixLQUNqQ0MsRUFBTSxFQUVETixFQUFJLEVBQUdBLEVBQUlJLEVBQU1HLE9BQVFQLElBQzlCTSxHQUFPRSxPQUFPSixFQUFNSixHQUFHSixNQUczQixPQUFPYSxNQUFLQyxNQUFNSixFQUFNRixFQUFNRyxRQUdsQyxRQUFTSSxpQkFHTCxHQUFJQyxHQUFNbEIsU0FBU0MsZUFBZSxjQUFjQyxNQUM1Q2lCLEVBQVNuQixTQUFTQyxlQUFlLGVBQWVDLEtBRXBELE9BQU9pQixHQUFTRCxFQUFNLElBSTFCLFFBQVNFLFdBR0wsR0FBSUMsR0FBT0osZ0JBQ1BLLEVBQVVkLGNBRVZlLEVBQWF2QixTQUFTQyxlQUFlLFNBQ3pDc0IsR0FBV2xCLFVBQVksR0FFWCxJQUFSZ0IsR0FBY0MsR0FBVyxFQUN6QkMsRUFBV2hCLG1CQUFtQixZQUFhLG1FQUczQ2dCLEVBQVdoQixtQkFBbUIsWUFBYSxtRUFsRW5EaUIsUUFBUUMsT0FBTyxxQkFFVkMsV0FBVyxrQkFBbUIsU0FBVSxTQUFTQyxHQUV0Q0EsRUFBT0MsU0FBV0MsVUFBVSxHQUFJQyxTQUFTLEdBQUlDLE9BQU8sR0FBSUMsWUFBWSxHQUFJQyxXQUFXLEdBQUlDLFlBQVksSUFFbkdQLEVBQU9RLFlBQWMsV0FFakJDLFFBQVFDLElBQUlWLEVBQU9DIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgndGVzdEFzc2lnbm1lbnQnLCBbXSlcclxuXHJcbiAgICAuY29udHJvbGxlcigndGVzdENvbnRyb2xsZXInLCBbJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc3R1ZGVudCA9IHtmaXJzdG5hbWU6XCJcIiwgbGFzdG5hbWU6XCJcIiwgbGVzc29uOlwiXCIsIG1hcmtzbnVtYmVyOlwiXCIsIGFsbExlc3NvbnM6XCJcIiwgbWlzc2VkbWludXM6XCJcIn07XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2VuZFJlc3VsdHMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuc3R1ZGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgIH1dKVxyXG47XHJcblxyXG5mdW5jdGlvbiBhZGRNYXJrRmllbGRzKCkge1xyXG4gICAgLyog0JTQvtCx0LDQstC70LXQvdC40LUg0L/QvtC70LXQuSDQtNC70Y8g0LLRi9GB0YLQsNCy0LvQtdC90LjQtSDQvtGG0LXQvdC+0LogKi9cclxuICAgIFxyXG4gICAgdmFyIG51bWJlck9mTWFya3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmtzbnVtYmVyXCIpLnZhbHVlO1xyXG4gICAgdmFyIGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgdmFyIG1hcmtCZWdpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkbWFya3NcIilcclxuICAgIG1hcmtCZWdpbi5pbm5lckhUTUwgPSAnJztcclxuICAgIFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZk1hcmtzOyBpKyspe1xyXG4gICAgICAgIG1hcmtCZWdpbi5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlckJlZ2luXCIsIFwiPGlucHV0IHR5cGU9J251bWJlcicgbWluPScxJyBjbGFzcz0nZm9ybS1jb250cm9sJyBuYW1lPSdtYXJrJyByZXF1aXJlZD5cIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF2ZXJhZ2VNYXJrKCkge1xyXG4gICAgLyog0J/QvtC00YHRh9C10YIg0YHRgNC10LTQvdC10Lkg0L7RhtC10L3QutC4ICovXHJcbiAgICBcclxuICAgIHZhciBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZG1hcmtzXCIpO1xyXG4gICAgdmFyIGVsZW1zID0gZGl2LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKTtcclxuICAgIHZhciBzdW0gPSAwO1xyXG4gICAgXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc3VtICs9IE51bWJlcihlbGVtc1tpXS52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKHN1bSAvIGVsZW1zLmxlbmd0aCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1pc3NlZExlc3NvbnMoKSB7XHJcbiAgICAvKiDQv9C+0LvRg9GH0LXQvdC40LUg0L/RgNC+0YbQtdC90YLQsCDQv9GA0L7Qv9GD0YnQtdC90L3Ri9GFINC30LDQvdGP0YLQuNC5ICovXHJcbiAgICBcclxuICAgIHZhciBhbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbExlc3NvbnNcIikudmFsdWU7XHJcbiAgICB2YXIgbWlzc2VkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaXNzZWRtaW51c1wiKS52YWx1ZTtcclxuICAgIFxyXG4gICAgcmV0dXJuIG1pc3NlZCAvIGFsbCAqIDEwMDtcclxuICAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiB0b0dyYWRlKCkge1xyXG4gICAgLyog0JLRi9GB0YLQsNCy0LvQtdC90LjQtSDQvtGG0LXQvdC60LggKi9cclxuICAgIFxyXG4gICAgdmFyIG1pc3MgPSBtaXNzZWRMZXNzb25zKCk7XHJcbiAgICB2YXIgYXZlcmFnZSA9IGF2ZXJhZ2VNYXJrKCk7XHJcbiAgICBcclxuICAgIHZhciByZXN1bHRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIilcclxuICAgIHJlc3VsdEVsZW0uaW5uZXJIVE1MID0gJyc7XHJcbiAgICBcclxuICAgIGlmIChtaXNzIDw9IDEwICYmIGF2ZXJhZ2UgPj0gNCkge1xyXG4gICAgICAgIHJlc3VsdEVsZW0uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlRW5kXCIsIFwiPHAgc3R5bGU9J2NvbG9yOmdyZWVuOyBmb250LXdlaWdodDpib2xkJz7QoNC10LfRg9C70YzRgtCw0YI6INCX0LDRh9GC0LXQvdC+PC9wPlwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgXHJcbiAgICAgICAgcmVzdWx0RWxlbS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVFbmRcIiwgXCI8cCBzdHlsZT0nY29sb3I6cmVkOyBmb250LXdlaWdodDpib2xkJz7QoNC10LfRg9C70YzRgtCw0YI6INCd0LXQt9Cw0YfRgtC10L3QvjwvcD5cIik7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
