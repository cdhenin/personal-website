<template>
  <main @click="closeMobileMenu">
    <NavBar />
    <Nuxt />
    <CopyRight />
  </main>
</template>

<script>
import CopyRight from '~/components/CopyRight.vue';
import NavBar from '~/components/NavBar.vue';

export default {
    methods: {
        closeMobileMenu() {
            document.querySelector("nav > ul").classList.remove("visible");
        },
    },
    components: { CopyRight, NavBar }
}
</script>

<style lang="scss">
*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    overflow-x: hidden;
}

body {
    margin: 0;
    font-family: $main-font;
    background-image: url('/assets/concrete-wall.png');
    background-color: $primary-color-light;
}
</style>
