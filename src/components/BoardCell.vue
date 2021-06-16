<template>
  <button type="button" class="border border-gray-500 h-16">
    {{ content }}
  </button>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  props: {
    content: {
      type: String,
    },
  },
  setup(props) {
    const { content } = toRefs(props);

    return {
      content,
    };
  },
});
</script>
