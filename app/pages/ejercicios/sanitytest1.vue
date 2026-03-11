<script setup>
import { createClient } from "@sanity/client";

const client = createClient({
    projectId: "lf2mqehc",
    dataset: "production",
    apiVersion: "2023-01-01",
    useCdn: true,
});
const procesadores = await client.fetch(`
  *[_type=="procesadores"]| order(_createdAt desc){
  nombre,
  descripcion,
  precio,
  "imagen":foto.asset->url + "?w=400&h=400&fit=crop&auto=format"
  }
  `);
</script>
<template>
    <h1>procesadores</h1>
    <div v-for="procesador in procesadores" :key="procesador.nombre">
        <h2>{{ procesador.nombre }}</h2>
         <p>{{ procesador.descripcion }}</p>
        <p>{{ procesador.precio }}</p>
        <img :src="procesador.imagen" loading="lazy" with="300" ></img>
    </div>
</template>
