<script lang="ts" setup>
import URatRace from '@/components/URatRace.vue';
import { Board } from '@/core/game/board/Board';

const props = defineProps<{
  board: Board;
}>();
</script>

<template>
  <div>
    <URatRace :rat-race="props.board.ratRace" />
  </div>
</template>
