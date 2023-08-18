<script lang="ts" setup>
import DesktopBD from './DesktopBD.vue';
import MobileBD from './MobileBD.vue';
import { useLayout } from '@/utils/layout';
import { computed } from 'vue';

const { isMobile } = useLayout();

const component = computed(() => {
  return isMobile.value ? MobileBD : DesktopBD;
});
</script>
<template>
  <component :is="component"></component>
</template>
