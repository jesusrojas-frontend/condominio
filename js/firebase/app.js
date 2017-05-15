'use strict'

var app = angular.module("CondominioMargarita", [
  'ngAnimate',
  'ngResource',
  'ngRoute',
  'firebase'
])

.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
      templateUrl: 'vistas/main.html',
      controller: 'MainCtrl'
    })
    .when('/noticias',{
      templateUrl: 'vistas/proyectos.html',
      controller: 'NoticiasCtrl'
    })
    .when('/noticias/:noticiasId',{
      templateUrl: 'vistas/noticia-item.html',
      controller: 'NoticiasCtrl'
    })
    .when('/inicio',{
      templateUrl: 'vistas/inicio.html',
      controller: 'InicioCtrl'
    })
    .when('/registrar',{
      templateUrl: 'vistas/registrar.html',
      controller: 'AutenCtrl'
    })
    .when('/publicar',{
      templateUrl: 'vistas/publicar.html',
      controller: 'PublicarCtrl'
    })
    .when('/presidente',{
      templateUrl: 'vistas/presidente.html',
      controller: 'PublicarCtrl'
    })
    .otherwise({
			redirectTo: '/'
		});

});
