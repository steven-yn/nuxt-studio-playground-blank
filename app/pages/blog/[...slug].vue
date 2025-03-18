<script setup lang="ts">
const { data: posts } = await useAsyncData("blog", () =>
  queryCollection("blog").path("/blog/test").first()
);
</script>

<template>
  <div><ContentRenderer v-if="posts" :value="posts" />></div>
</template>
