<template>
  <div class="min-h-screen bg-gray-100 font-mono pb-20">
    <nav class="bg-black text-white p-6 border-b-8 border-brutal-pink">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="bg-white text-black px-4 py-2 border-4 border-black shadow-brutal hover:bg-brutal-cyan transition-colors font-black uppercase flex items-center gap-2">
          <span>←</span> Regresar
        </NuxtLink>
        <h1 class="text-xl md:text-3xl font-black uppercase tracking-tight text-center truncate px-4">
          {{ currentExercise?.title || 'Cargando...' }}
        </h1>
        <div class="hidden md:flex gap-4">
          <div class="bg-brutal-yellow text-black px-3 py-1 border-2 border-white font-black uppercase text-xs">
            {{ formattedDate }}
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto mt-12 px-6">
      <div v-if="pending" class="flex justify-center py-20">
        <div class="w-16 h-16 border-8 border-black border-t-brutal-pink rounded-full animate-spin"></div>
      </div>

      <div v-else-if="currentExercise">
        <div class="mb-12 bg-white border-4 border-black p-8 shadow-brutal relative overflow-hidden">
          <div class="absolute top-0 right-0 w-24 h-24 bg-brutal-yellow border-l-4 border-b-4 border-black -mr-8 -mt-8 rotate-45"></div>
          <h2 class="text-4xl font-black uppercase mb-4">{{ currentExercise.title }}</h2>
          <p class="text-xl font-bold text-gray-700 max-w-3xl mb-6">
            {{ currentExercise.description }}
          </p>
          <div class="flex flex-wrap gap-3">
            <span v-for="tech in currentExercise.technologies" :key="tech" class="bg-brutal-cyan border-2 border-black px-4 py-1 font-black uppercase text-sm shadow-brutal-sm">
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <section>
            <div class="flex items-center gap-4 mb-6">
              <h3 class="text-3xl font-black uppercase bg-brutal-green border-4 border-black px-4 py-1 shadow-brutal rotate-1">
                Resultado
              </h3>
            </div>
            <div class="bg-white border-8 border-black shadow-brutal-lg h-[600px] overflow-hidden relative group">
              <iframe 
                :src="`/ejercicios/${currentExercise.slug}`" 
                class="w-full h-full border-none bg-white"
                title="Preview"
              ></iframe>
              <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a 
                  :href="`/ejercicios/${currentExercise.slug}`" 
                  target="_blank" 
                  class="bg-black text-white px-3 py-1 border-2 border-white text-xs font-black uppercase shadow-brutal-sm"
                >
                  Abrir en nueva pestaña
                </a>
              </div>
            </div>
          </section>

          <section>
            <div class="flex items-center gap-4 mb-6">
              <h3 class="text-3xl font-black uppercase bg-brutal-pink border-4 border-black px-4 py-1 shadow-brutal -rotate-1">
                Código Fuente
              </h3>
            </div>
            <NeobrutalistCodeHighlight 
              :code="currentExercise.content" 
              :lang="currentExercise.fileName.split('.').pop()" 
            />
          </section>
        </div>
      </div>
      <div v-else class="bg-white border-4 border-black p-10 shadow-brutal text-center">
        <h2 class="text-3xl mb-4">Ejercicio no encontrado</h2>
        <NuxtLink to="/" class="inline-flex bg-brutal-cyan border-4 border-black px-5 py-2 font-black uppercase shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
          Volver al listado
        </NuxtLink>
      </div>

      <div v-if="!pending && currentExercise" class="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t-8 border-black pt-12">
        <NuxtLink
          v-if="prevExercise"
          :to="`/ejercicio/${prevExercise.slug}`"
          class="w-full md:w-auto bg-brutal-orange p-6 border-4 border-black shadow-brutal hover:bg-black hover:text-white transition-all group"
        >
          <p class="font-black text-xs uppercase mb-2 opacity-70">← Ejercicio anterior</p>
          <h4 class="text-xl font-black uppercase truncate max-w-[300px]">{{ prevExercise.title }}</h4>
        </NuxtLink>
        <button
          v-else
          disabled
          class="w-full md:w-auto bg-gray-300 text-gray-500 p-6 border-4 border-black shadow-brutal opacity-70 cursor-not-allowed text-left"
        >
          <p class="font-black text-xs uppercase mb-2">Ejercicio anterior</p>
          <h4 class="text-xl font-black uppercase truncate max-w-[300px]">No disponible</h4>
        </button>

        <div class="flex flex-wrap justify-center gap-2">
          <span v-for="tech in currentExercise.technologies" :key="tech" class="bg-brutal-cyan border-2 border-black px-3 py-1 font-black uppercase text-xs shadow-brutal-sm">
            {{ tech }}
          </span>
        </div>

        <NuxtLink
          v-if="nextExercise"
          :to="`/ejercicio/${nextExercise.slug}`"
          class="w-full md:w-auto bg-brutal-blue text-white p-6 border-4 border-black shadow-brutal hover:bg-white hover:text-black transition-all group text-right"
        >
          <p class="font-black text-xs uppercase mb-2 opacity-70">Siguiente ejercicio →</p>
          <h4 class="text-xl font-black uppercase truncate max-w-[300px]">{{ nextExercise.title }}</h4>
        </NuxtLink>
        <button
          v-else
          disabled
          class="w-full md:w-auto bg-gray-300 text-gray-500 p-6 border-4 border-black shadow-brutal opacity-70 cursor-not-allowed text-right"
        >
          <p class="font-black text-xs uppercase mb-2">Siguiente ejercicio</p>
          <h4 class="text-xl font-black uppercase truncate max-w-[300px]">No disponible</h4>
        </button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))

const { data: exercises, pending } = await useFetch('/api/exercises')

const currentExercise = computed(() => {
  if (!exercises.value) return null
  return exercises.value.find(e => e.slug === slug.value)
})

const currentIndex = computed(() => {
  if (!exercises.value) return -1
  return exercises.value.findIndex(e => e.slug === slug.value)
})

const prevExercise = computed(() => {
  if (currentIndex.value > 0) {
    return exercises.value[currentIndex.value - 1]
  }
  return null
})

const nextExercise = computed(() => {
  if (currentIndex.value !== -1 && currentIndex.value < exercises.value.length - 1) {
    return exercises.value[currentIndex.value + 1]
  }
  return null
})

const formattedDate = computed(() => {
  if (!currentExercise.value) return ''
  const date = new Date(currentExercise.value.createdAt)
  return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: '2-digit' })
})
</script>
