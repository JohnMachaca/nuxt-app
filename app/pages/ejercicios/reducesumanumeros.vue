<script setup>
const numeros = [1, 2, 3, 4,4]

const suma = numeros.reduce((ac, num)=>{return ac*num},1)
</script>
<template>{{ suma }}</template>

