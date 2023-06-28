const formulario = document.getElementById("form"); //1.capto el formulario

//2.creo el array donde se va a almacenar los datos
const datos = [];

//3.escucho el evento submit
formulario.addEventListener("submit", CaptardatosIngresados);

//4.creo una funcion para capatar los datos input
function CaptardatosIngresados(e) {
    e.preventDefault();
    const tareainput = formulario.querySelector("#tarea-input"); //capto el input del formulario
    const tarea = tareainput.value.trim();
    if(tarea != ""){
        const newtarea = {
            id: generatedID(),
            description: tarea,
            isCompleted: false,
        };
        datos.push(newtarea);       
//ahora capte los datos pero necesito que esos datos se envien al dom para que aparezacan en la tabla o produzcan cambios en la tabla.
        EnviarDatosaLaTabla();
        formulario.reset(); // borro el formulario una vez enviado
        
    }    
}

//5.creo funcion para enviar los datos ingresados al dom y mostrarlos en la tabla
function EnviarDatosaLaTabla(){
    const CuerpoDeLaTabla = document.querySelector("#table tbody") //capturo el cupero de la tabla 
    CuerpoDeLaTabla.innerHTML = "";// Iniciamos la tabla en blanco??
    datos.forEach(dato => {   //recorro el arreglo 
        const row = document.createElement("tr") //creo una fila donde voy a poner los elementos del array 
        //tr es igual a table row. tabla horizontal.
        //creo una variable interna para que al hacer click en un dato y pueda modificarlo.es complejo porque tengo que modificar un array, tengo entonces que idetentificar un elemtno del array a trves de un atributo para poder captarlo y modificarlo.
        row.setAttribute("data-dato-id", dato.id);//le voy a poner un atributo a la fila que es por ej un id o un valor.
        row.addEventListener("click", rowclick); //de esta forma escucho la fila

        const idcell = document.createElement("td");
        idcell.textContent = dato.id;
        row.appendChild(idcell)  //creo las celdas que  van a integrar la fila. se trata de 3 "table data" 

        const descriptioncell = document.createElement("td");
        descriptioncell.textContent = dato.description;
        row.appendChild(descriptioncell)

        const statuscell = document.createElement("td");
        statuscell.textContent = dato.isCompleted? "completed" : "pending"
        row.appendChild(statuscell)

        CuerpoDeLaTabla.appendChild(row)//le agrego al cuerpo de la tabla la fila row con  sus 3 celdas

    });

}

//6.al hacer click en el row esta funcion obtengo los valores del array de la fila
function rowclick(e){
 const todoid = e.currentTarget.getAttribute("data-dato-id");
 const todo = datos.find(todo => todo.id === Number(todoid));//con el tipo number convierto el array.

const InputModalId = EditTodoForm.querySelector("#todoId");
const inputDescriptionModal = EditTodoForm.querySelector("#todoDescriptionModal");
const  statustext = document.getElementById("statustext");

InputModalId.value = todo.id;
inputDescriptionModal.value = todo.description;
TodoModal.showModal();//caracteristica de los modales

};

//7.funcion para aumentar la celda que contiene el ID
function generatedID(){
    if(datos.length === 0){
         return 1;
    } else {
        const lasttodo = datos [datos.length - 1];
        return lasttodo.id + 1;
    }
}

//8.capturo los datos de la ventana modal (ventana emergente) del html que se abre al hacer click en el row
const EditTodoForm = document.getElementById("EditTodoForm");
const TodoModal = document.getElementById("TodoModal"); 

const deletebutton = document.getElementById("deletebutton");
const updatebutton  = document.getElementById("updatebutton");
const statusbutton  = document.getElementById("statusbutton");
const cancelbutton  = document.getElementById("cancelbutton");


//9. escucho los eventos
EditTodoForm.addEventListener("submit", UpdateButtonfunction);//redundante

statusbutton.addEventListener("click", StatusButtonfunction);
deletebutton.addEventListener("click", DeleteButtonfunction);
cancelbutton.addEventListener("click", () => TodoModal.close());//funcion adentro del lisener, como la funcion es muy breve no la creo por separado

//10. 