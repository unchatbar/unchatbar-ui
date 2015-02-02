'use strict';

describe('Login controller', function () {

  // load the controller's module
  beforeEach(module('unchatbar'));

  var loginController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    loginController = $controller('login', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
