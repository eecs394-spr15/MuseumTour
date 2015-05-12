var app = angular.module('common');

app.factory('LocalStorageService', function($http, $window){

    var service = {};

    service.getData = function(url, key) {
        var jsonData = angular.fromJson($window.localStorage[key]);
        if (jsonData == undefined) {
            $http( {
                method: 'GET',
                url: url
            })
            .success(function(data,status,header,config) {
                console.log("Tour json: " + data)
                steroids.logger.log(data)
                $window.localStorage.setItem(key, angular.toJson(data));
                jsonData = data;
            })  
        }
        return jsonData;
    };
    

    service.initTours = function() {
        return service.getData("https://api.myjson.com/bins/1gybl", "tour-data");
    };

    service.initConfig = function(){
        return service.getData("https://api.myjson.com/bins/4mjtt", "config");
    };

    service.initTemplates = function(){
        return service.getData("https://api.myjson.com/bins/439dt", "templates");
    };

    return service;
});

app.factory('DataService', function(LocalStorageService){


    var dataService = {};

    var tours = LocalStorageService.initTours();
    var config = LocalStorageService.initConfig();
    var templates = LocalStorageService.initTemplates();

    dataService.getTemplate = function(ui_component){
        return templates[ui_component];
    };

    dataService.getConfig = function(){
        return config;
    };

    dataService.getTourByName = function(tourName){
        for (var i = 0; i < tours.length; i++) {
        	if (tours[i].name === tourName)
        		return tours[i];
        }
    };

    dataService.getTourByIndex = function(index) {
    	return tours[index];
    };

    dataService.getAllTours = function(){
        return tours;
    };

    return dataService;
});


