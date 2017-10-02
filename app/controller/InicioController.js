(function () {
  angular.module("app")
  .controller('InicioController',['$scope','$localStorage', function ($scope, $localStorage) {

    //le damos el valor inicial al capital y lo registramos al localstorage
    $scope.monto = $localStorage.cantidad || 15000000;

    if ($scope.monto == 15000000) {
      $localStorage.cantidad = 15000000;
    }

  }]);
})();