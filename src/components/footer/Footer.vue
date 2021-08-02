<template>
  <div class="footer">
    <ResetButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ResetButton from "@/components/footer/ResetButton.vue";

export default defineComponent({
  components: { ResetButton },
  setup() {},
});
</script>
