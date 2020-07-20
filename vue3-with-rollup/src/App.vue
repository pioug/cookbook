<template>
  <Title />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Title: defineAsyncComponent(() => import("./Title.vue")),
  },
};
</script>
