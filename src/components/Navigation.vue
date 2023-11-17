<script setup>
import { RouterLink } from 'vue-router'


</script>

<template>

    <nav>
       <RouterLink to="/">Home</RouterLink>
       <RouterLink to="/about">About</RouterLink>
    </nav>


</template>


<style scoped>

    nav {
        display: flex;
        gap: 1rem;
        width: 100%;
    
    }

</style>