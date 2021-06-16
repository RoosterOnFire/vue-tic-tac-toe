<template>
  <footer class="flex justify-evenly">
    <Button message="X" />
    <Button message="O" />
    <Button message="Reset" />
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "./Button.vue";

export default defineComponent({
  components: { Button },
  setup() {},
});
</script>
