'use strict';

describe('Dashboard controller', function () {

  // load the controller's module
  beforeEach(module('unchatbar'));

  var chatController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    chatController = $controller('DashboardCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
