<template>
    <f7-page>
        <f7-navbar :title="article.title" back-link="Zurück"></f7-navbar>

        <f7-block class="article">
            <article v-html="content" />
        </f7-block>
    </f7-page>
</template>

<script>
import marked from 'marked';
import articles from 'src/assets/articles.json';

export default {
    props: ['slug'],
    computed: {
        article: function() {
            return articles.find(a => a.slug === this.slug) || articles[0];
        },
        content: function() {
            return marked(this.article.content);
        }
    },
    mounted: function() {
        this.$$('article a').addClass('external').prop('target', '_blank');
    }
};
</script>
