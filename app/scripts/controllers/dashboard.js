'use strict';

/**
 * @ngdoc function
 * @name unchatbar.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 *
 * Controller of the unchatbar project
 */
angular.module('unchatbar')
  .controller('DashboardCtrl', function ($scope) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.header = {
      messages: [{
        '_links': {
          avatar: {
            href: 'images/agent-coulson.png'
          }
        },
        sender: 'Agent Coulson',
        text: 'Agent Coulson sent you a message',
        date: 'some seconds ago'
      }, {
        '_links': {
          avatar: {
            href: 'images/black-widow.png'
          }
        },
        sender: 'Black Widow',
        text: 'Black widow sent you a message',
        date: '3 minutes ago'
      }, {
        '_links': {
          avatar: {
            href: 'images/captain-america.png'
          }
        },
        sender: 'Captain America',
        text: 'Captain America sent you a message',
        date: '5 minutes ago'
      }, {
        '_links': {
          avatar: {
            href: 'images/giant-man.png'
          }
        },
        sender: 'Giant Man',
        text: 'Giant Man sent you a message',
        date: '15 minutes ago'
      }]
    };

  });
