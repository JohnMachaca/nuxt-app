<script setup>
const usuarios = ref([
    { name: "John", activo: true },
    { name: "Mathi", activo: false },
    { name: "Elvira", activo: true },
    { name: "Carlos", activo: false },
]);
</script>
<template>
    <h2>Usuarios activos</h2>
    <ul v-if="usuarios.activo = true">
        <li v-for="usuario in usuarios" :key="usuario.name">{{ usuario }}</li>
    </ul>
</template>
