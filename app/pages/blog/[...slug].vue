<script setup lang="ts">
const { data: posts } = await useAsyncData("blog", () =>
  queryCollection("blog").all()
);
</script>

<template>
  <div>
    <h1>Blog</h1>
    <pre>{{ posts }}</pre>
  </div>
</template>
