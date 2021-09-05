<template>
  <button
    type="button"
    class="board-cell"
    :id="cell.id.toString()"
    :disabled="isDisabled"
    :class="{ 'board-cell--win': cell.hit }"
    @click="updateCell"
  >
    {{ cell.player }}
  </button>
</template>

<script lang="ts">
import { Cell } from "@/type/Types";
import { defineComponent, PropType, toRefs, computed } from "vue";
import { useStore } from "@/store/Store";

export default defineComponent({
  props: {
    cell: {
      type: Object as PropType<Cell>,
      required: true,
    },
  },
  setup(props) {
    const { cell } = toRefs(props);
    const store = useStore();

    return {
      cell,
      isDisabled: computed(() => store.getters.isBoardCellDisabled(cell.value)),
      updateCell() {
        store.dispatch("updateGame", cell.value);
      },
    };
  },
});
</script>

<style lang="postcss">
.board-cell {
  @apply bg-gray-50 border border-gray-500 h-24 text-4xl;
}

.board-cell--win {
  @apply bg-green-500;
}
</style>
