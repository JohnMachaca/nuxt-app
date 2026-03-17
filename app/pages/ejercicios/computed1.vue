<script setup>
import Decimal from "decimal.js"
import { ref, computed } from "vue";
const precio = ref(0);
const cantidad = ref(0);

const precioFinal= computed(()=>{ return new Decimal(precio.value).times(cantidad.value)})
</script>
<template>
<h1>Computed</h1>
<input v-model.number="precio" type="number"></input>
<input v-model.number="cantidad" type="number"></input>
<p>{{precioFinal.toFixed(2)}}</p>
</template>
