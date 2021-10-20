<template>
    <v-app >
        <checknum/>
    </v-app>
</template>

<script>
import Checknum from './components/checkNum.vue'

export default {
    name: 'App',

    components: {
        Checknum,
    },

    data: () => ({
    //
    }),
};
</script>
<style>
@font-face {
  font-family: "seoulhangangcondensed-bold";
  font-display: auto;
  src: local("seoulhangangcondensed-bold"), url(./fonts/seoulhangangcondensed-bold.ttf) format("truetype")
}

.v-application {
  font-family: "seoulhangangcondensed-bold" !important; 
}
</style>