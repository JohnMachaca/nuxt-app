<template>
  <div class="bg-white border-8 border-black p-20 shadow-brutal text-center">
    <h3 class="text-3xl font-black uppercase mb-4">SIN RESULTADOS</h3>
    <p class="text-xl font-bold uppercase">No hay ejercicios que coincidan con tu búsqueda.</p>
    <button
      class="mt-6 bg-brutal-cyan border-4 border-black px-6 py-2 font-black uppercase shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
      @click="$emit('reset')"
    >
      Limpiar filtros
    </button>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'reset'): void
}>()
</script>
