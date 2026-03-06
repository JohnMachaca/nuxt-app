<script setup>
import {ref} from "vue"
const nombres = ["John", "Dace", "Mathi", "Elvira", "Carlos", "Eve", "Jhose"];
const frutas = ["Manzana", "Pera", "Mango", "Durazno"];
const usuarios =[{id:1, nombre:"John", edad:34},{id:2, nombre:"Eve", edad:32},{id:3, nombre:"Jhose", edad:28}]
const tareas = ref([{id:1, texto:"Estudiar vue"},{id:2, texto:"Hacer ejercicio"},{id:3, texto:"Leer documentación"},])
</script>
<template>
    <h1 class="text-3xl font-bold mb-4">Ejercicios de v-for</h1>
    <h2 class="text-xl font-semibold mt-6 mb-2">Ejercicio básico</h2>
    <ul class="list-disc pl-6">
        <li v-for="nombre in nombres">{{ nombre }}</li>
    </ul>
   <br></br>
    <h2 class="text-xl mb-2 font-bold">Ejercicio con índice</h2>
    <ul class="list-disc ml-6">
        <li v-for="(fruta, index) in frutas">{{ index + 1 }}-{{ fruta }}</li>
    </ul>
    <br></br>
<h2 class="text-xl font-bold mb-2">Ejercicios con objetos</h2>
<ul class=" ml-6">
    <li v-for="usuario in usuarios " :key="usuario.id">{{usuario.id}}. {{usuario.nombre}} {{usuario.edad}} años</li>
</ul>
<br></br>
<h2 class="text-xl font-bold mb-2">Ejercicio práctico tipo app</h2>
<ul class="list-disc ml-6">
    <li class="" v-for="tarea in tareas" :key="tarea.id">{{tarea.texto}}<button @click="eliminar" class="bg-blue-500 ml-3 text-white pt-2 pb-2 pl-4 pr-4 rounded">Eliminar</button></li>
</ul>
</template>
