<script setup lang="ts">
import { withLeadingSlash, joinURL } from "ufo";
import type { Collections } from "@nuxt/content";

const route = useRoute();

const slug = computed(() =>
  Array.isArray(route.params.slug)
    ? (route.params.slug as string[])
    : [route.params.slug as string]
);
const path = computed(() =>
  withLeadingSlash(joinURL("", "content", ...slug.value))
);
const collection = computed(() => `content` as keyof Collections);

const { data: page } = await useAsyncData(
  path.value,
  async () =>
    (await queryCollection(collection.value)
      .path(path.value)
      .first()) as Collections["content"]
);

if (!page.value)
  throw createError({ statusCode: 404, statusMessage: "Page not found" });
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
