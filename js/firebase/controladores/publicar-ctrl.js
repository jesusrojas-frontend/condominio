'use strict'

app.controller("PublicarCtrl", function ($scope,$firebaseArray, $routeParams, $firebaseObject,$window,$sce) {
  var user = firebase.auth().currentUser;
  var noticias = firebase.database().ref().child("noticias");
  var cuentas = firebase.database().ref().child("cuentas");
  var inmueble = firebase.database().ref().child("inmueble");
  var cuotaEspecial = firebase.database().ref().child("cuotaEspecial");
  var ingrersosMes = firebase.database().ref().child("ingrersosMes");

  var ubicacion = "#!/publicar";
  $scope.publicarNoticia = function (noticia) {
    var user = firebase.auth().currentUser;
    noticia.fecha = firebase.database.ServerValue.TIMESTAMP;
    noticia.gravatar = user.photoURL;
    noticia.nombre = user.displayName;
    var titulosin = quitarEspacios(noticia.titulo.toLowerCase())
    noticia.titulosin = titulosin;
    noticias.child('noticia').child(titulosin).set({
      contenido: noticia
    });
    alert("Noticia publicado exitosamente\n");
    $window.location.hash = ubicacion;
    console.log(noticia);
  }
  //- Casa	Nombre	Deuda	Interes	Mes	Total
  $scope.cuentaPropietario = function (cuenta) {
    cuenta.total = cuenta.mes + cuenta.interes + cuenta.deuda;
    cuentas.child(cuenta.casa).set({
      contenido: cuenta
    });
   alert("Cuenta registrada exitosamente");
  }
  $scope.cuentaInmueble = function (inmuelbes) {
    //inmueble.total = inmueble.url
    inmueble.set({
      contenido: inmuelbes
    })
    alert("Cuenta inmueble registrada exitosamente");
  }
  $scope.cuotaEspecial = function (cuota) {
    cuotaEspecial.set({
      contenido: cuota
    });
   alert("Cuota de especial registrada exitosamente");
  }
  $scope.ingrersosMes = function (ingresos) {
    ingrersosMes.set({
      contenido: ingresos
    });
   alert("Ingresos de inmueble registrada exitosamente");
  }

  function quitarEspacios(palabra) {
    palabra = palabra.toLowerCase();
    var espacio = new Array(palabra.length);
    var p;
    for(p in palabra){
      if (palabra[p] == palabra[p]) {
        espacio[p] = palabra[p];
      }
    }
    var i = 0;
    for(i; i<espacio.length;i++){
      if(espacio[i] == " "){
        espacio[i] = "-";
      }
    }
    var junto ="";
    for(var i = 0;i<espacio.length;i++){
      junto = junto + espacio[i];
    }
    return junto;
  }
});
