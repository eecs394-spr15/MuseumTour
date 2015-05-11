angular
  .module('settings')
  .controller('SettingsController', function($scope, $sce) {
    $scope.test = "testing";
    $scope.config = [
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

    $scope.classes = {
        'toggle': ["item", "item-toggle"],
        'select': ["item", "item-input", "item-select"]
    };

    $scope.to_trusted = function(html_code) {
        return $sce.trustAsHtml(html_code);
    };

    $scope.templates = {
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
