
<template>
  <div>
    <Heading
      :title="global.siteName "
      :description="global.siteDescription"
    />
    <main>
      <Articles :articles="articles" />
    </main>
  </div>
</template>

<script setup>
  const { find } = useStrapi4();
  const articlesResponse = await find('articles', {
    populate: 'deep',

  });
  const globalResponse = await find('global', {
    populate: 'deep',
  });
  let articles = articlesResponse.data;
  let global = globalResponse.data.attributes;
</script>