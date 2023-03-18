<template>
  <div >
    <Heading
      :title="category.name"
    />

    <main>
      <Articles :articles="articles || []" />
    </main>
  </div>
</template>

<script setup>
  const { find } = useStrapi4()
  const route = useRoute();

  const matchingCategories = await find('categories', {filters: {slug: route.params.slug}, populate: 'deep'});
  const category = matchingCategories.data[0].attributes;

  const articlesResponse = await find("articles", { filters: {"category": {slug: category.slug}}, populate: 'deep'})
  const articles = articlesResponse.data;
</script>
