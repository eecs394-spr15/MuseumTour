angular.module('tour', ['common'])
  .controller('TourController', function($scope, $http, DataService) {
    var index = steroids.view.params.id;
    $scope.tourIndex = index;
    $scope.getTour = function(){
        return DataService.getTourByIndex(index);
    }

    // $http.get("app/tour/views/test.json")
    // .success(function(data, status) {
    // 	navigator.notification.alert("success " + status);
    // 	$scope.names = data.records;
    // }).
    // error(function(status) {
    // 	navigator.notification.alert("fail " + status);
    // });


});

