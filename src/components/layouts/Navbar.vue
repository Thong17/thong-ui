<template>
  <nav class="bg-background px-5">
    <div class="border-b flex justify-between items-center" :style="{ height: `${NAVBAR_HEIGHT}px` }">
      <img :src="CONNECT_VENDOR_ICON" alt="connect vendor" width="190px" class="px-3" />
      <div class="flex gap-1 items-center">
        <slot></slot>

        <AppProfile />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import CONNECT_VENDOR_ICON from '@/assets/logos/connect-vendor.png'
  import AppProfile from '@/components/core/AppProfile.vue'
  import { NAVBAR_HEIGHT } from './constant'
</script>

<script lang="ts">
  export default {}
</script>
