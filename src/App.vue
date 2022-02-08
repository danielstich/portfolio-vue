<template>
    <Header />
</template>

<script>
import Header from "./components/Header/Header.vue";

export default {
    name: "App",
    components: {
        Header,
    },
};
</script>

<style lang="scss">
@font-face {
    font-family: "Montserrat";
    src: url("./styles/fonts/Montserrat-Medium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
}
@font-face {
    font-family: "Montserrat";
    src: url("./styles/fonts/Montserrat-MediumItalic.ttf") format("truetype");
    font-weight: 500;
    font-style: italic;
}

#app {
    font-family: Montserrat;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

body {
    margin: 0;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}
</style>
