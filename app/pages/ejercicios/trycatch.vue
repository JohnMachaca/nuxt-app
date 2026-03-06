<script setup>
const usuarios = ref("");
onMounted(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    usuarios.value = await res.json();
});
</script>
<template>
    <ul>
        <li v-for="usuario in usuarios" :key="usuario.id"">{{usuario.name}} - {{usuario.email}}</li>
    </ul>
</template>
