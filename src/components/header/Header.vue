<template>
  <div class="header">
    <SelectPlayer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store/store";
import SelectPlayer from "@/components/header/SelectPlayer.vue";

export default defineComponent({
  components: { SelectPlayer },
  setup() {},
});
</script>
