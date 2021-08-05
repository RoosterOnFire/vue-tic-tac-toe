<template>
  <div class="footer">
    <AIButton class="footer__ai" />
    <ResetButton class="footer__reset" />
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

<style>
.footer {
  @apply flex justify-around;
}

.footer__ai {
  @apply border border-gray-500 text-xl rounded-lg p-4;
}

.footer__reset {
  @apply border border-gray-500 text-xl rounded-lg p-4;
}
</style>
