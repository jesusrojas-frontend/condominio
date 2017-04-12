'use strict'

var app = angular.module("AprendeFacil", [
  'ngAnimate',
  'ngResource',
  'ngRoute',
  'firebase'
])

.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
      templateUrl: 'vistas/main.html'
    })
});
