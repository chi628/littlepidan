<script setup lang="ts">
import DesktopNav from './DesktopNav.vue'
import MobileNav from './MobileNav.vue'
import MenuHamburger from './MenuHamburger.vue'
import { computed, onBeforeMount } from 'vue'
import { useOpenMenu } from '@/stores/menu'
import { useLayout, Breakpoint } from '@/utils/layout'

const store = useOpenMenu()

const { isMobile, componentObj } = useLayout({
  breakpoints: {
    [Breakpoint.DEAFULT]: MobileNav,
    [Breakpoint.TABLET]: DesktopNav,
  },
})
const component = computed(() => componentObj.value)
</script>
<template>
  <component :is="component"></component>
</template>
