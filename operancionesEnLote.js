/*
    Hacer operaciones en el DOM es algo que genera una carga
    muy pesada y generalmente cuando trabajamos con cosas
    mas avanzadas en librerias y frameworks lo que mas cuesta
    en estas librerias es hacer operaciones en el DOM
    
    Es importante la cantidad de nodos que estemos utilizando,
    ya que entre menos operaciones realicemos en el DOM
    especialmente escribir y eliminar cosas mas rapida
    va a ser nuestra aplicacion

*/

// Operaciones en Lote

/*agregaremos 100 inputs de la forma menos optima

Esta forma no es muy optima ya que por cada vez que creamos
un elemento estamos utilizando tambien appendChild es 
decir que el DOM se modifique 100 veces

*/
for(let i = 0; i <= 100; i++){

 
 const nuevoInput = document.createElement('input');

 document.body.appendChild(nuevoInput);

}


// Forma Optima

const nodos = []
for(let i = 0; i <= 100; i++){


 const nuevoInput = document.createElement('input');

 //empujamos cada input en el array nodos
 nodos.push(nuevoInput);

}

//para agregar estos inputs en el DOM hacemos lo siguiente

document.body.append(nodos[0], nodos[1]) // pero de esta forma no es optima

/*Entonces lo haremos con el spread Operator 

Con esto estamos indicandole al spread operator que le pase 
todo lo que tiene al metodo append


*/

document.body.append(...nodos)
