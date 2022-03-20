
function divComentarios(){ 
    var caja = document.getElementById("caja");
    if (caja.style.display === "none") {
        caja.style.display = "block";
    } else {
        caja.style.display = "none";
    }

}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
    document.getElementById("comentario").addEventListener("change", revisarComentario);
});

bad_words = ["tonto", "imbecil", "gilipollas", "cabron","hijoputa", "idiota", "subnormal","marica", "joder","puta"];


function validarFormulario(){
    var expresion;
    var todo_correcto = true;
    var error_email = false;
    var error_nombre = false;
    var error_texto = false;

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var texto = document.getElementById('comentario').value;
    

    if(nombre == ""){
        todo_correcto = false;
        error_nombre = true;
    }else{
        expresion = /^[a-zA-Z\s]+$/;
        if(!expresion.test(nombre)){
            todo_correcto = false;
            error_nombre = true;
        }
    }

    if(email == ""){
        todo_correcto = false;
        error_email = true;
    }else{
        expresion = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;         
        if (!expresion.test(email)){
            todo_correcto = false;
            error_email = true;
        }
    }

    if(texto == ""){
        todo_correcto = false;
        error_texto = true;
    }

    if(!todo_correcto){
        if(error_nombre){
            alert("Ha introducido mal el nombre");
        }else if(error_email){
            alert("Ha introducido mal el email");
        }else if(error_texto){
            alert("Debe introducir un comentario sobre el libro");
        }
    }

}

function revisarComentario(){
    var comentario = document.getElementById("comentario");
    for (i = 0; i < bad_words.length ; i++) {
        comentario.value = comentario.value.replace(bad_words[i], "*");
    }
}