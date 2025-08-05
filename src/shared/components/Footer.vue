<template>
  <footer class="glass-border-t text-desc bg-default">
    <div class="footer-wrapper max-w-7xl m-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div class="links-container flex flex-row gap-5 justify-center items-center">
        <a href="https://github.com/RoyDCC" target="_blank" class="inline-block w-10 h-10">
          <img src="/icons/github.svg" alt="Github Link" class="opacity-65"/>
        </a>
        <a href="#" class="inline-block w-10 h-10">
          <img src="/icons/linkedin.svg" alt="Linkedin Link" class="opacity-65"/>
        </a>
      </div>

      <p>
        &copy;{{ year }} Rodrigo Díaz de León C. Todos los derechos reservados.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<style scoped>
footer {
  box-sizing: border-box;
}
.footer-wrapper {
  padding: 2rem;
}
</style>
