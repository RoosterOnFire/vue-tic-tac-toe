<template>
  <main class="grid grid-rows-3 grid-cols-3">
    <template v-for="cell in cells" :key="cell.id">
      <BoardCell :content="cell.player" />
    </template>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BoardCell from "./BoardCell.vue";
import { useStore } from "../store/store";

export default defineComponent({
  components: {
    BoardCell,
  },
  setup() {
    const store = useStore();

    const cells = store.state.cells;

    return {
      cells,
    };
  },
});
</script>
