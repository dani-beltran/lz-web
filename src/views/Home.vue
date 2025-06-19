<template>
  <div class="home">
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
  </div>
</template>

<script>
import SectionOne from "../components/SectionOne.vue";
import SectionTwo from "../components/SectionTwo.vue";
import SectionThree from "../components/SectionThree.vue";
import SectionFour from "../components/SectionFour.vue";

export default {
  name: "Home",
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
  },
};
</script>
