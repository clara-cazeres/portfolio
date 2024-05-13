//listar proyectos dinamicamente

function listarProyectos() {
    fetch('https://portfolio-backend-etuy.onrender.com/proyectos')
        .then(response => response.json())
        .then(proyectos => {
            const divProyectos = document.getElementById('container-proyectos');
            proyectos.forEach(proyecto => {
                const categoriaClase = getCategoriaClase(proyecto.categoria.toLowerCase());
                const article = document.createElement('article');
                article.className = `project-article ${categoriaClase}`; // clase de categoría

                // div para la imagen de fondo
                const backgroundDiv = document.createElement('div');
                backgroundDiv.className = 'background-img';
                backgroundDiv.style.backgroundImage = `url('img/categorias/${categoriaClase}.png')`;
                backgroundDiv.style.position = 'absolute';
                backgroundDiv.style.top = '0';
                backgroundDiv.style.left = '0';
                backgroundDiv.style.right = '0';
                backgroundDiv.style.bottom = '0';
                backgroundDiv.style.backgroundSize = 'cover';

                //contenido del article
                article.innerHTML = `
                    <img src="img/${proyecto.miniatura}" alt="${proyecto.titulo}" class="project-image">
                    <div class="hover-info">
                        <h4>${proyecto.titulo}</h4>
                        <p>${proyecto.categoria}</p>
                    </div>
                `;

                // div de fondo al principio del article
                article.prepend(backgroundDiv);
                divProyectos.appendChild(article);

                // redireccionar
                article.addEventListener('click', () => {
                    window.location.href = `ampliacion-diseno.html?id=${proyecto._id}`;
                });
            });
        })
        .catch(error => console.error('Error:', error));
}

// obtener la clase de categoría según el valor de la categoría
function getCategoriaClase(categoria) {
    switch (categoria) {
        case "diseño web":
            return "categoria-web";
        case "diseño de identidad visual":
            return "categoria-identidad";
        case "diseño editorial":
            return "categoria-editorial";
        case "diseño de interfaces":
            return "categoria-interfaces";
        default:
            return "";
    }
}


//animacion icono flecha

document.addEventListener("DOMContentLoaded", function() {
    const flecha = document.querySelector('#icon-flecha .material-symbols-outlined');
    flecha.addEventListener('click', function() {
      // Detiene la animación al hacer clic
      flecha.style.animation = 'none';
      // Calcula la posición y realiza el scroll
      const proyectosSection = document.querySelector('#s-proyectos');
      if (proyectosSection) {
        const topPos = proyectosSection.getBoundingClientRect().top + window.scrollY - 50; // Usando scrollY en lugar de pageYOffset
        window.scrollTo({
          top: topPos,
          behavior: 'smooth'
        });
      }
    });
  });
  
  

  //enviar mensaje del formulario al mail
  document.getElementById("bt-enviar").addEventListener('click', enviarEmail);


function enviarEmail() {
    var mensaje = document.getElementById('mensaje').value;
    var asunto = encodeURIComponent("Consulta portfolio");
    var cuerpoMensaje = encodeURIComponent(mensaje);
    var enlaceMailto = "mailto:claracazeres@gmail.com?subject=" + asunto + "&body=" + cuerpoMensaje;
    window.location.href = enlaceMailto;
}

  

