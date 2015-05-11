angular
  .module('splash')
  .controller('splashController', function($scope, supersonic) {
    $scope.show=true;
    $scope.choice=function(choi){
        if (choi==0)
        {
            $scope.show=!$scope.show;
        }
        else
        {
            $scope.show=false;
        }
    };

    // Controller functionality here
  });
