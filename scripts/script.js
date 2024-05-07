document.addEventListener('DOMContentLoaded', function() {
    listarProyectos();
});

function listarProyectos() {
    fetch('http://localhost:3000/proyectos')
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


/* document.addEventListener('DOMContentLoaded', function() {
    listarProyectos();
});

function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Elemento entra en la vista - Anima entrando
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        } else {
            // Elemento sale de la vista - Anima saliendo
            entry.target.style.opacity = 0;
            entry.target.style.transform = 'translateY(20px)';
        }
    });
}

function listarProyectos() {
    fetch('http://localhost:3000/proyectos')
        .then(response => response.json())
        .then(proyectos => {
            const divProyectos = document.getElementById('container-proyectos');
            proyectos.forEach(proyecto => {
                const article = document.createElement('article');
                article.className = 'project-article';
                article.innerHTML = `
                    <img src="img/${proyecto.miniatura}" alt="${proyecto.titulo}" class="project-image">
                    <div class="hover-info">
                        <h3>${proyecto.titulo}</h3>
                        <p>${proyecto.categoria}</p>
                    </div>
                `;
                divProyectos.appendChild(article);
            });

            

            // Configura el observer
            const observer = new IntersectionObserver(handleIntersect, {
                root: null,  // Default: viewport
                rootMargin: '0px',
                threshold: 0.1  // Ajusta según lo que necesites para la sensibilidad
            });

            // Observa cada artículo
            document.querySelectorAll('.project-article').forEach(article => {
                observer.observe(article);
            });
        })
        .catch(error => console.error('Error:', error));
}
 */