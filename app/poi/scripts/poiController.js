angular.module('poi', ['common'])
  .controller('poiController', function($scope, DataService) {
    // Controller functionality here
    var index = steroids.view.params.id;
    var tour = DataService.getTourByIndex(index);
   	var poi = tour.poi[index];

    if (poi.title === 'Mona Lisa') {
    	poi.link = 'http://latinoweeklyreview.com/wp-content/uploads/2012/10/Mona-Lisa-original.jpg';
    } else if (poi.title === 'Mount Rushmore') {
    	poi.link = 'http://media-3.web.britannica.com/eb-media/02/75502-004-47C41965.jpg';
    	poi.description = 'Mini Replica of National Park';
    } else {
    	poi.link = 'http://www.unmuseum.org/espyrami.jpg';
    	poi.description = 'Mini Replica of pyramids in Egypt';
    }

    $scope.poi = poi;


  });
