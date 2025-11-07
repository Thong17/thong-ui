<template>
  <nav class="bg-background px-5">
    <div class="border-b flex justify-between items-center" :style="{ height: `${NAVBAR_HEIGHT}px` }">
      <div class="flex gap-1 items-center">
        <slot></slot>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import { NAVBAR_HEIGHT } from './constant'
</script>

<script lang="ts">
  export default {}
</script>
