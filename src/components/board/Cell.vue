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
import { Cell } from "@/misc/types";
import { defineComponent, PropType, toRefs, computed } from "vue";
import { useStore } from "@/misc/store";

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
      isDisabled: computed(() => !!cell.value.player || store.state.isGameOver),
      updateCell() {
        store.dispatch("updateGame", cell.value);
      },
    };
  },
});
</script>
