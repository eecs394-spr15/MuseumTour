angular
  .module('splash',[])

  .controller('initViewDismissController', function($scope, supersonic) {
        $scope.dismissInit = function() {
            // supersonic.ui.initialView.dismiss();
            navigator.notification.alert("abc");
        }
  });
