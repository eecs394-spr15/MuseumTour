angular
  .module('tour', [])
  .controller('TourController', function($scope) {

    $scope.id = steroids.view.params.id;
    $scope.tour = {
        title: "Scavenger hunt",
        description: "Get ready for a super awesome scavenger hunt!"
    };

  });
