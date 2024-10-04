function cambiar(){
    let nombreusuario = document.getElementById("nombre");
    let titulousuario = document.getElementById("titulo");
    let mensaje =`Te llamas ${nombreusuario.value}`

    titulousuario.textContent=mensaje;
    nombreusuario.value=" ";
  
    
   
}