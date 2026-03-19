<script setup>
defineProps({
    nombre: String,
});
const emit = defineEmits(["saludar"]);

const enviar = () => {
    emit("saludar", "Hola soy John", "Soy Mathi");
};
</script>
<template>
    <button @click="enviar">Enviar</button>
</template>
