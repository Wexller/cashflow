<script setup lang="ts">
import { ref } from 'vue';
import { ratRaceList } from '@/const';
import { RatRace } from '@/core/game/RatRace';

const ratRace = new RatRace();

const current = ref(ratRace.current);

const onClick = (): void => {
  const steps = Math.round(Math.random() * 6) + 1;

  current.value = ratRace.next(steps);
};
</script>

<template>
  <div class="container mx-auto mt-10">
    <div class="mt-10">
      <div class="grid max-w-max mx-auto">
        <div class="row-start-1 row-end-2 col-start-1 col-end-9 flex">
          <div
            v-for="(i, idx) in ratRaceList.slice(0, 8)"
            :key="idx"
            :class="`bg-race-${i.type}`"
            class="w-28 h-28 flex items-center justify-center"
          >
            <span>{{ idx }}</span>
            <span v-if="current.value.idx === idx">Here</span>
          </div>
        </div>

        <div class="row-start-2 row-end-6 col-start-8 col-end-9">
          <div
            v-for="(i, idx) in ratRaceList.slice(8, 12)"
            :key="idx"
            :class="`bg-race-${i.type}`"
            class="w-28 h-28 flex items-center justify-center"
          >
            <span>{{ idx + 8 }}</span>
            <span v-if="current.value.idx === (idx + 8)">Here</span>
          </div>
        </div>

        <div class="row-start-6 row-end-7 col-start-1 col-end-9 flex flex-row-reverse">
          <div
            v-for="(i, idx) in ratRaceList.slice(12, 20)"
            :key="idx"
            :class="`bg-race-${i.type}`"
            class="w-28 h-28 flex items-center justify-center"
          >
            <span>{{ idx + 12 }}</span>
            <span v-if="current.value.idx === (idx + 12)">Here</span>
          </div>
        </div>

        <div class="row-start-2 row-end-6 col-start-1 col-end-2 flex flex-col-reverse">
          <div
            v-for="(i, idx) in ratRaceList.slice(20, 24)"
            :key="idx"
            :class="`bg-race-${i.type}`"
            class="w-28 h-28 flex items-center justify-center"
          >
            <span>{{ idx + 20 }}</span>
            <span v-if="current.value.idx === (idx + 20)">Here</span>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5">
      <button @click="onClick">Next</button>
    </div>
  </div>
</template>
