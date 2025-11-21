let pantallaActivaId = 'pantallaUno'; 

function irA(idDeDestino) {
    
    const pantallaAnterior = document.getElementById(pantallaActivaId); 
    if (pantallaAnterior) {
        pantallaAnterior.style.display = 'none';
    }

    
    const pantallaNueva = document.getElementById(idDeDestino); 
    if (pantallaNueva) {
        pantallaNueva.style.display = 'block'; 
    }

        pantallaActivaId = idDeDestino; 
}