<template>
  <main>
    <About />
    <MyExperiences />
    <MySkills />
    <Contact />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import About from '~/components/About.vue';
import Contact from '~/components/Contact.vue';
import MyExperiences from '~/components/MyExperiences.vue';
import MySkills from '~/components/MySkills.vue';

const OFFSET = 150;

export default Vue.extend({
  name: "IndexPage",
  components: { About, MyExperiences, MySkills, Contact },
  methods: {
    revealHiddenElements() {
      document.querySelectorAll(".reveal").forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = OFFSET;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        } else if (element.classList.contains('toggle')) {
          element.classList.remove("active");
        }
      });
    },
  },
  mounted: function () {
    window.addEventListener("scroll", this.revealHiddenElements);
    // To check the scroll position on page load
    this.revealHiddenElements();
  }
})
</script>
