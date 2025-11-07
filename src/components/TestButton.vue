<template>
  <div class="grid place-items-center">
    <p>{{ $t('message.hello', { name: 'Thong' }) }}</p>
    <div>{{ count }}</div>
    <div class="flex gap-1">
      <button @click="count--">-</button>
      <button @click="count++">+</button>
    </div>
  </div>
</template>
<script setup lang="ts">
  const count = ref(0)
</script>
<script lang="ts">
  export default {}
</script>
