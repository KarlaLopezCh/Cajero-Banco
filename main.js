

let pantallaActivaId = 'pantallaUno'; 


let saldoActual = 1000; 
const CLAVE_SECRETA = "1234";


function irA(idDeDestino) {
    const pantallaAnterior = document.getElementById(pantallaActivaId); 
    if (pantallaAnterior) {
        pantallaAnterior.style.display = 'none';
    }

    const pantallaNueva = document.getElementById(idDeDestino); 
    if (pantallaNueva) {
        pantallaNueva.style.display = 'block'; 
    }


    if (idDeDestino === 'pantallaCuatro') {
        actualizarSaldoMostrar();
    }
    

    if (idDeDestino === 'pantallaCinco') {
        const inputElement = document.getElementById('ingresarMonto');
        if (inputElement) inputElement.value = '';
    }

    if (idDeDestino === 'pantallaSiete') {
        const inputElement = document.getElementById('retirarMonto');
        if (inputElement) inputElement.value = '';
    }

    pantallaActivaId = idDeDestino; 
}

function mostrarMensaje(mensaje, tipo, idElemento) {
    const mensajeElement = document.getElementById(idElemento); 
    
    if (mensajeElement) {
        mensajeElement.textContent = mensaje;
        
        if (mensaje) {
            mensajeElement.className = `mensajeOperacion ${tipo}`; 
        } else {
            mensajeElement.className = 'mensajeOperacion';
        }
    }
}


function validarClave() {
    const inputElement = document.getElementById('clave');
    const claveingresada = inputElement.value;
    const mensajeId = 'mensajeClave'; 

    if (claveingresada === CLAVE_SECRETA) { 
        mostrarMensaje('', '', mensajeId); 
        irA('pantallaTres'); 
        inputElement.value = ''; 
        inputElement.blur();
    } else {
        mostrarMensaje("Clave incorrecta. Vuelva a intentarlo.", 'error', mensajeId);
        inputElement.value = ''; 
        inputElement.blur();
    }
}


function actualizarSaldoMostrar() {
    const displayElement = document.getElementById('saldoMostrar');
    if (displayElement) {

        const saldoFormateado = saldoActual.toFixed(2).replace('.', ',');
        displayElement.textContent = saldoFormateado;
    }
}



function manejarTransaccionExitosa(tipoOperacion) {

    irA('pantallaCarga'); 
    

    setTimeout(() => {

        const validacionId = (tipoOperacion === 'deposito') ? 'pantallaValidacion1' : 'pantallaValidacion2';
        

        irA(validacionId);

        setTimeout(() => {
            

            irA('pantallaCuatro'); 
            
        }, 3000); 
        
    }, 1500);
}


 
function realizarDeposito() {
    const inputElement = document.getElementById('ingresarMonto');
    const monto = Number(inputElement.value); 
    
    if (isNaN(monto) || monto <= 0) {
        inputElement.value = ''; 
        return; 
    }

    saldoActual += monto;
  
    actualizarSaldoMostrar();
    
    manejarTransaccionExitosa('deposito');
}


 
function realizarRetiro() {
    const inputElement = document.getElementById('retirarMonto');
    const monto = Number(inputElement.value); 

    if (isNaN(monto) || monto <= 0) {
        inputElement.value = '';
        return; 
    }

    if (monto > saldoActual) {
        inputElement.value = '';
        return; 
    }

    saldoActual -= monto;

    actualizarSaldoMostrar();

    manejarTransaccionExitosa('retiro');
}

function realizarRetiro20() {

    if (saldoActual >= 20) {
        saldoActual=saldoActual-20;
        
        actualizarSaldoMostrar();
        manejarTransaccionExitosa('retiro');    

    } else {
  
        return;
    }}
    

function realizarRetiro50() {

    if (saldoActual >= 50) {
        saldoActual=saldoActual-50;
        
        actualizarSaldoMostrar();
        manejarTransaccionExitosa('retiro');
      
        
    } else {
  
        return;
    }}

function realizarRetiro100() {

    if (saldoActual >= 100) {
        saldoActual=saldoActual-100;
        
        actualizarSaldoMostrar();
        manejarTransaccionExitosa('retiro');
      
        

    } else {
  
        return;
    }}
    
function realizarRetiro500() {
   
    if (saldoActual >= 500) {
        saldoActual=saldoActual-500;
        
        actualizarSaldoMostrar();
        manejarTransaccionExitosa('retiro');
        
    } else {
  
        return;
    }}

function realizarRetiro1000() {

    if (saldoActual >= 1000) {
        saldoActual=saldoActual-1000;
        
        actualizarSaldoMostrar();
        manejarTransaccionExitosa('retiro');
        
    } else {
  
        return;
    }}
    
    



