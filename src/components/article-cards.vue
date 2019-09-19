<template>
    <div>
        <f7-card class="content-card card-one" no-shadow @click.native="openCard">
            <f7-card-header class="no-padding" valign="bottom">
                <f7-link href="/aktivitat_planen">Aktivität planen</f7-link>
            </f7-card-header>
        </f7-card>

        <f7-card class="content-card card-two" no-shadow @click.native="openCard">
            <f7-card-header class="no-padding" valign="bottom">
                <f7-link href="/aktivitat_durchfuhren">Aktivität durchführen</f7-link>
            </f7-card-header>
        </f7-card>

        <f7-card class="content-card card-three" no-shadow @click.native="openCard">
            <f7-card-header class="no-padding" valign="bottom">
                <f7-link href="/auswertung">Auswertung und Feedback</f7-link>
            </f7-card-header>
        </f7-card>

        <f7-card class="content-card card-four" no-shadow @click.native="openCard">
            <f7-card-header class="no-padding" valign="bottom">
                <f7-link href="/quartalsprogram">Quartalsprogramm planen</f7-link>
            </f7-card-header>
        </f7-card>

        <f7-card class="content-card card-five" no-shadow @click.native="openCard">
            <f7-card-header class="no-padding" valign="bottom">
                <f7-link href="/hock">Höck</f7-link>
            </f7-card-header>
        </f7-card>

        <f7-card class="content-card card-six" no-shadow @click.native="openCard">
            <f7-card-header class="no-padding" valign="bottom">
                <f7-link href="/elternkontakt">Elternkontakt</f7-link>
            </f7-card-header>
        </f7-card>

        <f7-card class="content-card card-seven" no-shadow @click.native="openCard">
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
            if (event.target.tagName == 'A') return;
            let link = event.target.querySelector('a.link');
            this.$f7router.navigate(link.pathname);
        },
    }

};
</script>