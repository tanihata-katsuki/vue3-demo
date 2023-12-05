<script setup lang="ts">
import { onBeforeUpdate, onMounted } from 'vue';

const props = defineProps<{
  count: number
}>()

onMounted(() => {
  console.log(`(子)onMounted: count=${props.count}`)
})

onBeforeUpdate(() => {
  console.log(`(子)onBeforeUpdate: count=${props.count}`)
})

</script>

<template>
  <div>
    <button class="child-button">Count is: {{ props.count }}</button>
    <span>子コンポーネント</span>
  </div>
</template>

<style scoped>
.child-button {
  height: 30px;
  width: 200px;
  margin: 10px;
}
</style>