angular
  .module('MuseumTour_main')
  

  .controller('main_controller', function($scope, $http, supersonic) {
    // $scope.navbarTitle = "Settings";

	$http.get("http://localhost/tours.json" + $scope.posts)
    	.success(function (data, status) {
    		$scope.list = angular.fromJson(data);

    		console.log(data);
	});


  });
