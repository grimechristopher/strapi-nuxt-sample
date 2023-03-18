<template>
  <div>
    <Heading
      :title="about.title"
      :description="about.description"
    />

    <Blocks 
      v-if="about.blocks"
      :blocks="about.blocks"
    />
  </div>
</template>

<script setup>
  const { find } = useStrapi4();
  const aboutResponse = await find('about', {
    populate: 'deep',
  });
  let about = aboutResponse.data.attributes;

</script>