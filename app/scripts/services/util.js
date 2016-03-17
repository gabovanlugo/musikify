'use strict';

/**
 * @ngdoc service
 * @name musikifyApp.util
 * @description
 * # util
 * Service in the musikifyApp.
 */
angular.module('musikifyApp')
  .service('util', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.guid = function () {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };


  });
