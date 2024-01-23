//Variable de ambito o alcance global
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo= 10;
//Funcion generica para recibir parametros del HTML
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//declararla función para el boton de intentar
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número :3, en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        //El usuaro no acerto
        limpiarCaja();
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }
        else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos ++;
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   //si ya sorteamos todos los numeros
   if(listaNumerosSorteados.length == numeroMaximo){
       asignarTextoElemento('p','Ya se sortearon todos los números posibles'); 
   }else{
    //si el número generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }
    else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
   }
   
}

function codicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secrero!');
    asignarTextoElemento('p', `>Indica un número del 1 al ${numeroMaximo}<`);
    //Generar nuevo numero
    numeroSecreto = generarNumeroSecreto();
    //Inicializar el número de intentos
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja de texto
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    codicionesIniciales();    
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');    
}

codicionesIniciales();

// let resultado = promedio(10,7,9);
// console.log(resultado);

// function saludo(){
//     alert('Hola mundo!');
// }

// function nombre(name){
//     alert(`¡Hola, ${name}`);
// }

// function dobleNumero(number){
//     alert(number*2);
// }

// function promedio(primero, segundo, tercero){
//     return (primero+segundo+tercero)/3;
// }

// function numeroMayor(primero, segundo){
//     if(primero > segundo){
//         alert(`El primer numero ${primero} es mayor que el segundo numero ${segundo}`);
//     }
//     else{
//         alert(`El segundo numero ${segundo} es mayor que el primer numero ${primero}`);
//     }
// }

// saludo();
// nombre('Noemi');
// dobleNumero(5);
// numeroMayor(4,9);



