
const formulario = document.querySelector("form"); //capturo el formulario completo del html contacto
formulario.addEventListener("submit", Validacion); //escucho el evento submit. al hace click en el submit 
//del formulario  se ejecuta la funcion validacion.

//creo un array para guardar los valores a capturar.
const datos = {
    name: "",
    mail: "",
    cel: "",
    mensj: "",
    };  

//creo una funcion para validad los campos.
function Validacion (e) {  // la e de "evento" objeto que represetna el evento, se crea para almacenar la informacion del evento, 
    //en este caso el evento es submit.
    e.preventDefault (); // sirve para detener el evento (y, en este caso, poder verlo en la consola sin que desaparezca)
    datos.name = e.target.nombre.value;  //target es una propiedad del evento, me permite determinar 
    //exactamente de donde viene ese evento.
    datos.mail = e.target.correo.value; /*accedo al valor del campo "correo" del formulario donde esta submit. 
    submit es un evento, formulario es un elemento donde se encuetra el evento, como el campo correo esta dentro del formulario
    puedo acceder a el*/   
    datos.cel = e.target.telefono.value;
    datos.mensj = e.target.mensaje.value;
    console.log(datos); //muestro por consola;   
    formulario.reset();
    alert("El formulario ha sido enviado correctamente")
}




