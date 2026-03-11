<script setup>
import {ref} from "vue"
const usuarios = ref([])
const nombre = ref("")

const agregar =()=>{
  usuarios.value.push(nombre.value)
  nombre.value=""

}
</script>
<template>
<h1>Agregar usuario</h1>
<input v-model="nombre" @keyup.enter="agregar"></input>
<button @click="agregar">Agregar</button>
<h2>Mostrar usuarios</h2>
<ul>
    <li v-for="usuario in usuarios" :key="usuario">{{usuario}}   </li>
</ul>
</template>
