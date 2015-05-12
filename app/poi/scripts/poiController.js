angular
  .module('poi')
  .controller('poiController', function($scope, supersonic, DataService) {
    // Controller functionality here
    var index = steroids.view.params.id;
    steroids.logger.log(index);
   	$scope.index = index;
    $scope.tour = DataService.getTourByIndex(index);
  });
