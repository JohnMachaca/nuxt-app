<template>
  <header class="bg-black text-white border-b-8 border-brutal-cyan">
    <div class="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex items-center justify-between gap-4">
      <NuxtLink to="/" class="bg-brutal-yellow text-black px-4 py-2 border-4 border-black shadow-brutal-sm font-black uppercase tracking-wider hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
        Nuxt Exercises
      </NuxtLink>
      <nav class="flex items-center gap-3 sm:gap-4">
        <NuxtLink to="/" class="border-2 border-white px-3 py-1 font-black uppercase text-xs sm:text-sm hover:bg-white hover:text-black transition-colors">
          Inicio
        </NuxtLink>
        <NuxtLink to="/" class="border-2 border-white px-3 py-1 font-black uppercase text-xs sm:text-sm hover:bg-white hover:text-black transition-colors">
          Catálogo
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
