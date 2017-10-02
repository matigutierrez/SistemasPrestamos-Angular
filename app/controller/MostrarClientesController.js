(function () {
  //instancioamos el modulo y agregarmos al controlados mas modulos, localstorage y scope
  angular.module("app")
  .controller('MostrarClientesController',['$scope','$localStorage', function ($scope, $localStorage) {
    
    //recibimos el capital_actual de localstorage
    $scope.monto = $localStorage.cantidad;

    //decimos si hay datos en localstorage se los pasamos a user, sino lo dejamos con un arreglo
    $scope.users = $localStorage.users || [];

    //eliminamos la fila y actualizamos el localstorage
    $scope.eliminar = function ($index) {
      $scope.users.splice($index,1);
      $localStorage.users = $scope.users;
    } 

  }]);
})();
