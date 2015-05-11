angular.module('tour', ['common'])
  .controller('TourController', function($scope, $http, DataService) {
    var index = steroids.view.params.id;
    $scope.tour = DataService.getTourByIndex(index);
});

//   .config(function (RestangularProvider) {
//   	RestangularProvider.setBaseUrl('/');
// })

// angular.module('tour', ['common','restangular'])

// 	.factory('myRestangular', function(Restangular) {

// 	  return Restangular.withConfig(function(RestangularConfigurer) {

// 	    RestangularConfigurer.setBaseUrl('http://localhost/');
// 	    RestangularConfigurer.setRequestSuffix('.json');

// 	    // RestangularConfigurer.setRestangularFields({
// 	    //   id: "app_id"
// 	    // });

//   	})

// 	.controller('TourController', function($scope, $http, DataService, myRestangular) {
// 		 // navigator.notification.alert('test: ');
// 		 // $scope.names = myRestangular.all('test').getList();
// 	    var index = steroids.view.params.id;
// 	    $scope.tour = DataService.getTourByIndex(index);
// 	})


// });

