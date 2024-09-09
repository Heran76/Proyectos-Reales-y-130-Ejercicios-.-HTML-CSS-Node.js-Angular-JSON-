let reloj = document.getElementById("reloj");

function tiempo() {
    let ahora = new Date();
    let hora = ahora.getHours();
    let minuto = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    // Formatear la hora para que siempre tenga dos dígitos
    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    reloj.textContent = hora + ":" + minuto + ":" + segundos;
}

// Actualizar el reloj cada segundo
setInterval(tiempo, 1000);
    
