<script setup>
defineProps({
    nombre: String,
});
const emit = defineEmits(["click"]);
const disparar = () => {
    emit("click", 5);
};
</script>

<template>
    <button @click="disparar">Enviar</button>
</template>
