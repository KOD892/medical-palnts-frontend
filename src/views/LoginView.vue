<template>
  <div class="row">
    <div class="left col m8 white container">
      <p class="green-text go-back">
        <router-link to="/">Go back </router-link>
      </p>
      <div class="card">
        <div class="card-content">
          <span class="card-title center">Sign In</span>
          <form @submit.prevent="login(formData)">
            <div class="row">
              <div class="input-field col s12">
                <input
                  required
                  id="username"
                  v-model="formData.username"
                  type="text"
                  class="validate"
                />
                <label for="username">username</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input
                  required
                  id="password"
                  type="password"
                  class="validate"
                  v-model="formData.password"
                />
                <label for="password">Password</label>
              </div>
            </div>
            <div class="row">
              <button class="col s12 btn green">Sign In</button>
            </div>
          </form>
        </div>
      </div>
      <p class="center">
        Don't have an account? <a href="/register.html">sign up</a>
      </p>
    </div>
    <div class="col m4 right green">
      <!-- <div class="logo"><img src="./logo.png" alt=""></div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginView",
  emits: ["login"],
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    //login
    async login(userData) {
      try {
        const response = await axios.post(
          "http://localhost:1337/api/auth/local",
          {
            identifier: userData.username,
            password: userData.password,
          }
        );
        localStorage.setItem("token", response.data.jwt);
        this.$store.commit("setAuthentication", true);
        this.$router.push("/");
        console.log("User profile", response.data.user);
      } catch (error) {
        console.log("An error occurred:", error.response);
      }
    },
  },
};
</script>
<style scoped>
.left,
.right {
  height: 100vh !important;
}
.card {
  max-width: 400px;
  margin: 50px auto;
}

.logo img {
  width: 150px;
  margin-top: 50%;
  margin-left: 30%;
  border-radius: 30%;
}
.go-back {
  cursor: pointer;
  padding: 2% 0 0 2%;
}
.input-field {
  margin-bottom: 0 !important;
}
</style>
