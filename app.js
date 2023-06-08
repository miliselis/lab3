fetch('data.json')
.then(responde=>responde.json())
.then(data=>{
    const tarjetascontainer = document.getElementById('tarjetas-container')
    data.forEach(objeto=>{
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('card');
        const titulo= document.createElement('h2');
        titulo.textcontent= objeto.titulo;

        const contenido = Document.createElement('p');
        contenido.textcontent = objeto.contenido;

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(contenido);

        tarjetascontainer.appendChild(tarjeta);
        
    });
        
    })
.catch(error => console.error(error));
