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
  @apply bg-gray-50 border border-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400;
  @apply focus:outline-none;
}
</style>