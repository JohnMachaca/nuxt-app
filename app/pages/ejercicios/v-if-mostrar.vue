<script setup>
import { ref } from "vue";
const cambiar = ref(false);
function mostrar() {
    cambiar.value = !cambiar.value;
}
</script>
<template>
    <h1>Mostrar ocultar</h1>
    <button class="px-3 py-1 bg-blue-500 rounded text-white" @click="mostrar">
        {{ cambiar ? "Ocultar" : "Mostrar" }}
    </button>
    <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
    >
        <h2 v-if="cambiar">Hola me muestro</h2>
    </Transition>
</template>
