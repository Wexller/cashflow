<script setup lang="ts">
import UBoard from '@/components/UBoard.vue';
import UFinancialStatement from '@/components/UFinancialStatement.vue';
import { Game } from '@/core/game/Game';
import { Player } from '@/core/game/Player';
import { doctorProfession } from '@/mock/doctorProfession';

const player = new Player({ profession: doctorProfession });
const game = new Game({ player });

</script>

<template>
  <UBoard :board="game.board" />
  <UFinancialStatement :financial-statement="player.financialStatement" />
</template>
