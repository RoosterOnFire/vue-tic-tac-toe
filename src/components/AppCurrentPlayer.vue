<template>
  <p>{{ message }}</p>
</template>

<script lang="ts">
import { useStore } from "@/store/Store";
import { computed, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const store = useStore();

    return {
      message: computed(() => store.getters.currentPlayer),
    };
  },
});
</script>
