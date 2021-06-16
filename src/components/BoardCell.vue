<template>
  <div>
    <button type="button">{{ content }}</button>
  </div>
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
