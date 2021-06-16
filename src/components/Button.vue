<template>
  <button type="button" class="w-12 h-12 border border-gray-500" :class="type">
    {{ message }}
  </button>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const { type, message } = toRefs(props);

    return {
      type,
      message,
    };
  },
});
</script>
