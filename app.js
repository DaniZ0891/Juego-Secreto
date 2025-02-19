let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`¡Felicidades! ¡Adivinaste el número secreto en ${intentos} ${intentos === 1 ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else {
        //si el usuario no acierta

        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","¡Fallaste! Intenta con un número menor");
        }
        else {
            asignarTextoElemento("p","¡Fallaste! Intenta con un número mayor");
        }
        intentos++;
        limpiarCaja();
    }
    ;
    return;
}

function limpiarCaja () {
document.querySelector("#valorUsuario").value = "";

}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  
    //Si ya sorteamos todos los números posibles, reiniciamos la lista
    if (listaNumerosSorteados.length === numeroMaximo) {
        listaNumerosSorteados = [];
        asignarTextoElemento ("p","Ya se sortearon todos los números posibles");
        } else {
        
        //si el numero generado está en la lista escogemos otro número, de lo contrario seguimos jugando

        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento("p",`Adivina el número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
//limpiar caja
limpiarCaja();
// reiniciar mensajes de pantalla principal
condicionesIniciales();
// Desahabilitar el boton de nuevo juego
document.querySelector("#reiniciar").setAttribute("disabled", "true");

}

condicionesIniciales();