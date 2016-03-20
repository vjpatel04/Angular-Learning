// Code goes here
(function() {
  var app = angular.module("toDo", [])
    .controller('mainCtrl', function($scope) {
      $scope.items = [{
        "taskname": "Buy Milk",
        "completed": true
      }, {
        "taskname": "Recharge phone",
        "completed": false
      }];
      $scope.addItem = function() {
        if ($scope.newItem.trim() == "") return;
        $scope.items.push({
          "taskname": $scope.newItem,
          "completed": false
        });
        $scope.newItem = "";
      }
    });
})();
