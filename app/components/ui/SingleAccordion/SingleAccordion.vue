<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

defineProps<{
  defaultValue: string;
  items: {
    value: string;
    title: string;
    content: string;
  }[];
}>();
</script>

<template>
  <Accordion
    type="single"
    class="w-full"
    collapsible
    :default-value="defaultValue"
  >
    <AccordionItem v-for="item in items" :key="item.value" :value="item.value">
      <AccordionTrigger>{{ item.title }}</AccordionTrigger>
      <AccordionContent>
        {{ item.content }}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
