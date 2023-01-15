<script setup>
import {ratRaceList} from "../const.ts";
import {RatRace} from "../core/game/RatRace.ts";
import {getCurrentInstance} from "vue";

const instance = getCurrentInstance();

const ratRace = new RatRace()

console.log(ratRace)

const onClick = () => {
  const steps = Math.round(Math.random() * 6) + 1;

  ratRace.next(steps)
  instance.proxy.$forceUpdate()
}
</script>

<template>
<div class="container mx-auto mt-10">
  <div class="flex">
    <div v-for="(i, idx) in ratRaceList" :class="`bg-race-${i.type}`" class="p-5">
      {{ i.type }}
      <span v-if="ratRace.current.value.idx === idx">Here</span>
    </div>
  </div>

  <div class="mt-5">
    <button @click="onClick">Next</button>
  </div>
</div>
</template>
