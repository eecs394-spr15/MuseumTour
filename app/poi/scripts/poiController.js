angular.module('poi', ['common'])
  .controller('poiController', function($scope, DataService) {
    // Controller functionality here
    var index = steroids.view.params.id;
    var tour = DataService.getTourByIndex(index);
    $scope.poi = tour.poi[index];
    steroids.logger.log($scope.poi);


  });
