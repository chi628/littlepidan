<script lang="ts" setup>
import Desktop365 from './Desktop365.vue'
import Mobile365 from './Mobile365.vue'
import { useLayout, Breakpoint } from '@/utils/layout'
import { computed } from 'vue'

const { componentObj } = useLayout({
  breakpoints: {
    [Breakpoint.DEAFULT]: Mobile365,
    [Breakpoint.TABLET]: Desktop365,
  },
})

const component = computed(() => componentObj.value)
</script>
<template>
  <div id="my365">
    <component :is="component"></component>
  </div>
</template>
