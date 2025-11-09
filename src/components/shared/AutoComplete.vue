<script setup lang="ts">
  import { ref, computed } from 'vue'

  const props = defineProps<{
    options: string[]
  }>()

  const allOptions = ref(props.options)

  const tags = ref<string[]>([])
  const inputValue = ref('')
  const showDropdown = ref(false)

  function addTag(tag: string) {
    if (tag && !tags.value.includes(tag)) {
      tags.value.push(tag)
    }
    inputValue.value = ''
  }

  function removeTag(index: number) {
    tags.value.splice(index, 1)
  }

  const filteredOptions = computed(() => {
    const term = inputValue.value.toLowerCase()
    return allOptions.value.filter(opt => opt.toLowerCase().includes(term) && !tags.value.includes(opt))
  })

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault()
      addTag(inputValue.value)
    } else if (e.key === 'Backspace' && !inputValue.value && tags.value.length) {
      tags.value.pop()
    }
  }
</script>

<template>
  <div class="relative">
    <div
      class="flex flex-wrap items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-xl p-2 focus-within:ring-2 focus-within:ring-blue-500 bg-white dark:bg-gray-900"
    >
      <div
        v-for="(tag, index) in tags"
        :key="index"
        class="flex items-center gap-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
      >
        <span>{{ tag }}</span>
        <button class="hover:text-red-500 focus:outline-none" @click="removeTag(index)">✕</button>
      </div>

      <input
        v-model="inputValue"
        placeholder="Type or select..."
        class="flex-grow bg-transparent outline-none min-w-[100px] text-gray-700 dark:text-gray-200"
        @focus="showDropdown = true"
        @blur="setTimeout(() => (showDropdown = false), 100)"
        @keydown="onKeyDown"
      />
    </div>

    <!-- Dropdown List -->
    <div
      v-if="showDropdown && filteredOptions.length"
      class="absolute left-0 mt-1 w-full max-h-48 overflow-auto rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg z-10"
    >
      <div
        v-for="(option, index) in filteredOptions"
        :key="index"
        class="px-3 py-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-700 dark:text-gray-200"
        @mousedown.prevent="addTag(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>
