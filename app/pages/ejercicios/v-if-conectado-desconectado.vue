<script setup>
import { ref } from "vue";

const estado = ref(true);
</script>
<template>
    <button @click="estado = !estado">
        {{ estado ? "Desconectar" : "Conectar" }}
    </button>
    <p v-if="estado">🟢 Conectado</p>
    <p v-else>🔴 Desconectado</p>
</template>
