<template>
    <f7-page>
        <f7-navbar title="Cudeschin"></f7-navbar>

        <f7-card expandable :style="{height: '100px'}">
            <f7-card-content :padding="false">
                <div class="bg-color-green" :style="{height: '100px'}">
                    <f7-card-header text-color="white" class="display-block">Aktivität planen</f7-card-header>
                    <f7-link
                        card-close
                        color="black"
                        class="card-opened-fade-in"
                        :style="{position: 'absolute', right: '15px', top: '15px'}"
                        icon-f7="close_round_fill"
                    ></f7-link>
                </div>
                <div class="card-content-padding">
                    <p>Bereits bei der Quartalsplanung habt ihr die Aktivität grob geplant. Diese Unterlagen dienen euch nun als Grundlage.</p>

                    <h3>Ziele festlegen:</h3>
                    <p>Was sollen die Teilnehmenden lernen und erleben?</p>
                    <p>Was wollen wir als Leitungsteam erreichen?</p>
                </div>
            </f7-card-content>
        </f7-card>
    </f7-page>
</template>

<script>
export default {};
</script>