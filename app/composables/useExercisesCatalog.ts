import { computed, ref } from 'vue'
import type { Exercise } from '~/types/exercise'

export const useExercisesCatalog = () => {
  const { data: exercises, pending, error } = useFetch<Exercise[]>('/api/exercises')

  const searchQuery = ref('')
  const selectedTech = ref('')

  const availableTechs = computed(() => {
    const techs = new Set<string>()
    for (const exercise of exercises.value ?? []) {
      for (const tech of exercise.technologies) {
        techs.add(tech)
      }
    }
    return Array.from(techs).sort()
  })

  const filteredExercises = computed(() => {
    const query = searchQuery.value.toLowerCase().trim()
    return (exercises.value ?? []).filter((exercise) => {
      const matchesSearch = !query
        || exercise.title.toLowerCase().includes(query)
        || exercise.slug.toLowerCase().includes(query)
      const matchesTech = !selectedTech.value || exercise.technologies.includes(selectedTech.value)
      return matchesSearch && matchesTech
    })
  })

  const resetFilters = () => {
    searchQuery.value = ''
    selectedTech.value = ''
  }

  return {
    exercises,
    pending,
    error,
    searchQuery,
    selectedTech,
    availableTechs,
    filteredExercises,
    resetFilters
  }
}
