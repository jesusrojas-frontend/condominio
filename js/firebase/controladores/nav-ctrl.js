'use strict'

app.controller("NavCtrl",["$scope", "Auth","$window",
  function($scope,Auth, $window){
  $scope.cerrarSesion = function () {
    firebase.auth().signOut().then(function() {
        console.log("Sesión cerrada exitosamente!");
        $window.location.hash = '#/';
      }, function(error) {
        // An error happened.
      });
  }
  $scope.inicio = function (){
    var ubicacion = $window.location.hash;
    var resultado = null;
    if(ubicacion == "#/"){
      resultado = true;
    }
    return resultado;
  }
  $scope.sesionIniciada = function () {
    var user = firebase.auth().currentUser;
      var resultado = null;
      if (user) {
        resultado = true;
        user.providerData.forEach(function (profile) {
          $scope.nombre = profile.displayName;
          $scope.perfil = profile.photoURL;
        });
      } else {
      }
      return resultado;
  };
}]);
