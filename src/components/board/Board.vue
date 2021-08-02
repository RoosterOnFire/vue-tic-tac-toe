<template>
  <div class="board">
    <template v-for="cell in cells" :key="cell.id">
      <Cell :cell="cell" class="board__cell" />
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store/store";
import Cell from "@/components/board/Cell.vue";

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
