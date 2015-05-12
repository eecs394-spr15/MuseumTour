angular
  .module('settings', ['common'])
  .controller('SettingsController', function($scope, $sce, DataService, constants) {

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

  .directive('compileTemplate', function($compile, $parse, DataService) {
    return {
        restrict: 'A',
        link: function($scope, element, attr) {
            var parse = $parse(attr.ngBindHtml);
            function value() { return (parse($scope) || '').toString(); }

            $scope.$watch(value, function() {
                DataService.saveConfig();
                $compile(element, null, -9999)($scope);
            });
        }
    };
});
