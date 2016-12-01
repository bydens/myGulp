(function() {
'use strict';
  angular.module('myApp', []).constant('pathTpl', '/components/');
})();
(function() {
'use strict';

  var mainCtrl = function ($scope) {
    $scope.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est?';
    $scope.arr = ['item 1', 'item 2', 'item 3'];
  };

  mainCtrl.$inject = ['$scope'];

  angular.module('myApp')
    .controller('mainCtrl', mainCtrl);
    
})();
(function() {
'use strict';

  var linkFn = function(scope) {
    console.log('Directive', scope.data);
  }

  var myDirect = function (pathTpl) {
    return {
      restrict: 'E',
      scope: {
        data: '='
      },
      // templateUrl: pathTpl + 'test2/test2.template.html',
      templateUrl: 'test2/test2.template.html',
      link: linkFn
    }
  };

  myDirect.$inject = ['pathTpl']

  angular.module('myApp')
    .directive('myDirect', myDirect);
    
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwidGVzdDIvdGVzdDIuY3RybC5qcyIsInRlc3QyL3Rlc3QyLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcbiAgYW5ndWxhci5tb2R1bGUoJ215QXBwJywgW10pLmNvbnN0YW50KCdwYXRoVHBsJywgJy9jb21wb25lbnRzLycpO1xyXG59KSgpOyIsIihmdW5jdGlvbigpIHtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuICB2YXIgbWFpbkN0cmwgPSBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgICAkc2NvcGUubWVzc2FnZSA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQW1ldCwgZXN0Pyc7XHJcbiAgICAkc2NvcGUuYXJyID0gWydpdGVtIDEnLCAnaXRlbSAyJywgJ2l0ZW0gMyddO1xyXG4gIH07XHJcblxyXG4gIG1haW5DdHJsLiRpbmplY3QgPSBbJyRzY29wZSddO1xyXG5cclxuICBhbmd1bGFyLm1vZHVsZSgnbXlBcHAnKVxyXG4gICAgLmNvbnRyb2xsZXIoJ21haW5DdHJsJywgbWFpbkN0cmwpO1xyXG4gICAgXHJcbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4gIHZhciBsaW5rRm4gPSBmdW5jdGlvbihzY29wZSkge1xyXG4gICAgY29uc29sZS5sb2coJ0RpcmVjdGl2ZScsIHNjb3BlLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgdmFyIG15RGlyZWN0ID0gZnVuY3Rpb24gKHBhdGhUcGwpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgZGF0YTogJz0nXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIHRlbXBsYXRlVXJsOiBwYXRoVHBsICsgJ3Rlc3QyL3Rlc3QyLnRlbXBsYXRlLmh0bWwnLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogJ3Rlc3QyL3Rlc3QyLnRlbXBsYXRlLmh0bWwnLFxyXG4gICAgICBsaW5rOiBsaW5rRm5cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBteURpcmVjdC4kaW5qZWN0ID0gWydwYXRoVHBsJ11cclxuXHJcbiAgYW5ndWxhci5tb2R1bGUoJ215QXBwJylcclxuICAgIC5kaXJlY3RpdmUoJ215RGlyZWN0JywgbXlEaXJlY3QpO1xyXG4gICAgXHJcbn0pKCk7Il19
