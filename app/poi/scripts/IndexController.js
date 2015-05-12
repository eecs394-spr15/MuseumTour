angular
  .module('poi')
  .controller('IndexController', function($scope, supersonic, DataService) {
    // Controller functionality here
    var index = steroids.view.params.id;
    $scope.tour = DataService.getTourByIndex(index);
  });
