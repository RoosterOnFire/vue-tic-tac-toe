<template>
  <main class="flex justify-evenly">
    <Button message="X" @click="selectPlayer('X')" />
    <Button message="O" @click="selectPlayer('O')" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "../store/store";
import Button from "./Button.vue";

export default defineComponent({
  components: { Button },
  setup() {
    const store = useStore();

    function selectPlayer(selected: "X" | "O") {
      store.commit("selectPlayer", selected);
    }

    return {
      selectPlayer,
    };
  },
});
</script>
