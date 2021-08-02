<template>
  <button @click="resetGame" class="header__reset" type="button">
    {{ "Reset Game" }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store/store";

export default defineComponent({
  setup() {
    const store = useStore();

    return {
      resetGame() {
        store.dispatch("reset");
      },
    };
  },
});
</script>
