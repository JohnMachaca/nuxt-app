<script setup>
import { ref } from "vue";

const nombres = ["John", "Dace", "Mathi", "Elvira", "Carlos", "Eve", "Jhose"];
const frutas = ["Manzana", "Pera", "Mango", "Durazno"];
const usuarios = [
    { id: 1, nombre: "John", edad: 34 },
    { id: 2, nombre: "Eve", edad: 32 },
    { id: 3, nombre: "Jhose", edad: 28 },
];

const tareas = ref([
    { id: 1, texto: "Estudiar vue" },
    { id: 2, texto: "Hacer ejercicio" },
    { id: 3, texto: "Leer documentación" },
]);

const eliminar = (id) => {
    // Corregido: quitamos los paréntesis extra de tarea
    tareas.value = tareas.value.filter((tarea) => tarea.id !== id);
};
const tarea =ref("")
const agregar=()=>{
tareas.value.push({id:Date.now(), texto:tarea.value})
tarea.value=""
}
</script>

<template>
    <div class="p-6">
        <h1 class="text-3xl font-bold mb-4">Ejercicios de v-for</h1>

        <h2 class="text-xl font-semibold mt-6 mb-2">Ejercicio básico</h2>
        <ul class="list-disc pl-6">
            <li v-for="nombre in nombres" :key="nombre">{{ nombre }}</li>
        </ul>

        <br />

        <h2 class="text-xl mb-2 font-bold">Ejercicio con índice</h2>
        <ul class="list-disc ml-6">
            <li v-for="(fruta, index) in frutas" :key="index">
                {{ index + 1 }} - {{ fruta }}
            </li>
        </ul>

        <br />

        <h2 class="text-xl font-bold mb-2">Ejercicios con objetos</h2>
        <ul class="ml-6">
            <li v-for="usuario in usuarios" :key="usuario.id">
                {{ usuario.id }}. {{ usuario.nombre }} - {{ usuario.edad }} años
            </li>
        </ul>

        <br />

        <h2 class="text-xl font-bold mb-2">Ejercicio práctico tipo app</h2>
        <input v-model="tarea" class="border px-2 py-1" ></input>
        <button @click="agregar">Agregar</button>
        <ul class="list-disc ml-6">
            <li v-for="tarea in tareas" :key="tarea.id" class="mb-2">
                {{ tarea.texto }}
                <button
                    @click="eliminar(tarea.id)"
                    class="bg-red-500 hover:bg-red-600 ml-3 text-white py-1 px-3 rounded transition"
                >
                    Eliminar
                </button>
            </li>
        </ul>
    </div>
</template>
