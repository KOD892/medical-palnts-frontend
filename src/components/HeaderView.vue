<template>
  <!-- navbar -->
  <!-- Dropdown Structure -->
  <ul id="dropdown1" class="dropdown-content">
    <li><router-link to="/profile">My Profile</router-link></li>
    <li><router-link to="/dashboard">Dashboard</router-link></li>
    <li><a href="/logout">Logout</a></li>
  </ul>
  <div class="navbar-fixed">
    <nav class="green">
      <div class="nav-wrapper container">
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="material-icons">menu</i></a
        >

        <ul class="right hide-on-med-and-down">
          <li :class="{ hide: isLoggedIn }">
            <router-link to="/login">Sign In</router-link>
          </li>
          <li :class="{ hide: isLoggedIn }">
            <router-link to="/register" class="btn white green-text"
              >Sign up</router-link
            >
          </li>
          <!-- Dropdown Trigger -->
          <li :class="{ hide: !isLoggedIn }">
            <div class="dropdown-trigger" data-target="dropdown1">
              <i class="large material-icons right"
                >account_circle arrow_drop_down</i
              >
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="register.html">Sign In</a></li>
    <li><a href="login.html" class="btn white green-text">Sign up</a></li>
  </ul>
</template>
<script>
import M from "materialize-css";

export default {
  name: "HeaderView",
  data() {
    return {
      authenticated: false,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isAuth;
    },
  },
  mounted() {
    M.AutoInit();
    // console.log(this.$router.currentRoute._value.path)
  },
};
</script>
<style scoped>
.hide {
  display: none;
}
</style>
