<script setup lang="ts">
import { ref } from 'vue';
import UGame from '@/components/UGame.vue';
import UButton from '@/components/ui/UButton.vue';

const isRunning = ref(true);
</script>

<template>
  <div class="app">
    <div class="mx-auto">
      <div class="flex justify-center">
        <UButton @click="isRunning = !isRunning"> Play/Stop </UButton>
      </div>

      <UGame v-if="isRunning" />
    </div>
  </div>
</template>
