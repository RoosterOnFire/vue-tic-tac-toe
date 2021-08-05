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

<style>
.app {
  @apply container max-w-md m-auto p-4 text-center shadow-2xl;
}
</style>
