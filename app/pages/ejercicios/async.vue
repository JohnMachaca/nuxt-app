<script setup>
import { ref, onMounted } from "vue";

const usuarios = ref([]);
onMounted(async () => {
    try {
        const res = await fetch("https://jsonplacehoslder.typicode.com/users");
        if (!res.ok) throw new Error("Error al obtener los datos");

        usuarios.value = await res.json();
    } catch (error) {
        console.error(error + " john");
    }
});
</script>
<template>
    <p>hola</p>
    <ul>
        <li v-for="usuario in usuarios" :key="usuario.id">
            {{ usuario.name }} - {{ usuario.email }}
        </li>
    </ul>
    <p>mundo</p>
</template>
