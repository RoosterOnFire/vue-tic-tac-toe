<template>
  <div class="header">
    <AppSelectPlayer />
    <AppCurrentPlayer />
  </div>
  <Board />
  <Footer />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store/Store";
import AppCurrentPlayer from "@/components/AppCurrentPlayer.vue";
import AppSelectPlayer from "@/components/AppSelectPlayer.vue";
import Board from "@/components/Board.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  components: {
    AppCurrentPlayer,
    AppSelectPlayer,
    Board,
    Footer,
  },
  setup() {
    const store = useStore();

    return {
      isGameRunning: computed<boolean>(() => store.getters.isPlayerSelected),
    };
  },
});
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply flex flex-col justify-center items-center;
  @apply h-screen;
  @apply bg-gray-100;
}

.app {
  @apply container;
  @apply m-auto p-4;
  @apply max-w-md;
  @apply text-center;
  @apply shadow-2xl;
}
</style>
