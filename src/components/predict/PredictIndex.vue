<script setup lang="ts">
import { ref, computed, onMounted, watchEffect } from 'vue';
import TitlePredicate from '@/assets/title/tt-predict.png';
import PickItem from './PickItem.vue';
import TheLoading from '@/components/TheLoading.vue';
import { MakePredicate, GetAllPredicate, GetMyPredicate } from '@/services/predicate';
import { ConfirmModal, UserNameModal, scoreModal } from '@/services/modal';
import { userName } from '@/repo/user';

const list = [
  {
    icon: 'gold',
    name: '金元寶'
  },
  {
    icon: 'stamp',
    name: '印章'
  },
  {
    icon: 'car',
    name: '車'
  },
  {
    icon: 'doctor',
    name: '聽診器'
  },
  {
    icon: 'hammer',
    name: '槌子'
  },
  {
    icon: 'math',
    name: '珠算'
  },
  {
    icon: 'book',
    name: '書'
  },
  {
    icon: 'spoon',
    name: '珠算'
  },
  {
    icon: 'pen',
    name: '筆'
  },
  {
    icon: 'telescope',
    name: '望遠鏡'
  },
  {
    icon: 'camera',
    name: '相機'
  },
  {
    icon: 'music',
    name: '樂器'
  }
];

const selectedItem = ref<string[]>([]);
const isLoading = ref(false);

const myPredicate = computed(() => GetMyPredicate());
const hasMyPredicate = computed(() => myPredicate.value.length > 0);

const canVote = computed(() => {
  if (hasMyPredicate.value) {
    return false;
  }
  return selectedItem.value.length === 3;
});

watchEffect(() => {
  selectedItem.value = myPredicate.value.map((o) => o.id);
});

onMounted(() => {
  GetAllPredicate();
});

const sendPredicate = () => {
  if (canVote.value && !isLoading.value) {
    isLoading.value = true;
    MakePredicate(selectedItem.value).then(() => {
      GetAllPredicate();
      isLoading.value = false;
      ConfirmModal('投票成功');
    });
  }
};
const addItems = (item: string) => {
  if (!hasMyPredicate.value) {
    if (!userName()) {
      UserNameModal();
    } else {
      const index = selectedItem.value.findIndex((o) => o === item);
      if (index > -1) {
        selectedItem.value.splice(index, 1);
      } else {
        selectedItem.value.push(item);
      }
    }
  }
};
const canSelectItem = (item: string) => {
  if (hasMyPredicate.value) {
    return false;
  }
  if (selectedItem.value.length < 3) {
    return true;
  } else {
    if (selectedItem.value.includes(item)) {
      return true;
    } else {
      return false;
    }
  }
};
const isSelectedItem = (item: string) => {
  return selectedItem.value.includes(item);
};
</script>
<template>
  <div id="predict" class="w-full h-[235vw] max-h-[1300px] lg:h-[896px] bg-[#fef8e9]">
    <div class="w-[80%] lg:w-[40vw] h-auto mx-auto">
      <img v-lazy="TitlePredicate" alt="" class="w-full h-auto" />
    </div>
    <div
      class="w-[90%] lg:w-[60vw] mx-auto h-auto grid grid-cols-4 justify-items-center lg:grid-cols-6 gap-4 lg:gap-[60px] relative"
    >
      <PickItem
        v-for="(item, index) in list"
        :key="`predict-${index}`"
        :icon="item.icon"
        :name="item.name"
        :can-selected="canSelectItem(item.icon)"
        :has-selected="isSelectedItem(item.icon)"
        @click="addItems(item.icon)"
      />
    </div>
    <div class="space-y-4 lg:space-y-[25px] flex flex-col justify-center items-center pt-10 lg:pt-[60px]">
      <div
        class="w-[342px] h-[62px] leading-[62px] text-lg text-center rounded-[31px]"
        :class="[
          canVote
            ? 'bg-gradient-to-r from-[#ef7ca4] to-[#f48b8b] text-white cursor-pointer'
            : 'bg-[#8E8E8E] text-[#D0D0D0] cursor-not-allowed'
        ]"
        @click="sendPredicate"
      >
        <template v-if="hasMyPredicate">
          <p>已投票</p>
        </template>
        <template v-else>
          <TheLoading v-if="isLoading" />
          <p v-else>
            <span class="icon-check pr-2"></span>確定選擇
            <span>({{ selectedItem.length }} / 3)</span>
          </p>
        </template>
      </div>
      <div
        class="w-[342px] h-[62px] leading-[62px] text-white text-lg text-center rounded-[31px] bg-gradient-to-r from-[#ef7ca4] to-[#f48b8b] cursor-pointer"
        @click="scoreModal"
      >
        <p><span class="icon-eye pr-2"></span>查看目前比數</p>
      </div>
    </div>
  </div>
</template>
