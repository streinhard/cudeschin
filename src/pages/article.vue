<template>
    <f7-page>
        <f7-navbar title="Aktivität planen" back-link="Zurück"></f7-navbar>

        <f7-block class="article">
            <article v-html="article.html" />
        </f7-block>
    </f7-page>
</template>

<script>

import articles from 'src/assets/articles.json';

export default {
    props: ['slug'],
    data: function() {
        let article = articles.find(a => a.slug === this.slug);
        return {
            article,
        };
    }
};
</script>