<template>
  <div class="footer">
    <AIButton class="footer__button" />
    <ResetButton class="footer__button" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AIButton from "./AIButton.vue";
import ResetButton from "./ResetButton.vue";

export default defineComponent({
  components: { ResetButton, AIButton },
  setup() {},
});
</script>

<style lang="postcss">
.footer {
  @apply flex justify-around;
}

.footer__button {
  @apply p-4;
  @apply text-xl;
  @apply border border-gray-500 rounded-lg;
}
</style>
