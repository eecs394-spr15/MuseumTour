angular
  .module('splash',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/:mode', {
        templateUrl: 'login.html',
        controller: 'loginController'
      })
      .otherwise({
        redirectTo: '/create'
      });
  })

  .controller('initViewDismissController', function($scope) {
    })

  .controller('loginController', function($scope, $routeParams, $location) {
    var type = $routeParams.mode;
    $scope.user = {
        username:"",
        password:""
    };
    if(type == "create"){
        $scope.message = "Create an account";
        $scope.alt = "Login with an existing account";
        $scope.alt_link = "login";
    }
    else if(type == "login"){
        $scope.message = "Login";
        $scope.alt = "Create an account";
        $scope.alt_link = "create";
    }
    $scope.switch = function(){
        $location.path("/" + $scope.alt_link);
    };
});