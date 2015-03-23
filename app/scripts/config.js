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
          abstract: true,
          templateUrl: '../views/dashboard.html'
        })
        .state('chat', {
          parent: 'dashboard',
          url: '/chat',
          views: {
            header: {
              templateUrl: 'views/dashboard/header.html'
            },
            sidebar: {
              templateUrl: 'views/dashboard/sidebar.html'
            },
            content: {
              templateUrl: 'views/dashboard/chat.html'
            },
            footer: {
              templateUrl: 'views/dashboard/footer.html'
            }
          }
        })
        .state('profile', {
          parent: 'dashboard',
          url: '/profile',
          views: {
            header: {
              templateUrl: 'views/dashboard/header.html'
            },
            sidebar: {
              templateUrl: 'views/dashboard/sidebar.html'
            },
            content: {
              templateUrl: 'views/dashboard/profile.html'
            },
            footer: {
              templateUrl: 'views/dashboard/footer.html'
            }
          }
        });

      $urlRouterProvider.otherwise('/');
    }
  ]);
