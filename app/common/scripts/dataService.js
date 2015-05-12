var app = angular.module('common');

app.factory('LocalStorageService', function($q, $http, $window){

    var service = {};

    service.initTours = function() {
        return service.getData("https://api.myjson.com/bins/4zmi9", "tour-data");
    };

    service.getData = function(url, key) {
        var deferred = $q.defer();
        var jsonData = angular.fromJson($window.localStorage[key]);
        // var jsonData = undefined;
        //if (jsonData === undefined) {
            $http( {
                method: 'GET',
                url: url
            })
            .success(function(data,status,header,config) {
                steroids.logger.log(data)
                $window.localStorage.setItem(key, angular.toJson(data));
                deferred.resolve(data);
            }).
            error(function(data, status, headers, config) {
                 deferred.reject(jsonData);
            });
            return deferred.promise;
        /*} else {
            return jsonData;
        }*/
    };

    service.initConfig = function(){
        return service.getData("https://api.myjson.com/bins/4mjtt", "config");
    };

    service.initTemplates = function(){
        return service.getData("https://api.myjson.com/bins/439dt", "templates");
    };

    service.saveData = function(key, data){
        $window.localStorage.setItem(key, angular.toJson(data));
    };

    return service;
});

app.factory('DataService', function(LocalStorageService){

    var dataService = {};

    var tours = [];
    var config = [];
    var templates = {};
    LocalStorageService.initTours().then(function(val){
        tours = val;
    });
    LocalStorageService.initConfig().then(function(val){
        config = val;
    });
    LocalStorageService.initTemplates().then(function(val){
        templates = val;
    });
    

    dataService.getTemplate = function(ui_component){
        return templates[ui_component];
    };

    dataService.getConfig = function(){
        return config;
    };

    dataService.saveConfig = function(){
        LocalStorageService.saveData('config', config);
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


