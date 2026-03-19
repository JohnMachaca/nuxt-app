<script setup>
import PrimerComponente from "../../components/otros/PrimerComponente";
import { ref } from "vue";
const numero = ref(0);
const aumentar = () => {
    return numero.value++;
};
</script>
<template>
    <PrimerComponente @contador="aumentar" nombre="John"></PrimerComponente>
    {{ numero }}
</template>
