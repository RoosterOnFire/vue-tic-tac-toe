<template>
  <main class="grid grid-rows-3 grid-cols-3">
    <template v-for="cell in cells" :key="cell.id">
      <BoardCell :cell="cell" />
    </template>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "../store/store";
import BoardCell from "./BoardCell.vue";

export default defineComponent({
  components: {
    BoardCell,
  },
  setup() {
    const store = useStore();

    return {
      cells: computed(() => store.state.cells),
    };
  },
});
</script>
