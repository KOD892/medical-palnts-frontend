<template>
  <section id="plants" class="container section herbs">
    <div class=""><h5>Medicinal Plants</h5></div>
    <!-- search bar -->
    <div class="search-bar">
      <div class="nav-wrapper white">
        <form>
          <div class="input-field">
            <input
              id="search"
              type="search"
              required
              placeholder="Common name,Botanical name"
            />
            <label class="label-icon" for="search"
              ><i class="material-icons">search</i></label
            >
            <i class="material-icons">close</i>
          </div>
        </form>
      </div>
    </div>

    <ul class="collection" v-for="plant in plants" :key="plant.id">
      <!-- plant -->
      <PlantComponent :plant="plant" :api="api" />
    </ul>
  </section>
  <!-- pagination -->
  <div class="container">
    <ul class="pagination">
      <li class="disabled">
        <a href="#!"><i class="material-icons">chevron_left</i></a>
      </li>
      <li class="active"><a href="#!">1</a></li>
      <li class="waves-effect"><a href="#!">2</a></li>
      <li class="waves-effect"><a href="#!">3</a></li>
      <li class="waves-effect"><a href="#!">4</a></li>
      <li class="waves-effect"><a href="#!">5</a></li>
      <li class="waves-effect">
        <a href="#!"><i class="material-icons">chevron_right</i></a>
      </li>
    </ul>
  </div>
</template>
<script>
import PlantComponent from "./Plant.vue";
export default {
  name: "PlantsComponent",
  props: {
    plants: Array,
    api: String,
  },
  components: {
    PlantComponent,
  },
};
</script>
<style scoped>
#plants {
  padding-left: 100px;
}
</style>
