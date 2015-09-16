(function() {
  'use strict';

  angular.module('app.home')
  .config(function($stateProvider: any, $urlRouterProvider: any) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state('home', {
      url:'/',
      templateUrl:'app/home/home.html',
      controller:'HomeController',
      controllerAs:'vm',
      resolve: {
        $title: function() { return 'Home'; }
      }
    });
  });
})();
