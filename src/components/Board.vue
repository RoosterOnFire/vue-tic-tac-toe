<template>
  <div class="board">
    <template v-for="cell in cells" :key="cell.id">
      <Cell :cell="cell" />
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store/Store";
import Cell from "@/components/BoardCell.vue";

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

<style lang="postcss">
.board {
  @apply grid grid-rows-3 grid-cols-3 my-4;
}
</style>
