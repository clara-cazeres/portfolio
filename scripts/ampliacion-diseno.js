/* document.addEventListener('DOMContentLoaded', () => {
    const parametros = new URLSearchParams(window.location.search);
    const idProyecto = parametros.get('id');

    console.log(idProyecto)
    
    fetch(`http://localhost:3000/proyecto/${idProyecto}`)
        .then(response => response.json())
        .then(proyecto => {
            console.log(proyecto)
           const mainProyecto = document.getElementById('main-adi')
           mainProyecto.innerHTML = `<h1>${proyecto.titulo}</h1>`;
        })
        
        .catch(error => console.error('Error:', error));

}) */


document.addEventListener('DOMContentLoaded', () => {
    const parametros = new URLSearchParams(window.location.search);
    const idProyecto = parametros.get('id');
    
    fetch(`http://localhost:3000/proyecto/${idProyecto}`)
        .then(response => response.json())
        .then(proyecto => {
            const mainProyecto = document.getElementById('main-adi');

            // Construye la sección de la portada
            const portadaHTML = `
                <section id="s-portada">
                    <img src="img/${proyecto.banner}" alt="${proyecto.titulo}" />
                </section>`;

            // Construye la sección de información
            const infoHTML = `
                <section id="s-info">
                    <div>
                        <h1>${proyecto.titulo}</h1>
                        
                        <p>${proyecto.institucion}</p>
                        <p>${proyecto.materia}</p>
                        <p>Año: ${proyecto.fecha}</p>
                    </div>
                    <div>
                        <h4>Herramientas utilizadas</h4>
                        <div id="div-herramientas">
                            ${proyecto.herramientas.map(herramienta => `<img src="img/${herramienta}" alt="${herramienta}" />`).join('')}
                        </div>
                    </div>
                    <div>
                        <h2>Sobre el proyecto</h2>
                        <p>${proyecto.sobre}</p>
                    </div>
                </section>`;

            // sección del proyecto
            const proyectoHTML = `
                <section id="s-proyecto">
                    <div id="intro-bg">
                        <div id="div-intro">
                            <img src="img/${proyecto.logo}" alt="logo-${proyecto.titulo}" />
                            <div><p>${proyecto.descripcion}</p></div>
                        </div>
                    </div>
                    <div id="div-colores">
                        ${proyecto.colores.map(color => `<div style="background-color: ${color};"></div>`).join('')}
                    </div>
                    <div id="div-tipografias">
                        <img src="img/${proyecto.tipografia}" alt="tipografias" />
                    </div>
                </section>`;

            // Construye la sección de aplicaciones
            const aplicacionesHTML = `
                <section id="s-aplicaciones">
                    <h3>Aplicaciones</h3>
                    <div id="grid-aplicaciones">
                        ${proyecto.imagenes.map(img => `<img src="img/${img}" alt="aplicacion" />`).join('')}
                    </div>
                </section>`;

            // Compone todo el contenido en main
            mainProyecto.innerHTML = portadaHTML + infoHTML + proyectoHTML + aplicacionesHTML;
        })
        .catch(error => console.error('Error:', error));
});




