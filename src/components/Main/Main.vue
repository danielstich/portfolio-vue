<template>
    <main class="main">
        <About />
    </main>
</template>

<script>
import About from "../About/About.vue";
export default {
    name: "Main",
    components: {
        About,
    },
};
</script>

<style>
.main {
    /* height: 500px; */
}
</style>
