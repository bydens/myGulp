(function() {
'use strict';

  var mainCtrl = function ($scope) {
    $scope.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est?';
  };

  mainCtrl.$inject = ['$scope'];

  angular.module('myApp')
    .controller('mainCtrl', mainCtrl);
    
})();