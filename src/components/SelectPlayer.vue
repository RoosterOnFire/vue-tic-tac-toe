<template>
  <div class="select-player">
    <button
      class="select-player__button"
      type="button"
      @click="selectPlayer('X')"
    >
      {{ "X" }}
    </button>
    <button
      class="select-player__button"
      type="button"
      @click="selectPlayer('O')"
    >
      {{ "O" }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store/store";

export default defineComponent({
  setup() {
    const store = useStore();

    return {
      selectPlayer(selected: "X" | "O") {
        store.commit("selectPlayer", selected);
      },
    };
  },
});
</script>
