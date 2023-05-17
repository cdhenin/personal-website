
<template>
  <div id="copyright">
    Tous droits réservés © Claire DHÉNIN | <span id="copyright-date"></span> -
    <NuxtLink class="link" to="/mentions-legales">Mentions légales</NuxtLink>
  </div>
</template>

<script>

export default {
  mounted: function () {
    document.getElementById('copyright-date').innerHTML = new Date().getFullYear();
  }
}
</script>
<style lang="scss" scoped>
#copyright {
  background-color: $secondary-color-dark;
  color: $primary-color-light;
  text-align: center;
  padding: $spacing-2;
  font-size: 0.875rem;

  >a:hover {
    color: $primary-color-light;
    font-weight: 600;
  }
}
</style>
