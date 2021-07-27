<template>
  <div class="header">
    <p class="header__counter">X: {{ xWinCount }}</p>
    <p class="header__counter">O: {{ oWinCount }}</p>
    <button @click="resetGame" class="header__reset" type="button">
      {{ "Reset" }}
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store/store";

export default defineComponent({
  setup() {
    const store = useStore();

    return {
      oWinCount: computed(() => store.state.playerOWinCount),
      xWinCount: computed(() => store.state.playerXWinCount),
      resetGame() {
        store.dispatch("reset");
      },
    };
  },
});
</script>
