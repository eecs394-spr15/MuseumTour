angular
  .module('tour', [])
  .controller('TourController', function($scope) {

    var index = steroids.view.params.id,
    	tours = [
	    	{
	    		name: 'Red Tour',
	    		tourClass: 'redtour',
	    		textClass: 'redtext',
	    		description: 'The red tour is an ordered tour through the museum!'
	    	},
	    	{
	    		name: 'Blue Tour',
	    		tourClass: 'bluetour',
	    		textClass: 'bluetext',
	    		description: 'The blue tour is an random tour through the museum!'
	    	},
	    	{
	    		name: 'Purple Tour',
	    		tourClass: 'purpletour',
	    		textClass: 'purpletext',
	    		description: 'The purple tour is a scavenger hunt setup in the museum!'
	    	},
	    	{
	    		name: 'Black Tour',
	    		tourClass: 'blacktour',
	    		textClass: 'blacktext',
	    		description: 'The black tour is a tour that takes you to objects often overlooked in the museum!'
	    	}
	    ];
    $scope.tour = tours[index];
    
  });
