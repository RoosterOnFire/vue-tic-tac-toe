<template>
  <div class="board">
    <template v-for="cell in cells" :key="cell.id">
      <Cell
        :cell="cell"
        class="board__cell"
        :class="{ 'board__cell--win': cell.hit }"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store/store";
import Cell from "./Cell.vue";

export default defineComponent({
  components: { Cell },
  setup() {
    const store = useStore();

    return {
      cells: computed(() => store.state.cells),
    };
  },
});
</script>

<style>
.board {
  @apply grid grid-rows-3 grid-cols-3 my-4;
}

.board__cell {
  @apply border border-gray-500 h-24 text-4xl;
}

.board__cell--win {
  @apply bg-green-500;
}
</style>
