<template>
  <section id="landing">
    <div class="overlay">
      <p>Welcome to the..</p>
      <h4>Medicinal Plants Repository</h4>
    </div>
  </section>
  <div class="divider"></div>

  <!-- all plants -->
  <PlantsComponent :plants="plants" />

  <FooterView />
</template>
<script>
import FooterView from "../components/Footer.vue";
import PlantsComponent from "../components/Plants.vue";
export default {
  name: "HomeView",
  props: {
    plants: Array,
  },
  components: {
    FooterView,
    PlantsComponent,
  },
};
</script>
