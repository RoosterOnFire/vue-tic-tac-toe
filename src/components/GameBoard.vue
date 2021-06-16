<template>
  <main class="grid grid-rows-3 grid-cols-3">
    <template v-for="n in 9" :key="n">
      <BoardCell :content="n" />
    </template>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BoardCell from "./BoardCell.vue";

export default defineComponent({
  components: {
    BoardCell,
  },
  setup() {},
});
</script>
