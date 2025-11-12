<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cuerpo Académico</title>
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f3f3f3;
    text-align: center;
    padding: 40px;
  }

  /* Imagen circular */
  .profile {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.3s;
  }

  .profile:hover {
    transform: scale(1.05);
  }

  .modal {
    display: none;
    position: fixed;
    z-index: 10;
    left: 0; top: 0;
    width: 100%; height: 100%;
    background-color: rgba(0,0,0,0.7);
  }

  .modal-content {
    background-color: white;
    margin: 10% auto;
    padding: 20px;
    width: 80%;
    max-width: 500px;
    border-radius: 8px;
    text-align: left;
    position: relative;
  }

  .close {
    color: #555;
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
  }

  .close:hover {
    color: black;
  }
</style>
</head>
<body>

<h2>Cuerpo Académico</h2>


<img src="Images/Foto-draAlma.jpg" alt="Dra. Alma Liliana Díaz Martínez" class="profile" id="openModal">


<div id="myModal" class="modal">
  <div class="modal-content">
    <span class="close" id="closeModal">&times;</span>
    <h3>Dra. Rosario Rogel Salazar</h3>
    <p>
      Doctora en Ciencias Sociales, especialista en teoría social de sistemas, procesos editoriales científicos,
      acceso abierto y comunicación científica temática. Profesora de la Facultad de Ciencias Políticas y Sociales
      en la Universidad Autónoma del Estado de México. Miembro del Sistema Nacional de Investigadores, nivel I (Conacyt, México).
      Ha colaborado en el desarrollo de metodologías de evaluación de publicaciones académicas, así como en la redacción
      del proyecto de Ley de Acceso Abierto en México aprobado en mayo del 2014.
    </p>
  </div>
</div>

<script>
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("openModal");
  const span = document.getElementById("closeModal");

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
</script>

</body>
</html>
