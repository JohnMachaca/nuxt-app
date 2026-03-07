<script setup>
import { ref } from "vue";

const cambiar = ref(false);

function mostrar() {
    cambiar.value = !cambiar.value;
}
</script>

<template>
    <h1>Mostrar ocultar</h1>

    <button
        class="px-3 py-1 bg-blue-500 rounded text-white relative"
        @click="mostrar"
    >
        <Transition
            mode="out-in"
            enter-active-class="transition duration-200"
            leave-active-class="transition duration-200"
            enter-from-class="opacity-0"
            leave-to-class="opacity-0"
        >
            <span :key="cambiar">
                {{ cambiar ? "Ocultar" : "Mostrar" }}
            </span>
        </Transition>
    </button>
</template>
