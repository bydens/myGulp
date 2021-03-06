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