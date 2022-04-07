<template>
  <div class="contact">
    <aside class="contact__aside">
      <img class="contact__image" src="../../assets/dsquare.jpg" alt="" />
      <div class="contact__icon-container">
        <a
          href="https://github.com/danielstich/"
          class="contact__link"
          target="_blank"
          ><img src="../../assets/github.png" alt="" class="contact__icon"
        /></a>
        <a
          href="https://www.linkedin.com/in/danielwstich/"
          class="contact__link"
          target="_blank"
          ><img src="../../assets/linkedin.png" alt="" class="contact__icon"
        /></a>
        <a
          href="mailto:danielwstich@gmail.com"
          class="contact__link"
          target="_blank"
          ><img src="../../assets/gmail.png" alt="" class="contact__icon"
        /></a>
      </div>
    </aside>
    <main class="contact__resume">
      <a
        target="_blank"
        href="https://drive.google.com/file/d/1A_tgmUsbAoM17za1j0zs35bCl_gH_hb9/view?usp=sharing"
        ><img src="../../assets/resume.png" alt="" class="contact__resume-img"
      /></a>
    </main>
  </div>
</template>

<style lang="scss">
@use "../../styles/varibles" as *;
.contact {
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem;
  &__contact__aside {
    width: 25%;
  }

  &__resume {
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }

  &__resume-img {
    width: min(50vw, 450px);

    &:hover {
      transition: 0.5s;
      transform: scale(1.05);
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
  }

  &__image {
    width: 200px;
    border-radius: 10px;
  }

  &__icon-container {
    margin-top: 1rem;
    width: 200px;
    display: flex;
    justify-content: space-around;
  }

  &__link {
    align-self: flex-end;
    height: 100%;
  }

  &__icon {
    width: 2rem;
  }
}
</style>
