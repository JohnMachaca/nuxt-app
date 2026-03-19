<template>
  <article
    role="link"
    tabindex="0"
    @click="goToExercise"
    @keyup.enter="goToExercise"
    @keyup.space.prevent="goToExercise"
    class="group relative border-4 border-black p-6 shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all h-full flex flex-col text-black z-10 cursor-pointer"
    :class="cardBgColor"
  >
    <div class="flex-grow">
      <div class="flex justify-between items-start mb-4">
        <h3 class="text-2xl font-black uppercase tracking-tight text-black line-clamp-2 leading-none">
          {{ exercise.title }}
        </h3>
        <span class="bg-brutal-cyan text-[10px] font-black uppercase px-2 py-1 border-2 border-black whitespace-nowrap ml-2">
          {{ formattedDate }}
        </span>
      </div>
      
      <p class="text-gray-700 font-bold mb-6 line-clamp-3 text-sm">
        Haz clic para ver el código fuente y el resultado funcional de este ejercicio.
      </p>
      
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="tech in exercise.technologies" :key="tech" class="bg-brutal-green text-[10px] font-black uppercase px-2 py-0.5 border-2 border-black shadow-brutal-sm">
          {{ tech }}
        </span>
      </div>
    </div>
    
    <div class="mt-auto pt-4 border-t-2 border-black/10 flex items-center justify-between group-hover:bg-black group-hover:text-white transition-colors -mx-6 -mb-6 p-4">
      <span class="font-black uppercase text-sm">Explorar código</span>
      <span class="text-2xl">→</span>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  exercise: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
})

const colors = [
  'bg-white',
  'bg-brutal-yellow',
  'bg-brutal-cyan',
  'bg-brutal-pink',
  'bg-brutal-orange',
  'bg-brutal-green',
  'bg-brutal-blue text-white'
]

const cardBgColor = computed(() => {
  return colors[props.index % colors.length]
})

const goToExercise = () => {
  navigateTo(`/ejercicio/${props.exercise.slug}`)
}

const formattedDate = computed(() => {
  const date = new Date(props.exercise.createdAt)
  return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: '2-digit' })
})
</script>
