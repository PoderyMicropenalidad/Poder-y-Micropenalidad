function mostrarInfo(nombre) {
  const info = {
    luis: `
      <h2>Dr. Luis Alfonso Guadarrama Rico</h2>
      <p>Doctor en Ciencias Sociales. Profesor-investigador en temas de comunicación política y medios.</p>
    `,
    antonio: `
      <h2>Dra. Claudia Ortega Ponce</h2>
      <p>Doctora en Comunicación. Especialista en medios digitales y análisis del discurso.</p>
    `,
    rosari: `
      <h2>Dra. Rosario Rogel Salazar</h2>
      <p>Investigadora en temas de comunicación pública, opinión y participación ciudadana.</p>
    `
  };

  document.getElementById("infoTexto").innerHTML = info[nombre];
  document.getElementById("infoModal").style.display = "block";
}

function cerrarInfo() {
  document.getElementById("infoModal").style.display = "none";
}

window.onclick = function(e) {
  if (e.target === document.getElementById("infoModal")) {
    cerrarInfo();
  }
};
