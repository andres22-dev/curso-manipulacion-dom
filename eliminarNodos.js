/* 
    Eliminar Nodos

Asi como podemos crear, agregarlos y modificar
tambien podremos eliminar nuestros nodos.

-> parentElement.removeChild

-> document.remove

-> document.replaceChild //remplazar nodo

*/

// Selecciono el elemento que quiero eliminar

const nodoAEliminar = document.querySelector("id")

// Selecciono al padre directo

const padre = document.querySelector("class")

/* Eliminamos el elemento pasandole por parametro
   lo que queremos eliminar al metodo removeChild() 
*/

padre.removeChild(nodoAEliminar)

/* Tambien podremos eliminarlo de otro forma 
con la propiedad parentElement que hace referencia
al padre del elemento que queremos eliminar */

const padre2 = nodoAEliminar.parentElement;

padre2.removeChild(nodoAEliminar);


/*
   node.remove  

 ->Es la evolución de removeChild

 -> No soportado IE

 Remove no nos pedira ningun padre ni tampoco ninguna referencia

 Solo necesitamos seleccionar el elemento que queremos eliminar
 y utilizar el metodo .remove() y se eliminara

*/
const elementoEliminar = document.querySelector("div");

elementoEliminar.remove();

/* 
    node.replaceChild

    para utilizar replace child necesitamos el padre
    el elemento a remplazar y el elemento de referencia

*/

//seleccionamos el elemento padre
const elementoPadre = document.querySelector('idContenedor');

//selecionamos la referencia del elemento que queremos remplazar

const elementoRemplazo = document.querySelector('idQuevamosARemplazar');

//creamos el elemento nuevo por el cual vamos a remplazar al otro

const elementoNuevo = document.createElement('h1');

//agregamos texto al elemento nuevo
elementoNuevo.textContent = "Form Checkout";

/* Utilizamos el metodo .replaceChild  que recibe por parametro
  el elemento nuevo y el segundo el elemento por el cual lo vamos
  a remplazar*/
elementoPadre.replaceChild(elementoNuevo,elementoRemplazo);

