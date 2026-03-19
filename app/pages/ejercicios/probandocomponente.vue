<script setup>
import PrimerComponente from "../../components/otros/PrimerComponente";
const recibirSaludo = (mensaje, mensaje2) => {
    console.log(mensaje + mensaje2);
};
</script>
<template>
    <PrimerComponente @saludar="recibirSaludo" nombre="John"></PrimerComponente>
</template>
