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