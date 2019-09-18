<template>
    <div>
        <f7-card class="content-card card-one" @click.native="openCard">
            <f7-card-header class="no-padding" valign="bottom">
                <f7-link href="/aktivitat_planen">Aktivität planen</f7-link>
            </f7-card-header>
        </f7-card>

        <f7-card class="content-card card-two" @click.native="openCard">
            <f7-card-header class="no-padding" valign="bottom">
                <f7-link href="/aktivitat_durchfuhren">Aktivität durchführen</f7-link>
            </f7-card-header>
        </f7-card>

        <f7-card class="content-card card-three" @click.native="openCard">
            <f7-card-header class="no-padding" valign="bottom">
                <f7-link href="/auswertung">Auswertung und Feedback</f7-link>
            </f7-card-header>
        </f7-card>

        <f7-card class="content-card card-four" @click.native="openCard">
            <f7-card-header class="no-padding" valign="bottom">
                <f7-link href="/quartalsprogram">Quartalsprogramm planen</f7-link>
            </f7-card-header>
        </f7-card>

        <f7-card class="content-card card-five" @click.native="openCard">
            <f7-card-header class="no-padding" valign="bottom">
                <f7-link href="/hock">Höck</f7-link>
            </f7-card-header>
        </f7-card>

        <f7-card class="content-card card-six" @click.native="openCard">
            <f7-card-header class="no-padding" valign="bottom">
                <f7-link href="/elternkontakt">Elternkontakt</f7-link>
            </f7-card-header>
        </f7-card>

        <f7-card class="content-card card-seven" @click.native="openCard">
            <f7-card-header class="no-padding" valign="bottom">
                <f7-link href="/sicherheit">An die Sicherheit denken</f7-link>
            </f7-card-header>
        </f7-card>
    </div>
</template>

<script>
export default {
    methods: {
        openCard: function(event) {
            let link = event.target.querySelector('a.link');
            this.$f7router.navigate(link.pathname);
        },
    }

};
</script>