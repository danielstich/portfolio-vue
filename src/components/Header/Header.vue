<template>
    <header class="header">
        <h1 class="header__title">Daniel Stich</h1>
        <p class="header__tag">Vue.js</p>
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item">Projects</li>
                <li class="nav__item">Blog</li>
                <li class="nav__item">About</li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Header",
};
</script>

<style lang="scss">
@import "./Header.scss";
</style>
