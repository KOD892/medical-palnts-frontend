<template>
  <li class="collection-item avatar row">
    <div class="col m5 img-container left">
      <!-- to change img src -->
      <img
        src="../assets/garlic.jpg"
        alt=""
        class="responsive-image herb-img"
      />
    </div>
    <div class="write-up col m7">
      <span class="title green-text">{{ plant.attributes.name }}</span>
      <p>
        {{ plant.attributes.description }}
      </p>
      <div class="rd-btn">
        <router-link :to="`/plant/${plant.id}`">Read more</router-link>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "PlantComponent",
  props: {
    plant: Object,
  },
  data() {},
};
</script>
