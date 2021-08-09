<template>
  <button type="button" @click="toggleAi">
    {{ message }}
  </button>
</template>

<script lang="ts">
import { useStore } from "@/store/store";
import { computed, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const store = useStore();

    return {
      message: computed(() => `AI: ${store.state.isAIActivate ? "ON" : "OFF"}`),
      toggleAi() {
        store.dispatch("toggleAI");
      },
    };
  },
});
</script>
