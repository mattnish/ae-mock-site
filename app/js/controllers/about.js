'use strict';

/**
 * @ngdoc function
 * @name newSiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the newSiteApp
 */
angular.module('newSiteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
