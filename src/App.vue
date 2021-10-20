<template>
    <v-app >
        <router-view />
    </v-app>
</template>

<script>
export default {
    name: 'App',

    components: {
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