<script setup lang="ts">
import { RouterLink } from "vue-router"
</script>

<template>
  <header class="my-header">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/apidemo">API-demo</RouterLink>
      </nav>
  </header>
</template>

<style>
.my-header {
  background-color: gray;
  line-height: 1.5;
  height: 100px;
}
</style>