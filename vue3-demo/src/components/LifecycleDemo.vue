<script setup lang="ts">
import { onBeforeUpdate, onMounted, ref } from 'vue';
import LifecycleChild from '@/components/lifecycledemo/LifecycleChild.vue';

// リアクティブなデータ
const count = ref(0)

// データに変更を加えるハンドラー
function increment() {
  count.value++
}

// マウントが完了した直後に実行される
onMounted(() => {
  console.log(`(親)onMounted: count=${count.value}`)
})

onBeforeUpdate(() => {
  console.log(`(親)onBeforeUpdate: count=${count.value}`)
})

</script>

<template>
  <div>
    <h2>ライフサイクル</h2>
    <button class="count-button" @click="increment">Count is: {{ count }}</button>
    <span>親コンポーネント</span>
    <LifecycleChild :count="count"/>
  </div>
</template>

<style scoped>
.count-button {
  height: 30px;
  width: 200px;
  margin: 10px;
}
</style>