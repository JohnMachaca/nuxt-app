<template>
  <section class="relative overflow-hidden bg-brutal-yellow border-b-8 border-black py-20 px-6 sm:px-12">
    <!-- Abstract Geometric Elements -->
    <div class="absolute top-10 right-10 w-32 h-32 bg-brutal-pink border-4 border-black rotate-12 shadow-brutal opacity-80"></div>
    <div class="absolute bottom-10 left-10 w-24 h-24 bg-brutal-cyan border-4 border-black -rotate-6 shadow-brutal opacity-80 rounded-full"></div>
    <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-brutal-green border-4 border-black rotate-45 shadow-brutal opacity-60"></div>

    <div class="relative z-10 max-w-4xl mx-auto text-center">
      <h1 class="text-6xl md:text-8xl font-black uppercase tracking-tighter text-black mb-6 drop-shadow-[4px_4px_0px_#000]">
        CÓDIGO <br />
        <span class="bg-black text-white px-4">EJERCICIOS</span>
      </h1>
      <p class="text-xl md:text-2xl font-bold text-black mb-10 max-w-2xl mx-auto bg-white border-4 border-black p-4 shadow-brutal inline-block">
        Explora la colección de ejercicios de programación ordenados por su creación.
      </p>
      <div class="flex flex-wrap justify-center gap-6 mt-8">
        <div class="bg-brutal-orange p-4 border-4 border-black shadow-brutal transform -rotate-2 hover:rotate-0 transition-transform cursor-default">
          <span class="font-black text-xl uppercase">Actualizado</span>
        </div>
        <div class="bg-brutal-blue p-4 border-4 border-black shadow-brutal transform rotate-3 hover:rotate-0 transition-transform cursor-default text-white">
          <span class="font-black text-xl uppercase">Nuxt 3 + Vue 3</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No props needed for static hero
</script>
