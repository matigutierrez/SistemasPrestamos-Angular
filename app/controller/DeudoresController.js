(function () {
  //instancioamos el modulo y agregarmos al controlados mas modulos, localstorage y scope
  angular.module("app")
  .controller('DeudoresController',['$scope','$localStorage', function ($scope, $localStorage) {
    //recibimos los datos del capital actual de localstorage
    $scope.monto = $localStorage.cantidad;

    //decimos si hay datos en localstorage se los pasamos a user, sino lo dejamos con un arreglo
    $scope.deudores = $localStorage.deudas || [];


  }]);
})();

