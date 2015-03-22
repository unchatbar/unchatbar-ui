'use strict';

/**
 * @ngdoc overview
 * @name unchatbar
 * @description
 * # unchatbar
 *
 * Main module of the application.
 */
angular.module('unchatbar')
  .config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
    function ($locationProvider, $stateProvider, $urlRouterProvider) {
      $locationProvider.html5Mode(true);

      $stateProvider
        .state('login', {
          url: '/',
          templateUrl: '../views/login.html'
        })
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: '../views/dashboard.html'
        });

      $urlRouterProvider.otherwise('/');
    }
  ]);
