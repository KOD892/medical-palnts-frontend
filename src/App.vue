<template>
  <HeaderView v-if="!$route.meta.hideNavbar" />

  <router-view :plants="plants" @register="register" :isLoggedIn="isLoggedIn" />
</template>

<script>
import axios from "axios";
import HeaderView from "./components/HeaderView.vue";
export default {
  components: {
    HeaderView,
  },
  data() {
    return {
      plants: [],
      user: {},
      isLoggedIn: false,
    };
  },
  methods: {
    async getPlants() {
      // const res = await fetch("http://localhost:5000/Plants");
      // return await res.json();
      try {
        const response = await axios.get(
          "http://localhost:1337/api/plants?fields=name&fields=description&populate=image"
        );
        return response.data.data;
      } catch (error) {
        console.error(error);
      }
    },
    //user registration
    register(userData) {
      axios
        .post("http://localhost:1337/api/auth/local/register", {
          username: userData.username,
          email: userData.email,
          password: userData.password,
        })
        .then(() => {
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log("An error occurred:", error.response);
        });
    },
    // get user
    async getUser() {
      try {
        await axios.get("http://localhost:1337/api/users/me", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        this.$store.commit("setAuthentication", true);
      } catch (error) {
        console.error(error);
        this.isLoggedIn = false;
      }
    },
  },
  async created() {
    // get plants
    this.plants = await this.getPlants();
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap");
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Poppins", sans-serif;
  font-size: 15px !important;
}
a {
  color: black;
}
p {
  font-size: 15px;
}
/* nav dropdown */
.dropdown-content li > a,
.dropdown-content li > span {
  font-size: 12px !important;
  color: #4caf50 !important;
}
#landing {
  background: url(./assets/annie-spratt-JLpDkdcuceI-unsplash.jpg);
  width: 100%;
  height: 80vh;
  background-size: cover;
}
#landing .overlay {
  background-color: #1919198f;
  width: 100%;
  height: 100%;
}
#landing h4,
#landing p {
  margin: 0;
  padding: 0;
  color: white;
  position: relative;
  width: 90%;
  top: 40%;
  left: 10%;
}
.featured-img img {
  min-width: 100% !important;
  max-height: 250px;
}
.img-container {
  width: 200px !important;
  height: 150px !important;
}
.herb-img {
  max-width: 200px;
  max-height: 200px;
}
.collection .collection-item.avatar {
  padding: 8px 0 !important;
}
/* searchbar */
.search-bar {
  margin: 10px 0 !important;
  border: 2px solid rgb(196, 236, 196) !important ;
  border-radius: 8px;
}
.rd-btn {
  margin: 2rem 0;
  font-weight: 200;
  font-size: 15px;
}
ul .active {
  background-color: #4caf50 !important;
}

/* herb page styles */
.grid {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 60px;
}
.plant-img img {
  width: 280px;
  max-height: 280px;
}
.side-nav {
  padding-top: 10px;
  /* border-right:1px solid  #4CAF50 ; */
  height: 100vh;
  border-right: none;
}
.side-nav .collection {
  border-top: none !important;
  border-left: none !important;
}
.side-nav ul li:hover {
  background-color: #e0e0e0 !important ;
}
</style>
