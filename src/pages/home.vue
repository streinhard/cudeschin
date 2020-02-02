<template>
    <f7-page>
        <f7-navbar>
            <f7-nav-left>
                <img src="/images/Pfadi.svg" style="height:28px; margin: 0px 0 0 16px" />
            </f7-nav-left>
            <f7-nav-title>Cudeschin</f7-nav-title>
            <f7-nav-right>
                <f7-button :icon-f7="viewIcon" style="color:white" @click="toggleDisplay" />
            </f7-nav-right>
        </f7-navbar>

        <article-cards v-if="!showList" />
        <article-links v-if="showList" />
    </f7-page>
</template>

<script>
import articles from 'src/assets/articles.json';

export default {
    data: function() {
        return {
            showList: true
        };
    },
    computed: {
        viewIcon: function() {
            return this.showList ? 'library' : 'list';
        }
    },
    methods: {
        toggleDisplay: function(event) {
            this.showList = !this.showList;
        }
    }
};
</script>
