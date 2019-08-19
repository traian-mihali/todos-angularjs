const app = angular.module("TODOS", ["ng"]);

function AppController($scope) {
  $scope.array = [];

  $scope.insert = event => {
    $scope.code = event.keyCode;
    if (event.keyCode === 13) {
      let value = event.target.value;

      value.trim() && $scope.array.unshift(value);
      $scope.input = "";
    }
  };
}

app.controller("AppController", AppController);
