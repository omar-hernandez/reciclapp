var correo = "";

function loadPage(href){
    window.location = href;
    return false;
}

function validar() {

    var usuario= "";

    correo = document.getElementById("correo_val").value;

    console.log(correo);

    

    if(correo=="omar@gmail.com"){
        console.log(usuario);
        loadPage('mapaT.html');
    }
    else {
        loadPage('solicitud.html');     
    }


    document.getElementById("result").innerHTML=usuario
    

}