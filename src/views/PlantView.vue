<template>
  <section id="main ">
    <div class="container">
      <div class="about">
        <div class="title">
          <h5>{{ plant.attributes.name }}</h5>
        </div>
        <hr />
        <div class="grid about-plant">
          <div class="plant-img">
            <img
              class="responsive"
              :src="
                'http://localhost:1337' +
                plant.attributes.image.data.attributes.url
              "
              alt=""
            />
          </div>
          <div class="details">
            <table>
              <tbody>
                <tr>
                  <td><b>Botanical Name</b></td>
                  <td>{{ plant.attributes.botanical }}</td>
                </tr>
                <tr>
                  <td><b>Common Names</b></td>
                  <td>{{ plant.attributes.local }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="other-info">
          <table>
            <thead>
              <b>Description</b>
            </thead>
            <tbody>
              <tr>
                <td>{{ plant.attributes.description }}</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <b>Uses</b>
            </thead>
            <tbody>
              <tr>
                <td>{{ plant.attributes.use }}</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <b>Dosage</b>
            </thead>
            <tbody>
              <tr>
                <td>{{ plant.attributes.dosage }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
  <FooterView />
</template>
<script>
import axios from "axios";
import FooterView from "../components/Footer.vue";
export default {
  components: {
    FooterView,
  },
  data() {
    return {
      plant: {},
      id: "",
    };
  },
  methods: {
    async getPlant(id) {
      try {
        const res = await axios.get(
          `http://localhost:1337/api/plants/${id}?populate=image`
        );
        return res.data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    this.id = this.$route.params.id;
    this.plant = await this.getPlant(this.id);
  },
};
</script>

<style scoped>
.other-info table {
  padding: 10px 5px;
  margin: 10px 0;
}
</style>
