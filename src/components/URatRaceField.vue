<script setup lang="ts">
import { computed, toRefs } from 'vue';
import { IRaceField, RatRaceEnum } from '@/models/IRace';

const props = defineProps<{
  raceField: IRaceField<RatRaceEnum>;
}>();

const { raceField } = toRefs(props);

const players = computed(() => raceField.value.players.map((p) => p.name));
</script>

<template>
  <div
    class="flex h-28 w-28 flex-col items-center justify-center"
    :class="`bg-race-${raceField.type}`"
  >
    <div>{{ raceField.type.toLocaleLowerCase() }}</div>
    <div v-if="raceField.players.length !== 0">{{ players }}</div>
  </div>
</template>
