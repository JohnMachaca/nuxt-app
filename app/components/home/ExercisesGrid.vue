<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    <NeobrutalistExerciseCard
      v-for="(exercise, index) in exercises"
      :key="exercise.slug"
      :exercise="exercise"
      :index="index"
    />
  </div>
</template>

<script setup lang="ts">
import NeobrutalistExerciseCard from '~/components/neobrutalist/ExerciseCard.vue'
import type { Exercise } from '~/types/exercise'

defineProps<{
  exercises: Exercise[]
}>()
</script>
