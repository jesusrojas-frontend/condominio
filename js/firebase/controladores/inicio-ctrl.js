'use strict'

app.controller("InicioCtrl",["$scope", "Auth","$window","$firebaseObject","$firebaseArray",
  function($scope,Auth, $window,$firebaseObject,$firebaseArray){
    var cuentas = firebase.database().ref().child("cuentas");
    var inmueble = firebase.database().ref().child("inmueble");
    var cuotaEspecial = firebase.database().ref().child("cuotaEspecial");
    var ingrersosMes = firebase.database().ref().child("ingrersosMes");
    var user = firebase.auth().currentUser;

    if(!user){
      $window.location.hash = "/";
    }
    $scope.cuentas = $firebaseArray(cuentas)
    inmueble = $firebaseObject(inmueble);
    inmueble.$loaded().then(function() {
        angular.forEach(inmueble, function(value, key) {
        	$scope.inmuelbe = inmueble
        })
    })
    cuotaEspecial = $firebaseObject(cuotaEspecial);
    cuotaEspecial.$loaded().then(function() {
        angular.forEach(cuotaEspecial, function(value, key) {
        	$scope.cuotaEspecial = cuotaEspecial
        })
    })
    ingrersosMes = $firebaseObject(ingrersosMes);
    ingrersosMes.$loaded().then(function() {
        angular.forEach(ingrersosMes, function(value, key) {
        	$scope.ingrersosMes = ingrersosMes
        })
    })
  }
]);
