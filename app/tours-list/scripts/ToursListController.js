angular
  .module('tours-list', ['common'])
  .controller('ToursListController', function($scope, DataService) {

    $scope.app = {
        welcome: "Welcome to the Hull House!"
    };
    $scope.tours = DataService.getAllTours();


  });
