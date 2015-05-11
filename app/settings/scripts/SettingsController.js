angular
  .module('settings')
  .controller('SettingsController', function($scope, $sce, DataService) {

    $scope.getConfig = function(){
        return DataService.getConfig();
    };

    $scope.classes = {
        'toggle': ["item", "item-toggle"],
        'select': ["item", "item-input", "item-select"]
    };

    $scope.to_trusted = function(html_code) {
        return $sce.trustAsHtml(html_code);
    };

    $scope.getTemplate = function(ui_component){
        return DataService.getTemplate(ui_component);
    };
  })

  .directive('compileTemplate', ["$compile", "$parse", function($compile, $parse) {
    return {
        restrict: 'A',
        link: function($scope, element, attr) {
            var parse = $parse(attr.ngBindHtml);
            function value() { return (parse($scope) || '').toString(); }

            $scope.$watch(value, function() {
                $compile(element, null, -9999)($scope);
            });
        }
    };
}]);
