var element = document.querySelector(".formulario");
element.addEventListener("submit", function(event) {
  event.preventDefault();
  validaFormulario();
});

function validaFormulario(){

  var name = document.getElementById("name");
  var lastname = document.getElementById("lastname");
  var dni = document.getElementById("dni");
  var birthdate = document.getElementById("birthdate");
  var celular = document.getElementById("celular");
  var fijo = document.getElementById("fijo");
  var password = document.getElementById("password");
  var password2 = document.getElementById("password-repet");

validaNombre(name);
validaApellido(lastname);

validaDni(dni);
validaCelular(celular);
validaFijo(fijo);
validaSoloContrasena(password);
validaContrasenas(password, password2);
}

  /*** Validando campo name***/
function validaNombre(name){
  if(name.value.length == 0){
    mostrar("Por favor ingrese su nombre",name);
    name.focus();
    return false;
  }
  for (var i = 1; i< name.value.length ; i++){
    if( !(/[A-ZÑÁÉÍÓÚa-zñáéíóú]/.test(name.value.split("")[i]))){
      mostrar("El nombre debe contener solamente letras (a-z), por favor intente de nuevo",name);
      name.focus();
      return false;
    }
  }
  if( !(/[A-ZÑÁÉÍÓÚ]/.test(name.value.split("")[0]))){
    mostrar("El nombre debe empezar en mayúscula, por favor intente de nuevo",name);
    name.focus();
    return false;
  }
  else {
    ocultar(name);
  }
}

  /*** Validando campo apellido***/
function validaApellido(lastname){
  if(lastname.value.length == 0){
    mostrar("Por favor ingrese su apellido",lastname);
    lastname.focus();
    return false;
  }
  for (var j = 1; j< lastname.value.length ; j++){
    if( !(/[A-ZÑÁÉÍÓÚa-zñáéíóú]/.test(lastname.value.split("")[j]))){
      mostrar("El apellido debe contener solamente letras (a-z), por favor intente de nuevo",lastname);
      lastname.focus();
      return false;
    }
  }
  if( !(/[A-ZÑÁÉÍÓÚ]/.test(lastname.value.split("")[0]))){
    mostrar("El apellido debe empezar en mayúscula, por favor intente de nuevo",lastname);
    lastname.focus();
    return false;
  } else {
    ocultar(lastname);
  }
}

/*** Validando campo dni ***/
function validaDni(dni){
  if(dni.value.length == 0){
    mostrar("Por favor ingrese su dni",dni);
    dni.focus();
    return false;
  }
  if (!(/[0-9]{8}/.test(dni.value))){
    mostrar("El dni debe tener 8 dígitos",dni);
    dni.focus();
    return false;
  }else {
    ocultar(dni);
  }
}

/*** Validando campo celular***/
function validaCelular(celular){
  if(celular.value.length == 0){
    mostrar("Por favor ingrese su celular",celular);
    celular.focus();
    return false;
  }
  if (!(/[0-9]{9}/.test(celular.value))){
    mostrar("El celular debe tener 9 dígitos",celular);
    celular.focus();
    return false;
  }else {
    ocultar(celular);
  }
}

/*** Validando campo fijo ***/
function validaFijo(fijo){
  if(fijo.value.length == 0){
    mostrar("Por favor ingrese su fijo",fijo);
    fijo.focus();
    return false;
  }
  if (!(/[0-9]{7}/.test(fijo.value))){
    mostrar("El fijo debe tener 7 dígitos",fijo);
    fijo.focus();
    return false;
  }else {
    ocultar(fijo);
  }
}

  /*** Validando campo password 1***/
function validaSoloContrasena(password){
  if(password.value.length == 0){
    mostrar("Por favor ingrese una contraseña",password);
    password.focus();
    return false;
  } else {
    ocultar(password);
  }
}

  /*** Validando ambos passwords ***/
function validaContrasenas(password, password2){
  if(password2.value.length == 0){
    mostrar("Por favor confirme la contraseña",password2);
    password2.focus();
    return false;
  }
  if (password.value !== password2.value) {
    mostrar("La contraseña debe coincidir",password2);
    password2.focus();
    return false;
  } else {
    ocultar(password2);
  }
}
  //  return alert (name.value +' '+ lastname.value + ', muchas gracias por registrarse');


function ocultar(input){
  var span = input.nextElementSibling;
  span.setAttribute("style","display:none");
}

function mostrar(alerta,input){
    var span = input.nextElementSibling;
    span.setAttribute("style","display:block");
    span.appendChild(document.createTextNode(alerta));
}
