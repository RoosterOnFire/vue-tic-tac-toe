<template>
  <div class="container mx-auto">
    <header>
      <h1>Tic Tac Toe</h1>
    </header>
    <GameBoard />
    <Footer />
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
