<template>
  <button
    :id="cell.id.toString()"
    :class="cell.style"
    @click="updateCell"
    type="button"
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
