<template>
    <f7-page>
        <f7-navbar back-link="Zurück">
            <f7-nav-title>{{ article.title }}</f7-nav-title>
            <f7-nav-right>
                <f7-button icon-f7="paperplane" style="color:white" @click="share" />
            </f7-nav-right>
        </f7-navbar>
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
    mounted: function() {
        this.$$('article a').addClass('external').prop('target', '_blank');
    },
    computed: {
        article: function() {
            return articles.find(a => a.slug === this.slug) || articles[0];
        },
        content: function() {
            return marked(this.article.content);
        }
    },
    methods: {
        share: async function(event) {
            try {
                await navigator.share({
                    title: 'cudeschin: ' + this.article.title,
                    url: window.location.href,
                })
            } catch (e) {
                this.$f7.dialog.alert('Dein Browser kann leider keine Links teilen', 'Schade...');
            }
        }
    },
};
</script>
