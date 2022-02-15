<template>
    <Header />
    <Main />
    <Footer />
</template>

<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import Main from "./components/Main/Main.vue";

export default {
    name: "App",
    components: {
        Header,
        Footer,
        Main,
    },
};
</script>

<style lang="scss">
@use "./styles/varibles" as *;
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
    color: $text-color-dark;
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
