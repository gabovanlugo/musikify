'use strict';

/**
 * @ngdoc function
 * @name musikifyApp.controller:PlayCtrl
 * @description
 * # PlayCtrl
 * Controller of the musikifyApp
 */
angular.module('musikifyApp')
  .controller('PlayCtrl', function ($scope, $document, musicCollection, util) {

    // Init

    // DataSource
    var tracksDataSource = musicCollection.get();
    $scope.tracks = tracksDataSource;



    $scope.state = {};

    function clearState() {
      $scope.state = {
        playing: false,

        currentId: null,
        currentStatusId: null,
        currentArtist: null,
        currentTitle: null,
        currentDuration: null,
        currentCover: null
      };
    }

    clearState();

    function setState(index, currentId, currentStatusId, currentArtist, currentTitle, currentDuration, currentCover) {
      $scope.state.playing = true;
      $scope.state.currentId = currentId;
      $scope.state.currentStatusId = currentStatusId;
      $scope.state.currentArtist = currentArtist;
      $scope.state.currentTitle = currentTitle;
      $scope.state.currentDuration = currentDuration;
      $scope.state.currentCover = currentCover;

      // We update de DataSource
      tracksDataSource[index].statusId = currentStatusId;

      reloadData();

    }


    function reloadData() {

      $scope.tracks = tracksDataSource;

    }






    // Player Reproduction State


    // Track Reproduction Operations

    $scope.playx = function(index) {
      console.log('play ' + index);

      // We need to stop any track if it's currently playing, or paused

      if ($scope.state.currentStatusId === 1 || $scope.state.currentStatusId === 2) {
        console.log('There\'s something playing');

        var indexFromCurrentTrack = tracksDataSource.map(function (item) {
          return item.id;
        }).indexOf($scope.state.currentId);


        tracksDataSource[indexFromCurrentTrack].statusId = 0;

        // Stop
        clearState();

      } else {
        console.log('OK. let\'s play');
      }

      setState(
          index,
          tracksDataSource[index].id,
          1,
          tracksDataSource[index].artist,
          tracksDataSource[index].title,
          tracksDataSource[index].duration,
          tracksDataSource[index].cover
      );

      // console.log(tracksDataSource);

      console.log($scope.state);


    };


    $scope.pause = function() {
      console.log('pause');

      $scope.state.currentStatusId = 2;

      var index = tracksDataSource.map(function (item) {
        return item.id;
      }).indexOf($scope.state.currentId);


      tracksDataSource[index].statusId = 2;


      reloadData();



    };




    $scope.stop = function() {
      console.log('stop');

      var index = tracksDataSource.map(function (item) {
        return item.id;
      }).indexOf($scope.state.currentId);


      tracksDataSource[index].statusId = 0;

      clearState();

      reloadData();




    };


    $scope.addTrack = function () {

      tracksDataSource.push(musicCollection.newTrack('Unknown Title', 'Unknown Artist', '3:25'));
      reloadData();


      var someElement = angular.element(document.getElementById('footer'));
      var offset = 0;
      var duration = 500;

      $document.scrollToElement(someElement, offset, duration);

    };



    // Track Playlist Operations

    $scope.up = function(index) {
      console.log('up: ' + index);

      if (index > 0) {

        var current = tracksDataSource[index];
        var next = tracksDataSource[index-1];

        tracksDataSource[index] = next;
        tracksDataSource[index-1] = current;

        reloadData();

      } else {
        console.log('You\'ve reached the ceiling');
      }


    };

    $scope.down = function(index) {
      console.log('down: ' + index);

      if (index < tracksDataSource.length - 1) {

        var current = tracksDataSource[index];
        var next = tracksDataSource[index+1];

        tracksDataSource[index] = next;
        tracksDataSource[index+1] = current;

        reloadData();

      } else {
        console.log('You\'ve reached the floor');
      }

    };

    $scope.remove = function(index) {
      console.log('remove: ' + index);


      // If we're trying to delete something that is currently playing, well, we stop ir first

      if ($scope.state.currentId === tracksDataSource[index].id) {
        clearState();
      }

      // Then, we proceed to remove from the DataSource

      tracksDataSource.splice(index, 1);

      reloadData();



    };



  });
