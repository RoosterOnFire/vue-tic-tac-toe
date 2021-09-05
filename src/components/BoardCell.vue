<template>
  <button
    type="button"
    :id="cell.id.toString()"
    :disabled="isDisabled"
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
