(function() {
'use strict';
  angular.module('myApp', []);
})();
(function() {
'use strict';

  var mainCtrl = function ($scope) {
    $scope.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est?';
  };

  mainCtrl.$inject = ['$scope'];

  angular.module('myApp')
    .controller('mainCtrl', mainCtrl);
    
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwidGVzdDIvdGVzdDIuY3RybC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbid1c2Ugc3RyaWN0JztcclxuICBhbmd1bGFyLm1vZHVsZSgnbXlBcHAnLCBbXSk7XHJcbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4gIHZhciBtYWluQ3RybCA9IGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICAgICRzY29wZS5tZXNzYWdlID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbWV0LCBlc3Q/JztcclxuICB9O1xyXG5cclxuICBtYWluQ3RybC4kaW5qZWN0ID0gWyckc2NvcGUnXTtcclxuXHJcbiAgYW5ndWxhci5tb2R1bGUoJ215QXBwJylcclxuICAgIC5jb250cm9sbGVyKCdtYWluQ3RybCcsIG1haW5DdHJsKTtcclxuICAgIFxyXG59KSgpOyJdfQ==
