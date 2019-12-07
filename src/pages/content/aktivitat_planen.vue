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

export default {
    data: function() {
        return {};
    },
    computed: {
        content: function() {
            // TODO: Load markdown here ;)
            return marked('# MD content');
        }
    },
};
</script>