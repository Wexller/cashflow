<script lang="ts" setup>
import { ref } from 'vue';
import UButton from '@/components/ui/UButton.vue';
import eventBus from '@/core/EventBus';
import { Player } from '@/core/game/Player';
import { StatementEventsEnum } from '@/types/event-bus.types';

const props = defineProps<{
  player: Player;
}>();

const rolled = ref<number | null>(null);

const cash = ref(props.player.financialStatement.cash);

const onClick = (num: number): void => {
  rolled.value = props.player.rollTheDice(num);
};

eventBus.on(StatementEventsEnum.STATEMENT_CHANGE, () => {
  cash.value = props.player.financialStatement.cash;
});
</script>

<template>
  <div>
    <div class="flex items-center justify-center space-x-4">
      <UButton @click="onClick(1)">Roll the Die</UButton>
      <span class="text-2xl font-bold">Rolled: {{ rolled }}</span>
    </div>
    <div class="mt-5 text-2xl font-bold">Деньги: ${{ cash }}</div>
  </div>
</template>
