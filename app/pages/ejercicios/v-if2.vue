<script setup>
import { ref } from "vue";
const cambiar = ref(false);
const change = () => {
    cambiar.value = !cambiar.value;
};
</script>
<template>
    <h1>Mostrar ocultar</h1>
    <button @click="change">
        {{ cambiar ? "ocultar" : "mostrar" }}
    </button>
    <p v-if="cambiar">Holsa John</p>
</template>
