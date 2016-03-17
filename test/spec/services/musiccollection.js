'use strict';

describe('Service: musicCollection', function () {

  // load the service's module
  beforeEach(module('musikifyApp'));

  // instantiate service
  var musicCollection;
  beforeEach(inject(function (_musicCollection_) {
    musicCollection = _musicCollection_;
  }));

  it('should do something', function () {
    expect(!!musicCollection).toBe(true);
  });

});
