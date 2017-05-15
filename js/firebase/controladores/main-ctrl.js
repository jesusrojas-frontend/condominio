'use strict'

app.controller("MainCtrl",["$scope", "Auth","$window","$firebaseObject","$firebaseArray",
  function($scope,Auth, $window,$firebaseObject,$firebaseArray){
    var ref = firebase.database().ref().child("usuarios");
    var user = firebase.auth().currentUser;

    if(user){
      if($window.location.hash == '#!/'){
        $window.location.hash = "!/inicio";
      }
      if($window.location.hash == '#!/#%2F'){
        $window.location.hash = "!/inicio";
      }
    }
  }
]);
