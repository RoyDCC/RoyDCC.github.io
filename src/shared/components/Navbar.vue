<template>
  <section
    class="bg-glass bg-base-100 shadow-sm glass-border-b w-full fixed top-0 z-1"
  >
    <div class="navbar text-desc max-w-7xl m-auto">
      <div class="navbar-start flex-grow py-0">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <img src="../assets/menu-icon.svg" alt="Menu" class="invert w-7 h-7">
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow bg-default rounded-lg"
          >
            <li><a class="rounded-xl text-base">Inicio</a></li>
            <li>
              <a class="rounded-xl text-base">Recursos</a>
              <ul class="p-2">
                <li><a class="rounded-xl text-base">Graficos</a></li>
                <li>
                  <a class="rounded-xl text-base">Documentación</a>
                </li>
              </ul>
            </li>
            <li><a class="rounded-xl text-base">Contacto</a></li>
          </ul>
        </div>
        <a class="text-xl text-cian font-bold" href="/">RDC</a>
      </div>
      <div class="navbar-center hidden lg:flex pt-0">
        <ul class="menu menu-horizontal px-1 gap-5">
          <li class="text-base"><a class="rounded-xl">Inicio</a></li>
          <li class="text-base">
            <details>
              <summary class="rounded-xl">Recursos</summary>
              <ul class="p-2 bg-default mt-0.5 rounded-lg">
                <li class="text-base"><a class="rounded-xl">Graficos</a></li>
                <li class="text-base">
                  <a class="rounded-xl">Documentación</a>
                </li>
              </ul>
            </details>
          </li>
          <li class="text-base"><a class="rounded-xl">Contacto</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.menu a,
.menu summary {
  transition: 300ms;
}
.menu a:hover,
.menu summary:hover {
  background-color: var(--custom-light-bg);
}
.navbar{
  padding: 5px 2rem;
}
</style>
