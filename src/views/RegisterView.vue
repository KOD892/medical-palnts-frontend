<template>
  <div class="row">
    <div class="left col m8 left white container">
      <p class="green-text go-back">
        <router-link to="/">Go back </router-link>
      </p>
      <div class="card">
        <div class="card-content">
          <span class="card-title center">Sign Up</span>
          <form @submit.prevent="onRegister">
            <div class="row">
              <div class="input-field col s12">
                <input
                  v-model="formData.username"
                  required
                  id="username"
                  type="text"
                  class="validate"
                />
                <label for="username">username</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input
                  v-model="formData.email"
                  required
                  id="email"
                  type="email"
                  class="validate"
                />
                <label for="email">Email</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input
                  v-model="formData.password"
                  required
                  id="password"
                  type="password"
                  class="validate"
                />
                <label for="password">Password</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input
                  v-model="formData.password2"
                  required
                  id="repeatPassword"
                  type="password"
                  class="validate"
                />
                <label for="repeatPassword">Repeat Password</label>
              </div>
            </div>
            <p v-if="showErr" class="red-text">Passwords do not match!!</p>
            <div class="row">
              <button class="col s12 btn green">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
      <p class="center">
        Already have an account? <a href="/login.html">sign In</a>
      </p>
    </div>
    <div class="col m4 right green">
      <!-- <div class="logo"><img src="./logo.png" alt=""></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      formData: {
        username: "",
        email: "",
        password: "",
        password2: "",
      },
      showErr: false,
    };
  },
  methods: {
    onRegister() {
      if (this.formData.password == this.formData.password2) {
        this.$emit("register", this.formData);
      } else {
        setTimeout(() => {
          this.showErr = true;
        }, 2000);
        this.showErr = false;
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
  margin: 15px auto;
}

.logo img {
  width: 150px;
  margin-top: 50%;
  margin-left: 30%;
  border-radius: 30%;
}
.go-back {
  cursor: pointer;
  padding-left: 20px;
  padding-top: 0;
}
.input-field {
  margin-bottom: 0 !important;
}
</style>
