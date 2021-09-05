<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>

<template>
  <button type="button" class="button">
    {{ title }}
  </button>
</template>

<style lang="postcss">
.button {
  @apply p-4;
  @apply text-xl;
  @apply border border-gray-500 rounded-lg;
}
</style>