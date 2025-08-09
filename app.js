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
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Adivinaste el numero secreto en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //cuando usuario no acepta
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento ('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarInput();
    }
    return;
}
//limpiar input
function limpiarInput(){
    let valorInput = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()* numeroMaximo)+1;

   //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
    }else {
        //si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
    //si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}

function reiniciarJuego() {
    //limpiar caja
    limpiarInput();
    //generar numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    //inicaiizar el numero de intentos
    //generar numero aleatorio
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();