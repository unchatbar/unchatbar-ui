'use strict';

/**
 * @ngdoc function
 * @name unchatbar.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the unchatbar
 */
angular.module('unchatbar')
  .controller('chat', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
