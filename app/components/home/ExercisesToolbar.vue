<template>
  <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8">
    <div>
      <h2 class="text-4xl font-black uppercase tracking-tighter bg-brutal-cyan border-4 border-black px-4 py-2 shadow-brutal inline-block rotate-1">
        Lista de Ejercicios
      </h2>
      <p class="mt-4 font-black text-sm uppercase text-gray-600">
        Total: <span class="text-brutal-pink text-xl">{{ total }}</span> ejercicios
      </p>
    </div>

    <div class="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
      <div class="relative flex-grow min-w-[300px]">
        <input
          :value="searchQuery"
          type="text"
          placeholder="BUSCAR EJERCICIO..."
          class="w-full bg-white border-4 border-black p-3 font-black uppercase shadow-brutal focus:translate-x-1 focus:translate-y-1 focus:shadow-none outline-none transition-all placeholder:text-gray-400"
          @input="onSearchInput"
        >
      </div>

      <select
        :value="selectedTech"
        class="bg-brutal-yellow border-4 border-black p-3 font-black uppercase shadow-brutal focus:translate-x-1 focus:translate-y-1 focus:shadow-none outline-none transition-all cursor-pointer"
        @change="onTechChange"
      >
        <option value="">TODAS LAS TECHS</option>
        <option v-for="tech in availableTechs" :key="tech" :value="tech">{{ tech }}</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  total: number
  searchQuery: string
  selectedTech: string
  availableTechs: string[]
}>()

const emit = defineEmits<{
  (e: 'search-change', value: string): void
  (e: 'tech-change', value: string): void
}>()

const onSearchInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('search-change', target.value)
}

const onTechChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('tech-change', target.value)
}
</script>
