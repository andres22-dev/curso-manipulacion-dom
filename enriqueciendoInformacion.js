
const baseUrl = "https://platzi-avo.vercel.app";
//const url = "https://platzi-avo.vercel.app/api/avo";

/* Cambiamos la url que tenemos por una url base
y lo que hacemos es agregarle atraves de  un template string
el resto de la url que teniamos en el fetch*/


window
    .fetch(`${baseUrl}/api/avo`)
    .then(respuesta => respuesta.json())
    .then(responseJson =>{

        const todosLosItems = [];
        responseJson.data.forEach(item => {
        
        const imagen = document.createElement('img');
        /* Para asignar la url que obtenemos de la api
        a nuestra imagen lo hacemos en la propiedad src

        Si la agregaramos solo con lo que obtenemos de la API nos 
        daria un error ya que lo que obtenemos es una ruta obsuluta
        mas no una url por lo tanto nos dara error porque no
        encontraria la ruta de la imagen
        
        */
       imagen.src = `${baseUrl}${item.image}`;
        
    
        const titulo = document.createElement('h2');
        
        titulo.textContent = item.name;

       
        const precio = document.createElement('div');

        /* Le asignamos al texto del elemento precio que es un div
           la informacion que obtenemos de respuesta JSON Y atraves
           del parametro que tenemos en la funcion del forEach
           accederemos al precio 
        
        */
        precio.textContent = item.price;

        const container = document.createElement('div');

        container.append(imagen,titulo,precio);
        
     
            todosLosItems.push(container);
            
                console.log(item.name);
                
            });
    
            document.body.append(...todosLosItems)
    
        });
    