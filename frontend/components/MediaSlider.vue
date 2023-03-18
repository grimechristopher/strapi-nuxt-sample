<template>
  <div v-for="file in files">
    <img :src="getStrapiMedia(file.attributes.url)" height="100" />
  </div>
</template>

<script setup>
const props = defineProps({
  files: {
    type: Array,
    required: true,
  },
});
</script>