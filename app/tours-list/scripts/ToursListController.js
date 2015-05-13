angular
  .module('tours-list', ['common'])
  .controller('ToursListController', function($scope, DataService) {

    $scope.app = {
        welcome: "Welcome to the Hull House!"
    };
    $scope.getTours = function(){
        return DataService.getAllTours();
    }


  });
