const boton = document.getElementById("Button"); //capturo el botton del documento por Id
boton.addEventListener("click", agregarTarea); //escucho el boton

// Función para agregar una nueva tarea
function agregarTarea() { //se dispara la funcion al dar click en  
    const input = document.getElementById('taskInput'); // capto del documento atraves del id el input.
    var tarea = input.value; // obtengo del input el valor, es decir los datos ingresados.
  
    if (tarea === '') {  //condicional.
      alert('Por favor, ingresa una tarea válida');
      return;
    }
  
    const lista = document.getElementById('taskList'); // capto la UL
  
    var nuevoElemento = document.createElement('li'); //creo un elemento de lista
    nuevoElemento.textContent = tarea; // establezco como contenido de la lista el valor del input


    lista.appendChild(nuevoElemento); // agrego a la UL la lista con el contenido
  
    input.value = '';  //vacio el input 
    
    nuevoElemento.addEventListener('click', function() {  //escucho el elemento nuevo
      nuevoElemento.classList.toggle('completed');  //agrego una classlist tachar 
    }); 
    
    
    nuevoElemento.addEventListener('dblclick', function() {
      lista.removeChild(nuevoElemento); //remueve la elemento/ tarea hijo  
    });
  }

   
    

   
  