<script setup lang="ts">
import { ref } from 'vue';
import URatRaceField from '@/components/URatRaceField.vue';
import eventBus from '@/core/EventBus';
import { RatRace, RatRaceList } from '@/core/game/board/RatRace';
import { BoardEventsEnum } from '@/types/event-bus.types';

const props = defineProps<{
  ratRace: RatRace;
}>();

const race = ref<RatRaceList>(props.ratRace.getRace());

eventBus.on(BoardEventsEnum.RAT_RACE_CHANGE, () => {
  race.value = props.ratRace.getRace();
});
</script>

<template>
  <div class="mt-10">
    <div class="mt-10">
      <div class="mx-auto grid max-w-max">
        <div class="col-start-1 col-end-9 row-start-1 row-end-2 flex">
          <URatRaceField
            v-for="(raceField, idx) in race.slice(0, 8)"
            :key="`${idx}_${raceField.players.length}`"
            :race-field="raceField"
          />
        </div>

        <div class="col-start-8 col-end-9 row-start-2 row-end-6">
          <URatRaceField
            v-for="(raceField, idx) in race.slice(8, 12)"
            :key="`${idx}_${raceField.players.length}`"
            :race-field="raceField"
          />
        </div>

        <div
          class="col-start-1 col-end-9 row-start-6 row-end-7 flex flex-row-reverse"
        >
          <URatRaceField
            v-for="(raceField, idx) in race.slice(12, 20)"
            :key="`${idx}_${raceField.players.length}`"
            :race-field="raceField"
          />
        </div>

        <div
          class="col-start-1 col-end-2 row-start-2 row-end-6 flex flex-col-reverse"
        >
          <URatRaceField
            v-for="(raceField, idx) in race.slice(20, 24)"
            :key="`${idx}_${raceField.players.length}`"
            :race-field="raceField"
          />
        </div>
      </div>
    </div>
  </div>
</template>
