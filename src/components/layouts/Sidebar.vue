<template>
  <div
    class="sidebar bg-background transition-all border-r"
    :style="{ width: appStore.isSidebarOpen ? `${SIDEBAR_EXPAND_WIDTH}px` : `${SIDEBAR_COLLAPSE_WIDTH}px` }"
  >
    <div
      class="grid place-items-center"
      :style="{ width: `${SIDEBAR_COLLAPSE_WIDTH}px`, height: `${SIDEBAR_COLLAPSE_WIDTH}px` }"
    >
      <button variant="ghost" class="rounded-full" @click="appStore.toggleSidebar()">
        <Icon
          icon="local:burger"
          style="width: 24px; height: 24px"
          class="rotate-0 scale-100 transition-all"
          :class="appStore.isSidebarOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'"
        />
        <Icon
          icon="local:close"
          style="width: 24px; height: 24px"
          class="absolute rotate-90 scale-0 transition-all"
          :class="appStore.isSidebarOpen ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { useAppStore } from '@/stores/app'
  import { SIDEBAR_COLLAPSE_WIDTH, SIDEBAR_EXPAND_WIDTH } from './constant'

  const appStore = useAppStore()
</script>

<script lang="ts">
  export default {}
</script>

<style scoped>
  .sidebar {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
