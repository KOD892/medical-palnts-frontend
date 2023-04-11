<template>
  <div class="dash">
    <section class="side-nav grey lighten-3">
      <ul class="collection">
        <div class="white user-info">
          <div class="user-view">
            <div>
              <router-link to="/profile"
                ><img
                  class="circle"
                  width="100"
                  height="100"
                  src="../assets/profile.jpg"
              /></router-link>
            </div>
            <div>
              <span class="name">{{ user.username }}</span>
            </div>
            <div>
              <span class="email">{{ user.email }}</span>
            </div>
          </div>
        </div>
        <li class="collection-item active"><a href="#!">All Plants</a></li>
        <li class="collection-item grey lighten-3">
          <a href="#!">My Plants</a>
        </li>
        <li class="collection-item grey lighten-3">
          <a class="modal-trigger" href="#modal1">Add Plant</a>
          <i class="material-icons right">add</i>
        </li>
        <li class="collection-item grey lighten-3">
          <a href="#"
            >Under Review <i class="material-icons right">remove_red_eye</i></a
          >
        </li>
      </ul>
    </section>
    <!-- plants -->
    <PlantsComponent :plants="plants" />
  </div>

  <!-- Modal Structure -->
  <div id="modal1" class="modal modal-fixed-footer">
    <form @submit.prevent="postPlant()">
      <div class="modal-content">
        <div class="row">
          <div class="input-field col s12">
            <input
              required
              id="name"
              type="text"
              class="validate"
              v-model="plant.name"
            />
            <label for="name">Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              required
              id="botanical"
              type="text"
              class="validate"
              v-model="plant.botanical"
            />
            <label for="botanical">Botanical name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              required
              id="local"
              type="text"
              class="validate"
              v-model="plant.local"
            />
            <label for="local">Local names</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea
              required
              id="description"
              class="materialize-textarea"
              v-model="plant.description"
            ></textarea>
            <label for="description">Description</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea
              required
              id="use"
              class="materialize-textarea"
              v-model="plant.use"
            ></textarea>
            <label for="use">Use</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea
              required
              id="dosage"
              class="materialize-textarea"
              v-model="plant.dosage"
            ></textarea>
            <label for="dosage">Dosage</label>
          </div>
        </div>
        <div class="row">
          <div class="input-filed">
            <label for="image">plant image</label>
            <input type="file" name="image" @change="onFileChange" required />
          </div>
        </div>
      </div>
      <div class="row modal-footer grey lighten-4">
        <div
          class="modal-close waves-effect waves-green btn-flat btn red white-text"
        >
          Cancel <i class="material-icons">cancel</i>
        </div>
        <button
          type="submit"
          class="modal-close waves-effect white-text waves-green btn green"
        >
          Add Plant
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import M from "materialize-css";
import axios from "axios";
import PlantsComponent from "../components/Plants.vue";
export default {
  name: "DashboardView",
  props: {
    plants: Array,
  },
  data() {
    return {
      user: {},
      plant: {
        // username: this.user.username,
        name: "",
        botanical: "",
        local: "",
        description: "",
        use: "",
        dosage: "",
        users_permissions_user: "",
      },
      plantImg: null,
    };
  },
  components: {
    PlantsComponent,
  },
  methods: {
    //on file change
    onFileChange(e) {
      this.plantImg = e.target.files[0];
    },
    //post plant
    async postPlant() {
      const fd = new FormData();
      this.plant.users_permissions_user = this.user;
      fd.append("files.image", this.plantImg, this.plant.name);
      fd.append("data", JSON.stringify(this.plant));
      console.log(fd);
      try {
        const response = await axios.post(
          "http://localhost:1337/api/plants",
          fd,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
    // get user
    async getUser() {
      try {
        const response = await axios.get("http://localhost:1337/api/users/me", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        // this.user = response.data.user;
        this.user = response.data;
      } catch (error) {
        this.$router.push("/");
        console.error(error);
      }
    },
  },
  mounted() {
    M.AutoInit();
    // console.log(this.$router.currentRoute._value.path)
    this.getUser();
  },
};
</script>

<style scoped>
.side-nav {
  padding-top: 0;
  position: fixed;
  width: 220px;
}
/* .dash{
        display: grid;
        grid-template-columns: 1fr 4fr;
        padding: 0;
    } */
.user-view {
  padding: 20px 10px;
  position: relative;
  z-index: 999;
}
</style>
