angular.module(shared, [])

.factory('dataService'){
    var service = {};
    var tours = [];

    service.getTour = function(tour_name){
        return tours[0];
    };

    service.getTours = function(){
        return tours;
    };

    return service;
};