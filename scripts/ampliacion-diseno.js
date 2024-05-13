document.addEventListener('DOMContentLoaded', () => {
    const parametros = new URLSearchParams(window.location.search);
    const idProyecto = parametros.get('id');
    
    fetch(`https://portfolio-backend-etuy.onrender.com/proyecto/${idProyecto}`)
        .then(response => response.json())
        .then(proyecto => {
            const mainProyecto = document.getElementById('main-adi');
            mainProyecto.innerHTML = buildPortadaHTML(proyecto) + buildInfoHTML(proyecto) + buildProyectoHTML(proyecto) + buildAplicacionesHTML(proyecto);
        })
        .catch(error => console.error('Error:', error));
});

function buildPortadaHTML(proyecto) {
    return `
        <section id="s-portada">
            <img src="img/${proyecto.portada}" alt="Portada ${proyecto.titulo}" />
        </section>`;
}

function buildInfoHTML(proyecto) {
    const fecha = new Date(proyecto.fecha);
    return `
        <section id="s-info">
            <div>
                <h1>${proyecto.titulo}</h1>
                <h2>${proyecto.categoria}</h2>
                <p>${proyecto.institucion}</p>
                <p>${proyecto.materia}</p>
                <p>${proyecto.instancia}</p>
                <p>Año: ${fecha.getFullYear()}</p>
            </div>
            <div>
                <h4>Herramientas utilizadas</h4>
                <div id="div-herramientas">
                    ${proyecto.herramientas.map(herramienta => `<img src="img/${herramienta}" alt="${herramienta}" />`).join('')}
                </div>
            </div>
            <div>
                <h4>Equipo:</h4>
                <div>
                    ${proyecto.equipo.map(miembro => `<p>${miembro}</p>`).join('')}
                </div>
            </div>
            <div>
                <h2>Sobre el proyecto</h2>
                <p>${proyecto.about}</p>
            </div>
        </section>`;
}

function buildProyectoHTML(proyecto) {
    return `
        <section id="s-proyecto">
            <div id="intro-bg" style="background-color: ${proyecto.fondodescripcion};">
                <div id="div-intro">
                    <img src="img/${proyecto.logo}" alt="logo-${proyecto.titulo}" />
                    <div><p>${proyecto.descripcion}</p></div>
                </div>
            </div>
            <div id="div-paletas">
                <img src="img/${proyecto.colores}" alt="colores" />
                <img src="img/${proyecto.tipografias}" alt="tipografias" />
            </div>
        </section>`;
}


function buildAplicacionesHTML(proyecto) {
    let html = `
        <section id="s-aplicaciones">
            ${proyecto.imagenes.map(img => `<img src="img/${img}" alt="aplicacion" />`).join('')}`;

    // si hay video:
    if (proyecto.video && proyecto.video.trim() !== "") {
        html += `
            <div id="div-video">
                <video controls width="100%">
                    <source src="img/${proyecto.video}" type="video/mp4">
                </video>
            </div>`;
    }

    html += `</section>`;
    return html;
}

