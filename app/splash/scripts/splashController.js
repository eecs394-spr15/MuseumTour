angular
  .module('splash',[])
  .controller('splashController', function($scope) {
    $scope.forc=true;
    //alert("...");
    $scope.choice=function(choi){
        if (choi==0)
        {
            $scope.forc=true;
        }
        else
        {
            $scope.forc=false;
        }
    };

    // Controller functionality here
  });
