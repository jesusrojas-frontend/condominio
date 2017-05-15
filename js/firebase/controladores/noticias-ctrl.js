'use strict'

app.controller("NoticiasCtrl",["$scope", "Auth","$window","$firebaseObject","$firebaseArray","$routeParams",
  function($scope,Auth, $window,$firebaseObject,$firebaseArray,$routeParams){
    var noticias = firebase.database().ref().child("noticias");
    var user = firebase.auth().currentUser;
    var noticiasId = $routeParams.noticiasId;
    $scope.noticias = $firebaseArray(noticias.child("noticia"));
    if(noticiasId){
      $scope.noticiaElegida = obtenerNoticia(noticiasId);
      console.log(noticiasId);
      var noticiaElegidaArray = $firebaseArray(noticias.child("noticia").child(noticiasId).child("contenido").child("chat"));
      chat(noticiaElegidaArray);
    }
    function obtenerNoticia(noticiasId) {
      var noticia = noticias.child("noticia");
      return $firebaseObject(noticia.child(noticiasId).child('contenido'));
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
    function chat(array) {
      var referencia = array;
      var user = firebase.auth().currentUser;
      if(user){
        var usuario = user.displayName;
        var foto = user.photoURL;
      }
      $scope.user = usuario;
      $scope.foto = foto;
      $scope.messages = referencia;

      $scope.addMessage = function() {
        // $add on a synchronized array is like Array.push() except it saves to the database!
        $scope.messages.$add({
          from: $scope.user,
          content: $scope.message,
          foto: $scope.foto,
          timestamp: firebase.database.ServerValue.TIMESTAMP
        });

        $scope.message = "";
      };

      // if the messages are empty, add something for fun!
      $scope.messages.$loaded(function() {
        if ($scope.messages.length === 0) {
          $scope.messages.$add({
            from: "Alfredo Rojas",
            content: "Dime que opinas de la noticia",
            foto: "https://www.gravatar.com/avatar/4a173bccee235e94b623d6abd2661076.jpg?d=identicon",
            timestamp: firebase.database.ServerValue.TIMESTAMP
          });
        }
      });

    }
  }
]);
