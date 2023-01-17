<script setup lang="ts">
import { ref } from 'vue';
import UGame from '@/components/UGame.vue';

const isRunning = ref(true);
</script>

<template>
  <div>
    <button
      v-if="!isRunning"
      type="button"
      @click="isRunning = true"
    >
      Play
    </button>
    <button
      v-if="isRunning"
      type="button"
      @click="isRunning = false"
    >
      Stop
    </button>

    <UGame v-if="isRunning" />
  </div>
</template>
