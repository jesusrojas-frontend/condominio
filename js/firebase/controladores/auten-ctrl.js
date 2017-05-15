app.controller("AutenCtrl", function($scope, Auth, $window){
//A network error (such as timeout, interrupted connection or unreachable host) has occurred.
$scope.ver = "none";
$scope.verError = "none";
  $scope.sesion = function (usuario) { //funsion para uniciar sesion
    Auth.sesion(usuario).then(function (){//se llama a funsion Auth.sesion que esta en el archivo auten-servicio.js
      $window.location.hash = '/';

      var user = firebase.auth().currentUser;
      user.providerData.forEach(function (profile) {
          if(profile.displayName == null){
            console.log("Se va a iniciar sesion");
            Auth.crearPerfil(usuario);
            firebase.auth().signOut().then(function() {
              console.log("Sesión cerrada exitosamente!");
              $window.location.hash = '/ingresar';
              console.log(user);
            }, function(error) {
              // An error happened.
            });
            //$scope.sesion(usuario);
          }
          else{
            $scope.alerta = "Sesion iniciada exitosamente!"; //Le indica al usuario que inicio sesion
            $scope.ver = "block";
            $scope.verError="none"
          }
        });
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          $scope.error = 'Clave incorrecta.';
          $scope.verError = "block";
          $scope.ver = "none";
        } else {
          var tiempoFallido = "A network error (such as timeout, interrupted connection or unreachable host) has occurred.";
          var noEmail = "Cannot read property 'email' of undefined";
          if(errorMessage == tiempoFallido){
            $scope.error = "Error de coneccion. Intente otra vez";
            $scope.verError = "block";
            $scope.ver = "none";
          }
          else if (errorMessage == noEmail) {
            console.log(errorMessage);
          }
          else{
            alert(errorMessage);
          }
        }
        console.log(error);
      });
  }

  $scope.registro = function (usuario) {
    $scope.error = null;
    Auth.registro(usuario).then(function () {
      alert("Registrado exitosamente!");
      $scope.sesion(usuario);
    })
    .catch(function(error) {
      var coneccionFallida = "A network error (such as timeout, interrupted connection or unreachable host) has occurred."
      if(error == coneccionFallida){
        alert("Error de coneccion. Intente otra vez");
      }
      else{
        $scope.error = error;

      }
    });
  }

});
