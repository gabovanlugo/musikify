'use strict';

describe('Controller: PlayCtrl', function () {

  // load the controller's module
  beforeEach(module('musikifyApp'));

  var PlayCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlayCtrl = $controller('PlayCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PlayCtrl.awesomeThings.length).toBe(3);
  });
});
