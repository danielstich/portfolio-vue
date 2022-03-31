<template>
  <header class="header">
    <h1 class="header__title">
      <router-link class="nav__link" to="/">Daniel Stich</router-link>
    </h1>
    <p class="header__tag">Vue.js</p>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link class="nav__link" to="/Projects">Projects</router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/Blog">Blog</router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/Learning"
            >Learning Journey</router-link
          >
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/About">About</router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" to="/Contact">Contact</router-link>
        </li>
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
