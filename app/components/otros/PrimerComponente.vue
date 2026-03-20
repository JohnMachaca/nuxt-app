<script setup>
defineProps({
    nombre: String,
}); //s
const emit = defineEmits(["click"]);
const disparar = () => {
    emit("click", 5);
};
</script>

<template>
    <button @click="disparar">Enviar</button>
</template>
