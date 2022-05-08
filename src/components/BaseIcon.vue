<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  icon: {
    type: String,
    required: true
  }
})
const iconClass = computed(() => `iconfont icon-${props.icon}`)
</script>

<template>
  <span :class="iconClass" w:text="base"></span>
</template>

<style scoped></style>
