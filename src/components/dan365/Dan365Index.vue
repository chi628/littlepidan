<script lang="ts" setup>
import Desktop365 from './Desktop365.vue';
import Mobile365 from './Mobile365.vue';
import { useLayout } from '@/utils/layout';
import { computed } from 'vue';

const { isMobile } = useLayout();

const component = computed(() => {
  return isMobile.value ? Mobile365 : Desktop365;
});
</script>
<template>
  <component :is="component"></component>
</template>
