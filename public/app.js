angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('CollapseDemoCtrl', function ($scope) {
  $scope.isNavCollapsed = false;
  $scope.isCollapsed = true;
  $scope.isCollapsedHorizontal = true;
});