<script setup lang="ts">
//ruta automatizada
//
const router = useRouter();
const rutas = router.getRoutes();
</script>
<template>
    <h1 class="text-3xl mb-6">Hola mundo soy el index de pages</h1>

    <h2 class="text-xl mb-2">Ruta automatizada</h2>
    <ul class="list-disc pl-6">
        <li v-for="ruta in rutas" :key="ruta.path">
            <NuxtLink :to="ruta.path">{{ ruta.path }}</NuxtLink>
        </li>
    </ul>
</template>
