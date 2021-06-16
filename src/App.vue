<template>
  <div class="app">
    <Header />
    <GameBoard v-if="isGameRunning" />
    <SelectPlayer v-else />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "./store/store";
import Header from "./components/Header.vue";
import GameBoard from "./components/GameBoard.vue";
import SelectPlayer from "./components/SelectPlayer.vue";

export default defineComponent({
  components: {
    Header,
    SelectPlayer,
    GameBoard,
  },
  setup() {
    const store = useStore();

    return {
      isGameRunning: computed<boolean>(() => store.getters.isPlayerSelected),
    };
  },
});
</script>

<style scoped></style>
