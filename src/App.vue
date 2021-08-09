<template>
  <Header />
  <Board />
  <Footer />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store/store";
import Header from "@/components/header/Header.vue";
import Board from "@/components/board/Board.vue";
import Footer from "@/components/footer/Footer.vue";

export default defineComponent({
  components: {
    Header,
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
.app {
  @apply container;
  @apply m-auto p-4;
  @apply max-w-md;
  @apply text-center;
  @apply shadow-2xl;
}
</style>
