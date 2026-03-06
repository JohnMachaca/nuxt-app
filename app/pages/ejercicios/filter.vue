<script setup>
const frutas = ["mango", "fresa", "manzana", "plátano"];
//filtrar frutas que empiezan con letra "m"
const frutasM = frutas.filter((fruta) => fruta.startsWith("m"));

const productos = [
    { id: 1, nombre: "Laptop", precio: 3000 },
    { id: 2, nombre: "Mouse", precio: 50 },
    { id: 3, nombre: "Monitor", precio: 800 },
];
//filtrar prodcutos con precio mayor a 500
const productosF = productos.filter((producto) => producto.precio > 500);
</script>
<template>
    <p>{{ frutasM }}</p>
    <p>{{ productosF }}</p>
</template>
