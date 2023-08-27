<script setup lang="ts">
import { ref } from "vue"

const props = defineProps({
  icon: String,
  name: String,
  canSelected: Boolean,
})

const emit = defineEmits(["select", "cancel"])

const isSelected = ref(false)

const select = () => {
  if (isSelected.value) {
    isSelected.value = false
    emit("cancel", props.icon)
  } else {
    if (props.canSelected) {
      isSelected.value = true
      emit("select", props.icon)
    }
  }
}
</script>
<template>
  <div class="space-y-1 w-20">
    <div
      class="w-20 h-20 rounded-[24px] flex justify-center items-center"
      :class="[
        isSelected ? 'bg-[#ef7ca4]' : 'bg-[#ffd857]',
        $props.canSelected
          ? 'cursor-pointer hover:bg-[#f48d8b]'
          : isSelected
          ? 'cursor-pointer'
          : 'cursor-not-allowed',
      ]"
      @click="select"
    >
      <span :class="`icon-${$props.icon}`"></span>
    </div>
    <p class="text-[#333333] text-base text-center">{{ $props.name }}</p>
  </div>
</template>
