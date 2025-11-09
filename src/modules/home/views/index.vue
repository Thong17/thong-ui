<template>
  <h1>{{ $t(route.meta.title ?? '') }}</h1>
  <Button>Hello</Button>
  <AutoComplete :options="['Test', 'Test2']" />
</template>

<script setup lang="ts">
  const route = useRoute()
</script>
