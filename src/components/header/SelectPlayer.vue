<template>
  <div class="select-player">
    <button
      class="select-player__button"
      type="button"
      :disabled="isGameRunning"
      @click="selectPlayer('X')"
    >
      {{ buttonXText }}
    </button>
    <button
      class="select-player__button"
      type="button"
      :disabled="isGameRunning"
      @click="selectPlayer('O')"
    >
      {{ buttonOText }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/misc/store";

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

<style lang="postcss">
.select-player {
  @apply flex justify-evenly;
}

.select-player__button {
  @apply p-4;
  @apply text-4xl;
  @apply border border-gray-500 rounded-lg;
}
</style>
