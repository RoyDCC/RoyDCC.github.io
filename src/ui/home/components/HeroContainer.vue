<template>
  <section class="hero hero-bg min-h-screen pt-15">
    <div class="hero-content text-center">
      <div class="max-w-xl">
        <h1 class="text-5xl font-bold">Rodrigo Díaz de León C.</h1>
        <h2 class="text-4xl font-bold text-cian mt-3">Desarrollo Web</h2>
        <p class="py-6 text-xl text-desc font-medium">
          Desarrollador Full Stack con experiencia creando soluciones completas
          y productos de calidad
        </p>

        <div class="hero-btn-container flex justify-center gap-7 flex-wrap">
          <a href="#">
            <button
              class="px-7 py-3 cursor-pointer border-0 bg-cian-gradient text-black rounded-lg font-medium transition duration-250 hover:scale-103"
            >
              Ver Proyectos
            </button>
          </a>
          <a href="#">
            <button
              class="px-7 py-3 cursor-pointer border-0 bg-default rounded-lg font-medium transition duration-250 hover:scale-103"
            >
              Contacto
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero-bg {
  background: var(--custom-hero-gradient-bg);
}
</style>
