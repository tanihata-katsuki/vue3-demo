<script setup lang="ts">
import { ref, onMounted } from 'vue'

// リアクティブな状態
const count = ref(0)

// 状態を変更し、更新をトリガーする関数。
function increment() {
  count.value++
}

// ライフサイクルフック
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <div>
    <button class="composition-button" @click="increment">Count is: {{ count }}</button>
    <span>composition-API</span>
  </div>
</template>

<style scoped>
.composition-button {
  height: 30px;
  width: 200px;
  margin: 10px;
}
</style>
