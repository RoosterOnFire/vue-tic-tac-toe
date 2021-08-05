<template>
  <div class="select-player">
    <button
      class="select-player__button"
      type="button"
      @click="selectPlayer('X')"
      :disabled="isGameRunning"
    >
      {{ buttonXText }}
    </button>
    <button
      class="select-player__button"
      type="button"
      @click="selectPlayer('O')"
      :disabled="isGameRunning"
    >
      {{ buttonOText }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store/store";

export default defineComponent({
  setup() {
    const store = useStore();

    const buttonXText = computed(
      () => `X ${store.state.playerXWinCount || "-"}`
    );
    const buttonOText = computed(
      () => `O ${store.state.playerOWinCount || "-"}`
    );
    const isGameRunning = computed(() => store.state.isGameRunning);

    return {
      buttonXText,
      buttonOText,
      isGameRunning,
      selectPlayer(selected: "X" | "O") {
        store.commit("selectPlayer", selected);
      },
    };
  },
});
</script>

<style>
.select-player {
  @apply flex justify-evenly;
}

.select-player__button {
  @apply border border-gray-500 text-4xl rounded-lg p-4;
}
</style>
