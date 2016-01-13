'use strict';

/**
 * @ngdoc overview
 * @name ngSocialApp
 * @description
 * # ngSocialApp
 *
 * Main module of the application.
 */
angular
  .module('ngSocialApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngFacebook'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/facebook', {
        templateUrl: 'views/facebook.html',
        controller: 'FacebookCtrl',
        controllerAs: 'facebook'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .config( function( $facebookProvider ) {
    $facebookProvider.setAppId('1691546611119662');
    $facebookProvider.setPermissions("email, public_profile, user_photos,user_posts, publish_actions, user_birthday");
  })

  .run( function( $rootScope,$facebook) {
    // Load the facebook SDK asynchronously
    (function(){
      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }());



  });
