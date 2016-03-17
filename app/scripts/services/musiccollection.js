'use strict';

/**
 * @ngdoc service
 * @name musikifyApp.musicCollection
 * @description
 * # musicCollection
 * Service in the musikifyApp.
 */
angular.module('musikifyApp')
  .service('musicCollection', function (util) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.get = function() {
      return playlist;
    };

    this.newTrack = function(title, artist, duration) {
      return {

        // Defaults
        id: util.guid(),
        statusId: 0, // (Int) 0: Stand By, 1: Playing, 2: Paused

        title: title, // (String) Track Title
        artist: artist, // (String) Track Artist
        duration: duration, // (String) Time in MM:SS format
        cover: 'default'
      }
    };


    function createTrack(title, artist, duration, cover) {
      return {

        // Defaults
        id: util.guid(),
        statusId: 0, // (Int) 0: Stand By, 1: Playing, 2: Paused



        title: title, // (String) Track Title
        artist: artist, // (String) Track Artist
        duration: duration, // (String) Time in MM:SS format
        cover: cover // (String) Filename without extension, we infer is a png
      }
    }


    var playlist = [];

    playlist.push(createTrack('Pictures Of You', 'The Cure', '5:34', 'pictures-of-you'));
    playlist.push(createTrack('Kashmir', 'Led Zeppelin', '8:31', 'kashmir'));
    playlist.push(createTrack('Back in Black', 'AC/DC', '4:14', 'back-in-black'));
    playlist.push(createTrack('Where Is My Mind', 'Pixies', '3:55', 'where-is-my-mind'));
    playlist.push(createTrack('Love Will Tear Us Apart', 'Joy Division', '3:45', 'love-will-tear-us-apart'));
    playlist.push(createTrack('Paint It, Black', 'The Rolling Stones', '3:46', 'paint-it-black'));

  });
