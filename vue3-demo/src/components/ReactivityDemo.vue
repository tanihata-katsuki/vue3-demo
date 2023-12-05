<script setup lang="ts">
import { ref } from 'vue';

// リアクティブなデータ
const count = ref<number>(0)

const count2 = ref<number>()

console.log(count) // { value: 0 }
console.log(count.value) // 0
console.log(typeof count2.value)

</script>

<template>
  <div>
    {{ count }}
  </div>
</template>

<style scoped>
</style>