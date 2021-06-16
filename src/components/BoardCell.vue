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
import { Cell, useStore } from "../store/store";
import { defineComponent, PropType, toRefs } from "vue";

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
      store.commit("updateCell", cell.value?.id);
    }

    return {
      cell,
      updateCell,
    };
  },
});
</script>
