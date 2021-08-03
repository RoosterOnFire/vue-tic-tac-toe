<template>
  <div class="header">
    <SelectPlayer />
    <CurrentPlayer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CurrentPlayer from "./CurrentPlayer.vue";
import SelectPlayer from "./SelectPlayer.vue";

export default defineComponent({
  components: { SelectPlayer, CurrentPlayer },
  setup() {},
});
</script>
