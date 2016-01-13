'use strict';

/**
 * @ngdoc function
 * @name ngSocialApp.controller:FacebookCtrl
 * @description
 * # FacebookCtrl
 * Controller of the ngSocialApp
 */
angular.module('ngSocialApp')
  .controller('FacebookCtrl',[ '$scope', '$facebook','$window', function ($scope, $facebook, $window) {
    $scope.Logout = function(){


      $facebook.logout().then(function(){
           $window.location.href = '#/';
         })
       };

    $facebook.getLoginStatus().then(function(response){
      if (response && response.status !== "connected"){
        $window.location.href = '#/';
      }
    });



    $scope.post = function(message) {
      $facebook.api('/me/feed', 'post', {message: message}).then(function(){
        refresh();
      })
    };


    function refresh() {


      $facebook.api("/me",{fields: 'birthday, last_name, first_name, email, gender, locale, name, link'}).then(function(res){
          if (res && !res.error) {
            $scope.welcomeMsg = res.name;
            $scope.isLoggedIn = true;
            $scope.userInfo = res;
          }

          console.log(res);
          //Getting Facebook User Picture


           $facebook.api("/me/picture", {height:60, width:60}).then(function(res){
           if (res && !res.error) {
           $scope.picture = res.data.url;
           }
           });


           $facebook.api("/me/permissions").then(function(res){
           if (res && !res.error) {
           $scope.permissions = res.data;
           }
           });

           $facebook.api("/me/posts").then(function(res){
           if (res && !res.error) {
           $scope.posts = res.data;
           }
           });


        },
        function(err){
          $scope.welcomeMsg = "Please Log In";
        })

    }

    refresh();


  }]);
