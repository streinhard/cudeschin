<template>
    <f7-page>
        <f7-navbar title="Aktivität planen" back-link="Zurück"></f7-navbar>

        <f7-block class="article">
            <article v-html="content" />
        </f7-block>
    </f7-page>
</template>

<script>
import marked from 'marked';

import md from '!raw-loader!../content/Aktivität_Planen.md';

export default {
    data: function() {
        return {};
    },
    computed: {
        content: function() {
            return marked(md);
        }
    },
};
</script>