function login (){
    let name = prompt(" Ingresa tu nombre");
    let respuesta = "nuevo";
    let status;
    let nuevo = "yes";

if (pregunta === respuesta){
            porSi();
          } else{
status = prompt("Sos Nuevo usuario?");
}

function porSi(){
        document.getElementsByClassName("button_acceso")[0];
    }  

if (name != respuesta && status === nuevo){
        document.getElementsByClassName("button_acceso")[0].innerHTML = "Bienvenido/a " + question + ", porfavor cree una cuenta";
    }else if(name === respuesta){
        porSi(); 
    }else{
        document.getElementsByClassName("button_acceso")[0].innerHTML = "<span>Ocurrio un error intente poner su nombre nuevamente </span>";
    } 

}

function logout(){

    // window.location.reload(); only works with your environnement or website
  document.getElementsByClassName("button_acceso")[0].innerHTML = "";
}

