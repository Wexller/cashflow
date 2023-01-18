<script setup lang="ts">
import { ref } from 'vue';
import UBoard from '@/components/UBoard.vue';
import UFinancialStatement from '@/components/UFinancialStatement.vue';
import UButton from '@/components/ui/UButton.vue';
import UPlayer from '@/components/UPlayer.vue';
import { Game } from '@/core/game/Game';
import { Player } from '@/core/game/Player';
import { doctorProfession } from '@/mock/doctorProfession';

const player = new Player({ name: 'Player', profession: doctorProfession });
const game = new Game({ players: [player] });

const showStatement = ref(false);
</script>

<template>
  <div class="flex space-x-10">
    <div>
      <UButton @click="showStatement = !showStatement">
        Show/Hide Financial Statement
      </UButton>

      <UFinancialStatement
        v-if="showStatement"
        :financial-statement="player.financialStatement"
      />
    </div>
    <UBoard :board="game.board" />
    <UPlayer :player="player" />
  </div>
</template>
