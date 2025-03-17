<script setup lang="ts">
import type { AspectRatioProps } from ".";

const props = defineProps<AspectRatioProps>();
</script>

<template>
  <AspectRatio v-bind="props">
    <slot>
      <img :src="props.src" :alt="props.alt" />
    </slot>
  </AspectRatio>
</template>
