angular
  .module('splash',[])
  .controller('splashController', function($scope) {
    $scope.forc=false;
    //alert("...");
    $scope.choice=function(choi){
        if (choi==0)
        {
            $scope.forc=false;
        }
        else
        {
            $scope.forc=true;
        }
    };

    // Controller functionality here
  });
