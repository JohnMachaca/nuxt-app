<script setup>
const objeto = {};
objeto["manzana"] = 2;
objeto["pera"] = 1;
objeto["banana"] = 4;
objeto.papaya = 10;
const fruta = "melon";
objeto[fruta] = 2;
const fruta2 = "tomate";
objeto.fruta2 = 8;
//actualizar valor
objeto["manzana"] = objeto["manzana"] + 3;
//si no existe empieza en 0
objeto["durazno"] = (objeto["durazno"] || 0) + 1;
objeto.fresa = (objeto.fresa || 1) + 2;

// Construye un objeto donde cada letra tenga cuántas veces aparece
const letras = ["a", "b", "a", "c", "b"];

const contando = letras.reduce((acu, letra) => {
    acu[letra] = (acu[letra] || 0) + 1;
    return acu;
}, {});
const acumulador = {};

for (let i = 0; i < letras.length; i++) {
    const letra = letras[i];
    acumulador[letra] = (acumulador[letra] || 0) + 1;
}
// 👉 Saca:
//Total (ya sabes 💪)
//Cantidad total de productos (sumar cantidad)
//El producto con mayor subtotal (precio * cantidad)
const productos = [
    { nombre: "Laptop", precio: 1000, cantidad: 1 },
    { nombre: "Mouse", precio: 5000, cantidad: 2 },
    { nombre: "Teclado", precio: 80, cantidad: 3 },
];

const total = productos.reduce((acu, producto) => {
    return acu + producto.precio * producto.cantidad;
}, 0);
const mayor = productos.reduce((acu, producto) => {
    const subtotal1 = producto.precio * producto.cantidad;
    const subtotal2 = acu.precio * producto.cantidad;
    if (subtotal1 < subtotal2) {
        return producto;
    }
    return acu;
});
//ordenat mayot a menor
const productos2 = [
    { nombre: "Laptop", cantidad: 1 },
    { nombre: "Mouse", cantidad: 5 },
    { nombre: "Teclado", cantidad: 3 },
];
const mayor2 = [...productos2].sort((a, b) => a.cantidad - b.cantidad);

const nombres3 = ["zorro", "Águila", "perro", "Gato"];
const ordenado2 = [...nombres3].sort((a, b) => a.localeCompare(b));
</script>
<template>{{ ordenado2 }}</template>
