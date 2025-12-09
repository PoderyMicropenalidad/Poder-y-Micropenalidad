<html lang="es">
<head>
  <style>
.academico-card {
    background: white;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 20px;
    cursor: pointer;
}
.academico-card:hover {
    background: #f7f7f7;
}
.academico-info {
    display: none;
    padding: 15px;
    background: #f2f2f2;
    border-radius: 10px;
    margin-top: 10px;
}
.academico-img {
    width: 120px;
    border-radius: 10px;
    margin-right: 20px;
}
</style>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Equipo Académico</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="academico-card" onclick="toggleInfo('luis')">
    <div style="display:flex; align-items:center;">
        <img class="academico-img" src="Images/FotoLuis.jpg" alt="Dr. Luis Alfonso Guadarrama Rico">
        <h3>Dr. Luis Alfonso Guadarrama Rico</h3>
    </div>
</div>

<div id="info-luis" class="academico-info">
    <p><strong>Grado académico:</strong> Doctor en Educación</p>
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
