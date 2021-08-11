<template>
  <button @click="resetGame" @dblclick="resetFullGame" type="button">
    {{ "Reset Game" }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/misc/store";

export default defineComponent({
  setup() {
    const store = useStore();

    return {
      resetGame() {
        store.dispatch("reset");
      },
      resetFullGame() {
        store.dispatch("resetFull");
      },
    };
  },
});
</script>
