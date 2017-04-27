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

  /*** Validando campo name***/


    if(name.value.length == 0){
        alert ('Por favor ingrese su nombre');
        name.focus();
        return false;
    }

    for (var i = 1; i< name.value.length ; i++){
      if( !(/[A-ZÑÁÉÍÓÚa-zñáéíóú]/.test(name.value.split("")[i]))){
        alert ('El nombre debe contener solamente letras (a-z), por favor intente de nuevo');
        name.focus();
        return false;
      } else if( !(/[A-ZÑÁÉÍÓÚ]/.test(name.value.split("")[0]))){
        alert ('El nombre debe empezar en mayúscula, por favor intente de nuevo');
        name.focus();
        return false;
      }
    }



  /*** Validando campo apellido***/
    if(lastname.value.length == 0){
        alert ('Por favor ingrese su apellido');
        lastname.focus();
        return false;
    }

    for (var j = 1; j< lastname.value.length ; j++){
      if( !(/[A-ZÑÁÉÍÓÚa-zñáéíóú]/.test(lastname.value.split("")[j]))){
        alert ('El apellido debe contener solamente letras (a-z), por favor intente de nuevo');
        lastname.focus();
        return false;
      } else if( !(/[A-ZÑÁÉÍÓÚ]/.test(lastname.value.split("")[0]))){
        alert ('El apellido debe empezar en mayúscula, por favor intente de nuevo');
        lastname.focus();
        return false;
      }
    }

  /*** Validando campo email***/
    if(email.value.length == 0){
      alert ('Por favor ingrese su correo electrónico');
      email.focus();
      return false;
    } else if (!(/[\w-\.]{3,}@[\w-]{3,}\.[A-Za-z]{2,3}/.test(email.value))){
      alert ('El correo electrónico debe tener la siguiente forma email@dominio.com, por favor intente de nuevo');
      email.focus();
      return false;
    }

  /*** Validando campo password***/
    if(password.value.length == 0){
      alert ('Por favor ingrese una contraseña');
      password.focus();
      return false;
    } else if (password.value.length < 6) {
      alert ('La contraseña debe tener mínimo 6 caracteres');
      password.focus();
      return false;
    } else if ((password.value == "password") || (password.value == "123456") || (password.value =="098754")){
      alert ('La contraseña no es segura, por favor intente de nuevo');
      password.focus();
      return false;
    }

  /*** Validando campo select/elegir***/
    if(elegir.value == 0){
      alert ('Por favor, seleccione su bicicleta');
      elegir.focus();
      return false;
    }

    return alert (name.value +' '+ lastname.value + ', muchas gracias por registrarse');


}


function ocultar(input){
  var span= input.nextElementSibling;
  span.setAttribute("style","display:none");
}

function mostrar(alerta,input){
    var span= input.nextElementSibling;
    span.setAttribute("style","display:block");
    span.appendChild(document.createTextNode(alerta));
}
