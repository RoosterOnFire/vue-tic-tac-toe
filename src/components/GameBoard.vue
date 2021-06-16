<template>
  <main>
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
