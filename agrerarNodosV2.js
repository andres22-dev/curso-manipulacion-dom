/* Otras Formas de Leer y agregar nodos 
 
que son mucho mas convenientes usando strings o cadenas de texto

*/
let node;
node.outerHTML  //leer
node.innerHTML  //escribir

/*
💡  Cuando en el inspector de elementos seleccionas un elemento
  y en la consola escribes $0, este te devolverá el elemento tal
   como si lo hubieses seleccionado con document.querySelector().

*/

$0.outerHTML // Me devolvera como una cadena de texto el HTML de ese elemento
"<h2> checkout form </h2>"
$0.innerHTML // Me devuelve el valor actual
"Checkout form"
$0.innerHTML = "algo nuevo" // Tambien podriamos reasignar su valor

/* Utilizamos el query selector con la funcion replace y le indicamos
como primer parametro el texto que quermos remplazar y como
segundo parametro el texto por el cual lo vamos a remplazar */

const nuevoHTML = $0.outerHTML.replace('Algo nuevo', 'Algo viejo');

$0.innerHTML = nuevoHTML /*
le asignamos el query selector que remplazamos con el metodo replace
y este cambiara en el html y  lo veremos reflejado en nuestra pagina

El problema con estas formas de inserciones es que permiten la inserción 
XSS, es decir, código maligno, y cualquier usuario programador malicioso
podría meter scripts molestos, imagina que cada que un usuario llegue a 
tu página le salga un alert… ¡Sería catastrófico! Siempre sanitiza 
(remover caracteres especiales) los inputs de tus usuarios



*/

