<template>
    <div class="footer">
        <p class="footer__tag">&copy; Daniel Stich {{ year }}</p>
    </div>
</template>

<script>
const date = new Date();
const year = date.getFullYear();
export default {
    name: "Footer",
    data() {
        return {
            year,
        };
    },
};
</script>

<style lang="scss">
@use "../../styles/varibles" as *;
.footer {
    background-color: $background-color;
    display: flex;
    justify-content: center;
    &__tag {
        color: $text-color-light;
        margin: 0;
        padding: 1rem;
    }
}
</style>
