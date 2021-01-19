/*  Crear Nodos 

Poremos pasarle como argumento el elmento o texto  que queremos
crear y web API nos devolvera el elemento creado

Con que creemos un elemento no significa que este necesariamente
se agregue al DOM 
*/

document.createElement // Crear etiqueta HTML

    const etiquetaH1 = document.createElement("h1");

document.createTextNode // Para crear un texto

    const texto = document.createTextNode("Hola Mundo");

// Agregar Los Nodos Javascript nos provee estas formas:


parentElement.appendChild()

parentElement.append()

parentElement.insertBefore()

parentElement.insertAdjacentElement()


//Ejemplo con .appendChild Agrega un elemento hijo al final de este

//primero leemos el elemento que queremos utilizar
const container = document.querySelector('div py5 text-center');

//creamos el nodo que vamos a insertar

const h3 = document.createElement('h3')

// luego le decimos al elemento padre que vamos a agregar un elemento

container.appendChild(h3)

// agregaremos texto a nuestro elemento h3

const texto = document.createTextNode('holita');

h3.appendChild(texto)

/* node.append

Es la evolucion de appendChild

-> Puedes agregar más de un nodo, podemos pasar muchos nodos y los agregara
al final.

-> Puedes agregar texto

-> No es soporta por internet explorer

*/

container.append('hola 2', document.createElement('div'))
/*
   parentElement.insertBefore(): Inserta nodos antes del elemento que le pasemos
   como referencia, este nodo de referencia tiene que ser un hijo DIRECTO del padre

   La clave para todos los metodos que empiezan con insert es tener en cuenta
   la referencia, en insertBefore la referencia va despues de el nodo que
   queremos agregar.

   El nodo de referencia tiene que ser hijo directo del nodo base


*/
// Obtengo el elemento padre
const parentElement = document.querySelector("selector")
// Creo un elemento
const titulo = document.createElement("h1")
// Obtengo la referencia del elemento del que quiero insertar antes:
const referencia = document.querySelector("h2")
// ¡Lo insertamos!
parentElement.insertBefore(titulo, referencia)

/*

  parentElement.insertAdjacentElement() 
  Inserta un nodo segun las opciones que le pasemos al metodo

  beforebegin -> Lo inserta antes del nodo
  afterbegin ->  Lo inserta despues del nodo
  beforeend ->  Lo inserta antes de donde finaliza el nodo
  afterend ->  Lo inserta después de donde finaliza el nodo


*/
//obtengo la referencia

const referencia = document.querySelector('h2')

// creo el elemento

const nodo = document.createElement('span')

/*insertamos el nodo utilizando nuestro metodo el cual
  recibe por parametro la opcion de donde lo queremos colocar
  y luego le indicamos el elemento que vamos a insertar
*/

container.insertAdjacentElement('beforebegin', nodo);