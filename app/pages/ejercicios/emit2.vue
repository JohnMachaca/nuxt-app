<script setup lang="ts">
import { ref } from "vue";
import PrimerComponente from "../../components/otros/PrimerComponente";
const info = {
    title: "Ejercicio de Emits 2",
    description:
        "Este ejercicio demuestra cómo usar emits personalizados para comunicar componentes hijos con padres de forma avanzada.",
};
const numero = ref(0);
const ejecuta = (number) => {
    numero.value = number;
};
</script>

<template>
    <PrimerComponente @click="ejecuta"></PrimerComponente>
    <p>{{ numero }}</p>
</template>
