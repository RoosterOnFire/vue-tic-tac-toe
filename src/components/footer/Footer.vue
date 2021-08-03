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
