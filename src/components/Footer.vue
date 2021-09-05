<template>
  <div class="footer">
    <AppButton :title="message" @click="toggleAi" />
    <AppButton
      title="Reset Game"
      @click="resetGame"
      @dblclick="resetFullGame"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store/Store";
import AppButton from "@/components/AppButton.vue";

export default defineComponent({
  components: { AppButton },
  setup() {
    const store = useStore();

    return {
      message: computed(() => store.getters.aiStatus),
      toggleAi() {
        store.dispatch("toggleAI");
      },
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

<style lang="postcss">
.footer {
  @apply flex justify-around;
}
</style>
