const app = angular.module("TODOS", ["ngAnimate"]);

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

  $scope.remove = item => {
    let index = $scope.array.indexOf(item);
    $scope.array.splice(index, 1);
  };
}

app.controller("AppController", AppController);
