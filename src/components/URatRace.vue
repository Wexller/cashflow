<script setup lang="ts">
import { RatRace } from '@/core/game/board/RatRace';

const props = defineProps({
  ratRace: RatRace,
});
</script>

<template>
  <div class="container mx-auto mt-10">
    <div class="mt-10">
      <div class="mx-auto grid max-w-max">
        <div class="col-start-1 col-end-9 row-start-1 row-end-2 flex">
          <div
            v-for="(i, idx) in props.ratRace.race.slice(0, 8)"
            :key="idx"
            :class="`bg-race-${i.type}`"
            class="flex h-28 w-28 items-center justify-center"
          >
            <span>{{ idx }}</span>
          </div>
        </div>

        <div class="col-start-8 col-end-9 row-start-2 row-end-6">
          <div
            v-for="(i, idx) in props.ratRace.race.slice(8, 12)"
            :key="idx"
            :class="`bg-race-${i.type}`"
            class="flex h-28 w-28 items-center justify-center"
          >
            <span>{{ idx + 8 }}</span>
          </div>
        </div>

        <div
          class="col-start-1 col-end-9 row-start-6 row-end-7 flex flex-row-reverse"
        >
          <div
            v-for="(i, idx) in props.ratRace.race.slice(12, 20)"
            :key="idx"
            :class="`bg-race-${i.type}`"
            class="flex h-28 w-28 items-center justify-center"
          >
            <span>{{ idx + 12 }}</span>
          </div>
        </div>

        <div
          class="col-start-1 col-end-2 row-start-2 row-end-6 flex flex-col-reverse"
        >
          <div
            v-for="(i, idx) in props.ratRace.race.slice(20, 24)"
            :key="idx"
            :class="`bg-race-${i.type}`"
            class="flex h-28 w-28 items-center justify-center"
          >
            <span>{{ idx + 20 }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
