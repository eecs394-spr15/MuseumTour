angular
  .module('example')
  .controller('TourController', function($scope, supersonic) {

    $scope.tour = {
        title: "Scavenger hunt",
        description: "Get ready for a super awesome scavenger hunt!"
    };

  });
