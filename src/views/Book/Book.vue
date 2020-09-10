<template>
  <div class="book">{{ value }}</div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Book",
  setup() {
    const value = ref("this is Book component!");

    return {
      value,
    };
  },
};
</script>

<style></style>
