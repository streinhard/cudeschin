<template>
    <f7-list>
        <f7-list-item
            v-for="article in articles"
            :key="article.id"
            :title="article.title"
            :link="'/article/' + article.slug"
        />
    </f7-list>
</template>

<script>
export default {
    props: ['articles']
};
</script>
