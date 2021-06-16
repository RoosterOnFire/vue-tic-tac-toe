<template>
  <button
    :id="cell.id"
    @click="updateCell"
    type="button"
    class="border border-gray-500 h-16"
  >
    {{ cell.player }}
  </button>
</template>

<script lang="ts">
import { Cell } from "../store/types";
import { defineComponent, PropType, toRefs } from "vue";
import { useStore } from "../store/store";

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

    function updateCell() {
      store.dispatch("updateGame", cell.value);
    }

    return {
      cell,
      updateCell,
    };
  },
});
</script>
