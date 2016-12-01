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
      scope: {
        data: '='
      },
      templateUrl: pathTpl + 'test2/test2.template.html',
      link: linkFn
    }
  };

  myDirect.$inject = ['pathTpl']

  angular.module('myApp')
    .directive('myDirect', myDirect);
    
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwidGVzdDIvdGVzdDIuY3RybC5qcyIsInRlc3QyL3Rlc3QyLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbid1c2Ugc3RyaWN0JztcclxuICBhbmd1bGFyLm1vZHVsZSgnbXlBcHAnLCBbXSkuY29uc3RhbnQoJ3BhdGhUcGwnLCAnL2NvbXBvbmVudHMvJyk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4gIHZhciBtYWluQ3RybCA9IGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICAgICRzY29wZS5tZXNzYWdlID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbWV0LCBlc3Q/JztcclxuICAgICRzY29wZS5hcnIgPSBbJ2l0ZW0gMScsICdpdGVtIDInLCAnaXRlbSAzJ107XHJcbiAgfTtcclxuXHJcbiAgbWFpbkN0cmwuJGluamVjdCA9IFsnJHNjb3BlJ107XHJcblxyXG4gIGFuZ3VsYXIubW9kdWxlKCdteUFwcCcpXHJcbiAgICAuY29udHJvbGxlcignbWFpbkN0cmwnLCBtYWluQ3RybCk7XHJcbiAgICBcclxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbiAgdmFyIGxpbmtGbiA9IGZ1bmN0aW9uKHNjb3BlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnRGlyZWN0aXZlJywgc2NvcGUuZGF0YSk7XHJcbiAgfVxyXG5cclxuICB2YXIgbXlEaXJlY3QgPSBmdW5jdGlvbiAocGF0aFRwbCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2NvcGU6IHtcclxuICAgICAgICBkYXRhOiAnPSdcclxuICAgICAgfSxcclxuICAgICAgdGVtcGxhdGVVcmw6IHBhdGhUcGwgKyAndGVzdDIvdGVzdDIudGVtcGxhdGUuaHRtbCcsXHJcbiAgICAgIGxpbms6IGxpbmtGblxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG15RGlyZWN0LiRpbmplY3QgPSBbJ3BhdGhUcGwnXVxyXG5cclxuICBhbmd1bGFyLm1vZHVsZSgnbXlBcHAnKVxyXG4gICAgLmRpcmVjdGl2ZSgnbXlEaXJlY3QnLCBteURpcmVjdCk7XHJcbiAgICBcclxufSkoKTsiXX0=
