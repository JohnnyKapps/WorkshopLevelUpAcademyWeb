'use strict';

/**
 * @ngdoc function
 * @name workshopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workshopApp
 */
angular.module('workshopApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.pokemons = [];

    $scope.search = function(){

      $scope.message = "Searching...";

      $http.get('http://pokeapi.co/api/v2/pokemon/' + $scope.busca)
      .success(function(pokemon){
        $scope.message = "";
        console.log(pokemon);
        $scope.pokemons.push(pokemon);
      })
      .error(function(error){
        $scope.message = error.detail;
        console.log(error);
      });
    };

  });
