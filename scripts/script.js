//listar proyectos dinamicamente

document.addEventListener('DOMContentLoaded', function() {
    listarProyectos();
});

function listarProyectos() {
    fetch('https://portfolio-backend-etuy.onrender.com/proyectos')
        .then(response => response.json())
        .then(proyectos => {
            const divProyectos = document.getElementById('container-proyectos');
            proyectos.forEach(proyecto => {
                const article = document.createElement('article');
                article.className = 'project-article'; // Añadir una clase para el estilo
                article.innerHTML = `
                    <img src="img/${proyecto.miniatura}" alt="${proyecto.titulo}" class="project-image">
                    <div class="hover-info">
                        <h4>${proyecto.titulo}</h4>
                        <p>${proyecto.categoria}</p>
                    </div>
                `;

                divProyectos.appendChild(article);

                // Redirigir a la página de ampliación
                article.addEventListener('click', () => {
                    window.location.href = `ampliacion-diseno.html?id=${proyecto._id}`;
                });
            });
        })
        .catch(error => console.error('Error:', error));
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

  

