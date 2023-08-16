<script setup lang="ts">
import DesktopNav from './DesktopNav.vue'
import MobileNav from './MobileNav.vue'
import MenuHamburger from './MenuHamburger.vue'
import { computed, onBeforeMount } from 'vue'
import { useLayout, Breakpoint } from '../../utils/layout'
import { useOpenMenu } from '@/stores/menu'

const store = useOpenMenu()

const isMobile = computed(() => window.innerWidth < 1024)

onBeforeMount(() => {
  if (isMobile.value) {
    store.isOpen = false
  }
})

const component = computed(() => {
  if (isMobile.value) {
    // return store.isOpenMenu ? MobileNav : MenuHamburger
    return MobileNav
  } else {
    return DesktopNav
  }
})
</script>
<template>
  <component :is="component"></component>
</template>
