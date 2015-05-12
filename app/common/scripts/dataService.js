var app = angular.module('common');

app.factory('LocalStorageService', function($http, $window){

    var service = {};

    service.initTours = function() {
        return service.getData("https://api.myjson.com/bins/4c1qp", "tour-data");
    };

    service.getData = function(url, key) {
        var jsonData = angular.fromJson($window.localStorage[key]);
        if (jsonData == undefined) {
            $http( {
                method: 'GET',
                url: url
            })
            .success(function(data,status,header,config) {
                console.log("Tour json: " + data);
                steroids.logger.log(data);
                $window.localStorage.setItem("tour-data", angular.toJson(data));
                jsonData = angular.fromJson($window.localStorage["tour-data"]);
            })  
        }
        steroids.logger.log("JSON DATA: " + angular.toJson(jsonData));
        return jsonData;
    };

    return service;
});

app.factory('DataService', function($http, LocalStorageService){


    var dataService = {};

    var tours = LocalStorageService.initTours();

    // var tours = [
    // 	{
    // 		name: 'Red Tour',
    // 		tourClass: 'redtour',
    // 		textClass: 'redtext',
    // 		description: 'The red tour is an ordered tour through the museum!'
    // 	},
    // 	{
    // 		name: 'Blue Tour',
    // 		tourClass: 'bluetour',
    // 		textClass: 'bluetext',
    // 		description: 'The blue tour is an random tour through the museum!'
    // 	},
    // 	{
    // 		name: 'Purple Tour',
    // 		tourClass: 'purpletour',
    // 		textClass: 'purpletext',
    // 		description: 'The purple tour is a scavenger hunt setup in the museum!'
    // 	},
    // 	{
    // 		name: 'Black Tour',
    // 		tourClass: 'blacktour',
    // 		textClass: 'blacktext',
    // 		description: 'The black tour is a tour that takes you to objects often overlooked in the museum!'
    // 	}
    // ];

    var config = [
    {
        type: "toggle",
        label: "First time visitor",
        value: false
    },
    {
        type: "toggle",
        label: "Museum member",
        value: true
    },
    {
        type: "select",
        label: "Age range",
        options: [
            "< 18",
            "18 - 64",
            "> 64"
        ],
        value: "< 18"
    }
    ];

    var templates = {
        toggle:
        "{{setting.label}}" +
        "<label class='toggle toggle-royal'>" +
        "<input type='checkbox' ng-model='setting.value'>" +
        "<div class='track'>" +
        "   <div class='handle'></div>" +
        " </div>" +
        "</label>",
        checkbox:
        "{{setting.label}}" +
        "<label class='checkbox'>"+
        " <input type='checkbox' ng-model='setting.value'>"+
        "</label>",
        select:
        "<div class='input-label'>"+
        "  {{setting.label}}"+
        "</div>"+
        "<select ng-options='o for o in setting.options' ng-model='setting.value'></select>"
    };

    dataService.getTemplate = function(ui_component){
        return templates[ui_component];
    };

    dataService.getConfig = function(){
        return config;
    }

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


