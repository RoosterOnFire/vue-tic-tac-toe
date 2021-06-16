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
    <GameBoard />
    <Footer class="mt-4" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GameBoard from "./components/GameBoard.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  components: {
    GameBoard,
    Footer,
  },
  setup() {},
});
</script>

<style scoped></style>
