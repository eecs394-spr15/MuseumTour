angular
  .module('tour', ['common'])
  .controller('TourController', function($scope, DataService) {

    var index = steroids.view.params.id;
    $scope.tour = DataService.getTourByIndex(index);
    
  });
