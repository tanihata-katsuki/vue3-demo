<script lang="ts">
export default {
  // data() で返すプロパティはリアクティブな状態になり、
  // `this` 経由でアクセスすることができます。
  data() {
    return {
      count: 0
    }
  },

  // メソッドの中身は、状態を変化させ、更新をトリガーさせる関数です。
  // 各メソッドは、テンプレート内のイベントハンドラーにバインドすることができます。
  methods: {
    increment() {
      this.count++
    }
  },

  // ライフサイクルフックは、コンポーネントのライフサイクルの
  // 特定のステージで呼び出されます。
  // 以下の関数は、コンポーネントが「マウント」されたときに呼び出されます。
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <div>
    <button class="options-button" @click="increment">Count is: {{ count }}</button>
    <span>options-API</span>
  </div>
</template>

<style scoped>
.options-button {
  height: 30px;
  width: 200px;
  margin: 10px;
}
</style>