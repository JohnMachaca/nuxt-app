<scrip setup lang="ts">
const ejercicios = [
    {
        nombre: "form-watch",
        ruta: "/ejercicios/form-watch",
    },
    {
        nombre: "Holamundo",
        ruta: "/ejercicios/holamundo",
    },
    {
        nombre: "v-for",
        ruta: "/ejercicios/v-for",
    },
];
</scrip>
<template>
    <h1>Hola mundo soy el index de pages</h1>
    <ul>
        <li><NuxtLink to="/ejercicios/form-watch">form-watch</NuxtLink></li>
        <li><NuxtLink to="/ejercicios/holamundo">Holamundo</NuxtLink></li>
    </ul>
</template>
