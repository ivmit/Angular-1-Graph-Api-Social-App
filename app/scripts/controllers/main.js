'use strict';

/**
 * @ngdoc function
 * @name ngSocialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngSocialApp
 */
angular.module('ngSocialApp')
  .controller('MainCtrl',[ '$scope','$facebook','$window', function ($scope, $facebook, $window) {

    //a way to keep false or true

    //Login function to FB
    $scope.LoggIn = function(){
      $facebook.login().then(function(){
        $window.location.href = '#/facebook';
      });
    };


    $facebook.getLoginStatus().then(function(response){
      if (response && response.status === "connected"){
        $window.location.href = '#/facebook';
      }
    });




  }]);
