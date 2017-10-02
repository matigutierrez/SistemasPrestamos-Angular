(function () {
  /*establesco las rutas que ocupo con el modulo ngRoute
  cuando habró cierto link ej(/clientes) me redirecciona a cierto template y controlador
  con otherwise digo que principal sera la vista por defecto*/
  angular.module("app")
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
    .when("/clientes", {
      templateUrl : 'app/views/formcliente.html',
      controller : 'ClienteController'
    })
    .when("/prestamo/:nombre/:email/:telefono",{
      templateUrl : 'app/views/prestamocliente.html',
      controller : 'PrestamoController'
    })
    .when("/deudores",{
      templateUrl : 'app/views/deudasclientes.html',
      controller : 'DeudoresController'
    })
    .when("/principal",{
      templateUrl : 'app/views/principal.html',
      controller : 'InicioController'
    })
    .when("/pagar/:id",{
      templateUrl : 'app/views/pagoclientes.html',
      controller : 'PagosController'
    })
    .when("/listaclientes",{
      templateUrl : 'app/views/mostrarclientes.html',
      controller : 'MostrarClientesController'
    })
    .otherwise({
      redirectTo : '/principal'
    });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }]);
})();