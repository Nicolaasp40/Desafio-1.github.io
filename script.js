var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar");
var botonCopiar = document.querySelector(".copiar");

var muneco = document.querySelector(".muneco");
var h3 = document.querySelector(".titulo");
var parrafo = document.querySelector(".parrafo");
var resultado = document.querySelector(".texto-resultado");


botonEncriptar.onclick = encriptar;

function encriptar() {
    ocultarAdelante();
    
    resultado.textContent = encriptartexto(recuperarTexto());

}

botonDesencriptar.onclick = desencriptar;

function desencriptar() {
    ocultarAdelante();
    
    resultado.textContent = desencriptartexto(recuperarTexto());
}






function recuperarTexto() {
    var area = document.querySelector(".area");
    return area.value;
}

function ocultarAdelante() {
    muneco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptartexto(mensaje) {
    var texto = mensaje;
    var textofinal = "";
    texto = texto.toLowerCase();

    for ( var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textofinal = textofinal + "ai"
        }
        else if (texto[i] == "e") {
            textofinal = textofinal + "enter"
        }
        else if (texto[i] == "i") {
            textofinal = textofinal + "imes"
        }
        else if (texto[i] == "o") {
            textofinal = textofinal + "over"
        }
        else if (texto[i] == "u") {
            textofinal = textofinal + "ufat"
        }
        else {
            textofinal = textofinal + texto[i]
        }
        
    }
    return textofinal;
}



function desencriptartexto(mensaje) {
    var texto = mensaje;
    var textofinal = "";

    for ( var i = 0; i < texto.length; i++) {
        if(texto[i] == "a") {
            textofinal = textofinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e") {
            textofinal = textofinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i") {
            textofinal = textofinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o") {
            textofinal = textofinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u") {
            textofinal = textofinal + "u"
            i = i+3;
        }
        else {
            textofinal = textofinal + texto[i]
        }
        
    }
    return textofinal;
}

botonCopiar.onclick = copiar;

function copiar() {
    var mensajeEncriptado = resultado.innerHTML;
    navigator.clipboard.writeText(mensajeEncriptado);

    Swal.fire(
        'Buen Trabajo!',
        'Tu mensaje ha sido copiado!',
        'success'
      )
}

