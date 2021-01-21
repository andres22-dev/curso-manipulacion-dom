
//genamos un numero random para crear imagenes aleatorias

const maximun = 121;
const minimun = 1;

const random = () => Math.floor(Math.random()*(maximun - minimun)+ minimun)
// creamos la imagen

const createImageNode = () => 
{
//creamos el contenedor de imagenes
    const container = document.createElement('div');
    container.className = "p-4";

//creamos la imagen y agregamos las propiedades + el link de la imagen

    const imagen = document.createElement('img');
    imagen.className = "mx-auto";
    imagen.width = '320';
    imagen.src = `https://randomfox.ca/images/${random()}.jpg`;
  
  // agregamos la imagen al contenedor

  container.appendChild(imagen)


  //retornamos el container
  return container

};

//guardaremos la imagen en una variable
//const nuevaImagen = createImageNode();

//obtenemos el contenedor padre donde estaran todos nuestros elementos
const mountNode = document.getElementById('imagenes');


//agregamos las imagenes al contenedor padre

//mountNode.append(nuevaImagen, createImageNode());

//creamos una funcion para agregar la imagen cuando damos clic a un boton

//obtenemos el boton

const addboton = document.querySelector('button');

const addImage = () => 
{ 
    //guardamos la imagen que recibimos retornada de la funcion en una variable
    const newImage = createImageNode();
    //agregamos la imagen al contenedor padre
    mountNode.append(newImage)

    
}

addboton.addEventListener('click', addImage);


