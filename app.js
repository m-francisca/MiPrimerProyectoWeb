var name = document.getElementById('nombre');
var password = document.getElementById('password');
var domicilio = document.getElementById('domicilio');
var error = document.getElementById('error');

function enviarPedido(){
    console.log('Enviando pedido...'); 

     var mensajesError = [];

    if(name.value === null || name.value === ''){
    
        alert('[ERROR] El campo nombre debe tener un valor...');

    }

    else if(password.value === null || password.value === ''){
       
        alert('[ERROR] El campo  contraseña debe tener un valor...');
    }
   else  if(domicilio.value === null || domicilio.value === ''){
        
         alert('[ERROR] El campo domicilio debe tener un valor...');
     }
   

     error.innerHTML = mensajesError.join(', ');

    return false;
}
