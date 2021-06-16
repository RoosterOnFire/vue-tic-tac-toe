<template>
  <div
    class="
      container
      max-w-md
      mx-auto
      my-4
      p-4
      rounded
      border border-black
      text-center
    "
  >
    <GameBoard v-if="isGameRunning" />
    <SelectPlayer v-else />
    <footer class="mt-4 flex justify-evenly">
      <Button message="Reset" @click="resetGame" />
    </footer>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "./store/store";
import Button from "./components/Button.vue";
import GameBoard from "./components/GameBoard.vue";
import SelectPlayer from "./components/SelectPlayer.vue";

export default defineComponent({
  components: {
    SelectPlayer,
    GameBoard,
    Button,
  },
  setup() {
    const store = useStore();

    const isGameRunning = computed<boolean>(
      () => store.getters.isPlayerSelected
    );

    function resetGame() {
      store.commit("reset");
    }

    return {
      isGameRunning,
      resetGame,
    };
  },
});
</script>

<style scoped></style>
