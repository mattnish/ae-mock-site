'use strict';

/**
 * @ngdoc function
 * @name newSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newSiteApp
 */
angular.module('newSiteApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
