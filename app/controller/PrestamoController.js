(function () {
  angular.module("app")
  .controller('PrestamoController',['$scope','$localStorage','$routeParams', function ($scope, $localStorage, $routeParams) {

    //recibimos el capital actual de localstorage
    $scope.monto = $localStorage.cantidad;

    //estructura de las cuotas
    $scope.ncuotas = [{
         id: 1,
         n_cuotas: 1,
         interes: 0
     },{
         id: 2,
         n_cuotas: 3,
         interes: 6
     },{
         id: 3,
         n_cuotas: 6,
         interes: 15
     },{
         id: 4,
         n_cuotas: 9,
         interes: 25
     }];

   //registramos las cuotas en localstorage
   $localStorage.cuotas = $scope.ncuotas;

   //modelo para guardar los datos de nuestro deudores
   $scope.deudaModel = {
       cliente: {
               nombre: '',
               email: '',
               telefono: ''
           },
       cuota_id: '',
       cuotas: [],
       prestamo: '',
       total: ''
   };
   //recibimos los parametros por la url
   var nom = $routeParams.nombre;
   var tel = $routeParams.email;
   var phon = $routeParams.telefono;
    $scope.name =  nom;
    $scope.eml = tel;
    $scope.phone = phon;

    //creo el arreglo para los prestamos
    $scope.prestamos = $localStorage.deudas || [];
    
    /*le paso los datos al arreglo y los paso al localstorage
    calculos los totales con respecto a los intereses correspondientes
    */
    $scope.deudas = function (model) {
      
      var tot = parseInt(model.prestamo) + (((model.prestamo/$scope.ncuotas[parseInt(model.cuota_id) - 1].n_cuotas) * $scope.ncuotas[model.cuota_id-1].interes)/100);

      var cuot = (tot/$scope.ncuotas[parseInt(model.cuota_id) - 1].n_cuotas);

      var cu = [];

      for (var i = 0; i < $scope.ncuotas[parseInt(model.cuota_id) - 1].n_cuotas; i++) {
        cu.push({
          valor: cuot,
          pagado: false
        });
      }

      $scope.prestamos.push({
              cliente : {
                nombre: nom, 
                email: tel, 
                telefono:phon
              }, 
              cuota_id: model.cuota_id, 
              cuotas: cu,
              prestamos: model.prestamo, 
              total: parseInt(tot) 
          });

      console.log($scope.prestamos);      

      $localStorage.deudas = $scope.prestamos;

      var cant = parseInt($scope.monto - model.prestamo);
      
      $scope.monto = cant;

      $localStorage.cantidad = $scope.monto;
      
      tot = 0;
      model.nombre = '';
      model.email = '';
      model.telefono = '';
      model.cuota_id = '';
      model.prestamo = '';

    }
  }]);
})();
