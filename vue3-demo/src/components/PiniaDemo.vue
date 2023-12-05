<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

// リアクティブなデータ
const countStore = useCounterStore()

const count = countStore.count

console.log(count)

</script>

<template>
  <div>
    {{ count }}
  </div>
</template>

<style scoped>
</style>