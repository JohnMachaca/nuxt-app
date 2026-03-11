<script setup>
import { ref } from "vue";
const usuarios = ref([{ name: "john" }, { name: "Mathi" }, { name: "Elvira" }]);
</script>
<template>
    <p v-if="usuarios.length === 0">Lista vacía</p>
    <ul v-else>
        <li v-for="usuario in usuarios">{{ usuario.name }}</li>
    </ul>
</template>
