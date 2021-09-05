<template>
  <div class="select-player">
    <AppButton
      :title="buttonXText"
      class="select-player-button"
      :disabled="isGameRunning"
      @click="selectPlayer('X')"
    />
    <AppButton
      :title="buttonOText"
      class="select-player-button"
      :disabled="isGameRunning"
      @click="selectPlayer('O')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { SelectedPlayer } from "@/type/Types";
import { useStore } from "@/store/Store";
import AppButton from "@/components/AppButton.vue";

export default defineComponent({
  components: { AppButton },
  setup() {
    const store = useStore();

    return {
      buttonXText: computed(() => store.getters.playerXWinCount),
      buttonOText: computed(() => store.getters.playerOWinCount),
      isGameRunning: computed(() => store.getters.isGameRunning),
      selectPlayer(selected: SelectedPlayer) {
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

.select-player-button {
  @apply text-4xl;
}
</style>
