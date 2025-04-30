<template>
  <div id="app">
    <!-- Header -->
    <header class="navbar">
      <div class="logo">Mi Portafolio</div>
      <nav class="nav-links">
        <a href="#about">Sobre mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="content">
      <section id="about">
        <h2>Sobre mí</h2>
        <p>¡Hola! Soy un desarrollador web con experiencia en Vue.js, JavaScript y diseño web responsivo.</p>
        <img src="https://via.placeholder.com/400" alt="Imagen de ejemplo" class="image"/>
      </section>

      <section id="projects">
        <h2>Mis Proyectos</h2>
        <p>Aquí encontrarás algunos de los proyectos en los que he trabajado:</p>
        <ul>
          <li><strong>Proyecto 1:</strong> Descripción breve del proyecto.</li>
          <li><strong>Proyecto 2:</strong> Descripción breve del proyecto.</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contacto</h2>
        <p>Puedes contactarme a través de los siguientes enlaces:</p>
        <ul>
          <li><a href="mailto:tu-email@dominio.com">Correo Electrónico</a></li>
          <li><a href="https://github.com/tu-usuario" target="_blank">GitHub</a></li>
          <li><a href="https://linkedin.com/in/tu-usuario" target="_blank">LinkedIn</a></li>
        </ul>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <p>© {{ year }} Rodrigo Díaz de León C. Todos los derechos reservados.</p>
      <p>
        <a href="https://github.com/tu-usuario" target="_blank">GitHub</a> | 
        <a href="https://linkedin.com/in/tu-usuario" target="_blank">LinkedIn</a>
      </p>
    </footer>
  </div>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.navbar {
  background-color: #1e1e2f;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links a {
  color: white;
  margin-left: 1rem;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #42b983;
}

.content {
  flex: 1;
  padding: 2rem;
}

section {
  margin-bottom: 2rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
}

ul li {
  margin: 0.5rem 0;
}

.image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 1rem;
}

.footer {
  background-color: #1e1e2f;
  color: white;
  text-align: center;
  padding: 1rem 2rem;
  font-size: 0.9rem;
}

.footer a {
  color: #42b983;
  text-decoration: none;
  margin: 0 0.5rem;
}

.footer a:hover {
  text-decoration: underline;
}
</style>
