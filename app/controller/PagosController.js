(function () {
  angular.module("app")
  .controller('PagosController',['$scope','$localStorage','$routeParams', function ($scope, $localStorage, $routeParams) {

    //recibimos el capital actual de localstorage
    $scope.monto = $localStorage.cantidad;

   //recibimos los parametros por la url
   var index = $routeParams.id;

    //creo el arreglo para los prestamos
    var prestamos = $localStorage.deudas || [];

    //acceso al arreglo de cuotas
    $scope.pago = prestamos[index].cuotas;

    $scope.nom = prestamos[index].cliente.nombre;
    $scope.em = prestamos[index].cliente.email;
    $scope.phon = prestamos[index].cliente.telefono;

    //realizo y registro el pago de las cuotas
    $scope.pagos = function($index){

      if ($index == 0) {
        $scope.pago[$index].pagado = true;

        prestamos[index].cuotas[$index].pagado = true;

        $scope.monto = parseInt($scope.monto + prestamos[index].cuotas[$index].valor); 
      
        $localStorage.cantidad = parseInt($scope.monto);    

        $localStorage.deudas = prestamos;
      }
      if($index > 0){
        if(prestamos[index].cuotas[$index-1].pagado == true){
          $scope.pago[$index].pagado = true;

          prestamos[index].cuotas[$index].pagado = true;

          $scope.monto = parseInt($scope.monto + prestamos[index].cuotas[$index].valor); 
      
          $localStorage.cantidad = parseInt($scope.monto);    

          $localStorage.deudas = prestamos;
        }else{
          alert("Las cuotas deben ser pagadas en orden");
        }
      }
    }
    
  }]);
})();