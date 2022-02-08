<template>
    <section class="about">
        <h1 class="about__title">About</h1>
        <img class="about__image" src="../../assets/daniel.png" alt="" />
        <div class="about__info">
            <p class="about__text">
                Write something about yourself and who you are
            </p>
            <p class="about__text">
                Write something about your professional life
            </p>
            <p class="about__text">Write something about what you want to do</p>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@use "../../styles/varibles" as *;
.about {
    background: rgba($color: $background-color, $alpha: 0.1);
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    &__title {
        color: $text-color-dark;
        width: 100%;
    }
    &__image {
        background-size: cover;
        background-position: center;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
            rgba(0, 0, 0, 0.22) 0px 10px 10px;
        border-radius: 20px;
        width: 50%;
    }
    &__info {
        width: 50%;
        padding: 1rem;
    }

    &__text {
        color: $text-color-dark;
    }
}
</style>
