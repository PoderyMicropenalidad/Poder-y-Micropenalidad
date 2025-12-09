<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Equipo Académico</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="academico">
    <div class="card" onclick="toggleInfo('luis')">
        <img src="Images/fotoLuis.jpg" alt="Dr. Luis" style="width:150px;">
        <p><strong>Dr. Luis Alfonso Guadarrama Rico</strong></p>
    </div>
    <div id="info-luis" class="info">
        <p>Doctor en educación, especialista en… (información completa)</p>
    </div>
</div>
    <div class="card" onclick="mostrarInfo('antonio')">
       <div style="display: flex; align-items: center; margin-bottom: 25px;">
      <img src="Images/FotoAQuintero.jpg" alt="Mtro. Antonio Quintero Zamora">
      <p><strong>Mtro. Antonio Quintero Zamora</strong></p>
    </div>
    <div class="card" onclick="mostrarInfo('alma')">
       <div style="display: flex; align-items: center; margin-bottom: 30px;">
      <img src="Images/FotodraAlma.jpg" alt="Dra. Alma Liliana Díaz Martínez">
      <p><strong>Alma Liliana Díaz Martínez</strong></p>
    </div>
 <div class="card" onclick="mostrarInfo('sandra')">
    <div style="display: flex; align-items: center; margin-bottom: 20px;">
      <img src="Images/FotoLicSandra.jpg" alt="Lic. Sandra Lorena Padilla García">
      <p><strong>Lic. Sandra Lorena Padilla García</strong></p>
    </div>
     <div class="card" onclick="mostrarInfo('andrea')">
        <div style="display: flex; align-items: center; margin-bottom: 20px;">
      <img src="Images/FotoLicAndrea.jpg" alt="Lic. Andrea Teresa Rojo Nápoles">
      <p><strong>Lic. Andrea Teresa Rojo Nápoles García</strong></p>
    </div>
  <div id="infoModal" class="modal">
    <div class="modal-content">
      <span class="cerrar" onclick="cerrarInfo('luis')">&times;</span>
      <div id="infoTexto"></div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
