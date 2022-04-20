
// Funcion para ocultar y mostrar dandole al boton
function divComentarios(){ 
    var caja = document.getElementById("caja");
    if (caja.style.display === "none") {
        caja.style.display = "block";
    } else {
        caja.style.display = "none";
    }
}

// lista de palabras mal sonantes que estaran censuradas

bad_words = ["mierda", "imbecil", "gilipollez", "cabron","hijoputa", "idiota", "subnormal","marica", "joder","puta"];


function validarFormulario(){
    var expresion;
    var error_email = false;
    var error_nombre = false;
    var error_texto = false;

    // obtenemos los datos
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var texto = document.getElementById('comentario').value;
    

    if(nombre == ""){
        error_nombre = true;
    }else{
        // comprobacion de nombre valido
        expresion = /^[a-zA-Z\s]+$/;
        if(!expresion.test(nombre)){
            error_nombre = true;
        }
    }

    if(email == ""){
        error_email = true;
    }else{
        // comprobacion email valido
        expresion = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;         
        if (!expresion.test(email)){
            error_email = true;
        }
    }

    // El comentario no puede estar vacío
    if(texto == ""){
        error_texto = true;
    }else{
        revisarComentario();
    }

    // Comprueba el tipo de error y saca el mensaje
    if(error_nombre){
        alert("Ha introducido mal el nombre");
    }else if(error_email){
        alert("Ha introducido mal el email");
    }else if(error_texto){
        alert("Debe introducir un comentario sobre el libro");
    }else{ // si no hay ningun error, se añade el comentario
        crearComentario();
    }


}

// funcion que busca en el comentario las palabras del array y las sustituye por dos asteriscos
function revisarComentario(){
    var comentario = document.getElementById("comentario");
    for (i = 0; i < bad_words.length ; i++) {
        comentario.value = comentario.value.replace(bad_words[i], "*");
    }
}



function crearComentario(){
    // obtenemos los datos
    var text_node;
    var nombre = document.getElementById('nombre').value;
    var texto = document.getElementById('comentario').value;
    var hoy = new Date();
    var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
    var hora = hoy.getHours() + ':' + hoy.getMinutes();

    // creamos los elementos
    var contenedor = document.createElement("div");
    var nombrel = document.createElement("h2");
    var contenedor2 = document.createElement("div");
    var fechal = document.createElement("p");
    var horal = document.createElement("p");
    var comentario = document.createElement("p");

    // añadimos los datos a los elementos
    contenedor.setAttribute("class", "cajacom");
    contenedor2.setAttribute("class", "fyh");
    nombrel.textContent = nombre;
    fechal.textContent = fecha;
    horal.textContent = hora;
    comentario.textContent = texto;
    
    // Añado los elementos al contenedor principal
    contenedor.appendChild(nombrel);
    contenedor2.appendChild(fechal);
    contenedor2.appendChild(horal);
    contenedor.appendChild(contenedor2);
    contenedor.appendChild(comentario);

    var desplegable  = document.getElementById('caja');
    desplegable.appendChild(contenedor);   
}
