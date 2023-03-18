<template>
    <div class="container mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        <ArticleCard
          v-for="article in leftArticles"
          :key="article.id"
          :article="article"
        />
        <ArticleCard
          v-for="article in rightArticles"
          :key="article.id"
          :article="article"
        />
      </div>
</template>

<script>
import ArticleCard from "./ArticleCard";
export default {
  components: {
    ArticleCard,
  },
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    leftArticlesCount() {
      return Math.ceil(this.articles.length / 5);
    },
    leftArticles() {
      return this.articles.slice(0, this.leftArticlesCount);
    },
    rightArticles() {
      return this.articles.slice(this.leftArticlesCount, this.articles.length);
    },
  },
};
</script>