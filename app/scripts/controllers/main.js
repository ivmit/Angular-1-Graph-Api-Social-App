'use strict';

/**
 * @ngdoc function
 * @name ngSocialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngSocialApp
 */
angular.module('ngSocialApp')
  .controller('MainCtrl',[ '$scope', function ($scope) {
    $scope.loggedIn = true;

    $scope.LoggIn = function(){
      $scope.loggedIn = true;
    };

    $scope.Logout = function() {
      $scope.loggedIn = false;
    };

  }]);
