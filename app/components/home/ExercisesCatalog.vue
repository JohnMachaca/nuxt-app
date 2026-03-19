<template>
  <main class="max-w-7xl mx-auto py-16 px-6 sm:px-12">
    <HomeExercisesToolbar
      :total="filteredExercises.length"
      :search-query="searchQuery"
      :selected-tech="selectedTech"
      :available-techs="availableTechs"
      @search-change="searchQuery = $event"
      @tech-change="selectedTech = $event"
    />

    <HomeExercisesLoading v-if="pending" />
    <HomeExercisesError v-else-if="error" />
    <HomeExercisesGrid v-else-if="filteredExercises.length > 0" :exercises="filteredExercises" />
    <HomeExercisesEmpty v-else @reset="resetFilters" />
  </main>
</template>

<script setup lang="ts">
import HomeExercisesToolbar from '~/components/home/ExercisesToolbar.vue'
import HomeExercisesLoading from '~/components/home/ExercisesLoading.vue'
import HomeExercisesError from '~/components/home/ExercisesError.vue'
import HomeExercisesGrid from '~/components/home/ExercisesGrid.vue'
import HomeExercisesEmpty from '~/components/home/ExercisesEmpty.vue'
import { useExercisesCatalog } from '~/composables/useExercisesCatalog'

const {
  pending,
  error,
  searchQuery,
  selectedTech,
  availableTechs,
  filteredExercises,
  resetFilters
} = useExercisesCatalog()
</script>
