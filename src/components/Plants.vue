<template>
  <section id="plants" class="container section herbs">
    <div class=""><h5>Medicinal Plants</h5></div>
    <!-- search bar -->
    <div class="search-bar">
      <div class="nav-wrapper white">
        <!-- <form> -->
        <div class="input-field">
          <input
            id="search"
            type="search"
            required
            placeholder="Common name,Botanical name"
            v-model="searchText"
          />
          <label class="label-icon" for="search"
            ><i class="material-icons">search</i></label
          >
          <i class="material-icons">close</i>
        </div>
        <!-- </form> -->
      </div>
    </div>

    <ul class="collection" v-for="plant in filterdPlants" :key="plant.id">
      <!-- plant -->
      <PlantComponent :plant="plant" :api="api" />
    </ul>
  </section>
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
  data() {
    return {
      searchText: "",
    };
  },
  computed: {
    filterdPlants() {
      return this.plants.filter((plant) => {
        return plant.attributes.name
          .toLowerCase()
          .match(this.searchText.toLocaleLowerCase());
      });
    },
  },
};
</script>
<style scoped>
#plants {
  padding-left: 100px;
}
</style>
