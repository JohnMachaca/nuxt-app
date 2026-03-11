<script setup>
import {ref} from "vue"
const usuarios = ref([])
const nombre = ref("")

const agregar = ()=>{
  usuarios.value.push(nombre.value)
  nombre.value=""
}

</script>
<template>
<h1>Agregar usuarios</h1>
<input v-model="nombre"></input>
<button @click="agregar">Agregar</button>
<ul>
    <li v-for="usuario in usuarios" :key="usuario">{{usuario}}</li>
</ul>
</template>
