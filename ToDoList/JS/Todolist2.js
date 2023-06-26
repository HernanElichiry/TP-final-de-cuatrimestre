const formulario = document.getElementById("formulario"); //1.capto el formulario

//2.creo el array donde se va a almacenar los datos
const datos = [];

//3.escucho el evento submit
formulario.addEventListener("submit", CaptardatosIngresados);

//4.creo una funcion para capatar los datos input
function CaptardatosIngresados(e) {
    e.preventDefault();
    const tareainput = document.getElementById("tarea-input"); //capto el input del formulario
    const tarea = tareainput.value.trim();
    if(tarea != ""){
        const newtarea = {
            id: 1,
            description: tarea,
            status: false,
        };
        datos.push(newtarea);       
//ahora capte los datos pero necesito que esos datos se envien al dom para que aparezacan en la tabla o produzcan cambios en la tabla.
        EnviarDatosaLaTabla();
        
    }    
}

//5.creo funcion para enviar los datos ingresados al dom y mostrarlos en la tabla
function EnviarDatosaLaTabla(){
    const CuerpoDeLaTabla = document.querySelector("#table tbody") //capturo el cupero de la tabla 
    CuerpoDeLaTabla.innerHTML("");// Iniciamos la tabla en blanco??
    datos.forEach(dato => {   //recorro el arreglo 
        const row = document.createElement("tr") //creo una fila donde voy a poner los elementos del array 
        //tr es igual a table row. tabla horizontal.
        //creo una variable interna para que al hacer click en un dato y pueda modificarlo.es complejo porque tengo que modificar un array, tengo entonces que idetentificar un elemtno del array a trves de un atributo para poder captarlo y modificarlo.
        row.setAttribute("data-dato-id", dato.id);//le voy a poner un atributo a la fila que es por ej un id o un valor.
        row.addEventListener("click", rowclick); //de esta forma escucho la fila

        const idcell = document.createElement("td");
        idcell.textContent = dato.id;
        row.appendChild(idcell)  //creo las celdas que  van a integrar la fila 

        const descriptioncell = document.createElement("td");
        descriptioncell.textContent = dato.description;
        row.appendChild(descriptioncell)

        const statuscell = document.createElement("td");
        statuscell.textContent = dato.isCompleted? "completed" : "pending"
        row.appendChild(statuscell)

        CuerpoDeLaTabla.appendChild(row)//le agrego al cuerpo de la tabla la fila row con  sus 3 celdas


        

    });

}

//funcion para hacer click en el row
function rowclick(){

};