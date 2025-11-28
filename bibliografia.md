<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Equipo Académico</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Equipo Académico</h1>
   <div class="card" onclick="mostrarInfo('luis')">
  <div style="display: flex; align-items: center; margin-bottom: 20px;">
<img src=="https://github.com/PoderyMicropenalidad/Poder-y-Micropenalidad/blob/03008b41c61452e9bd69ed5c3d115afc65a1bff9/Images/FotoLuis.jpg" alt="Dr. Luis Alfonso Guadarrama Rico" style="width:150px; height:100px; margin-right: 10px:"> 
    <div class="card" onclick="mostrarInfo('luis')">
      <img src="https://github.com/PoderyMicropenalidad/Poder-y-Micropenalidad/blob/03008b41c61452e9bd69ed5c3d115afc65a1bff9/Images/FotoLuis.jpg" alt="Dr. Luis Alfonso Guadarrama Rico">
    </div>
    <div class="card" onclick="mostrarInfo('antonio')">
      <img src="Imagenes/FotoAQuintero.jpg" alt="Mtro. Antonio Quintero Zamora">
      <p><strong>Mtro. Antonio Quintero Zamora</strong></p>
    </div>
    <div class="card" onclick="mostrarInfo('alma')">
      <img src="imagenes/fotodraAlma.jpg" alt="Dra. Alma Liliana Díaz Martínez">
      <p><strong>Alma Liliana Díaz Martínez</strong></p>
    </div>
 <div class="card" onclick="mostrarInfo('sandra')">
      <img src="Imagenes/FotoLicSandra.jpg" alt="Lic. Sandra Lorena Padilla García">
      <p><strong>Lic. Sandra Lorena Padilla García</strong></p>
    </div>
     <div class="card" onclick="mostrarInfo('andrea<<<<<')">
      <img src="Imagenes/FotoLicAndrea.jpg" alt="Lic. Andrea Teresa Rojo Nápoles">
      <p><strong>Lic. Andrea Teresa Rojo Nápoles García</strong></p>
    </div>
  <!-- Ventana emergente -->
  <div id="infoModal" class="modal">
    <div class="modal-content">
      <span class="cerrar" onclick="cerrarInfo('antonio')">&times;</span>
      <div id="infoTexto"></div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
