<template>
  <div
    class="navbar bg-base-100 shadow-sm glass-border-b top-0 bg-glass text-desc fixed z-1"
  >
    <div class="navbar-start flex-grow">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow bg-default rounded-lg"
        >
          <li class="text-base"><a class="rounded-xl">Inicio</a></li>
          <li class="text-base">
            <a class="rounded-xl">Recursos</a>
            <ul class="p-2">
              <li class="text-base"><a class="rounded-xl">Graficos</a></li>
              <li class="text-base"><a class="rounded-xl">Documentación</a></li>
            </ul>
          </li>
          <li class="text-base"><a class="rounded-xl">Contacto</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost text-2xl text-cian">RDC</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li class="text-base"><a class="rounded-xl">Inicio</a></li>
        <li class="text-base">
          <details>
            <summary class="rounded-xl">Recursos</summary>
            <ul class="p-2 bg-default mt-0.5 rounded-lg">
              <li class="text-base"><a class="rounded-xl">Graficos</a></li>
              <li class="text-base"><a class="rounded-xl">Documentación</a></li>
            </ul>
          </details>
        </li>
        <li class="text-base"><a class="rounded-xl">Contacto</a></li>
      </ul>
    </div>
  </div>
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
</style>
