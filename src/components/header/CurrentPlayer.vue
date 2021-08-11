<template>
  <p>{{ message }}</p>
</template>

<script lang="ts">
import { useStore } from "@/misc/store";
import { computed, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const store = useStore();

    return {
      message: computed(() => `Current player: ${store.state.currentPlayer}`),
    };
  },
});
</script>
