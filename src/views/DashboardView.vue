<template>
  <HeaderView />
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
            <div><span class="name">John Doe</span></div>
            <div><span class="email">jdandturk@gmail.com</span></div>
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
    <form>
      <div class="modal-content">
        <div class="row">
          <div class="input-field col s12">
            <input required id="botanical-name" type="text" class="validate" />
            <label for="botanical-name">botanical name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input required id="botanical-name" type="text" class="validate" />
            <label for="botanical-name">botanical name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input required id="botanical-name" type="text" class="validate" />
            <label for="botanical-name">botanical name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input required id="botanical-name" type="text" class="validate" />
            <label for="botanical-name">botanical name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input required id="botanical-name" type="text" class="validate" />
            <label for="botanical-name">botanical name</label>
          </div>
        </div>
      </div>
      <div class="row modal-footer grey lighten-4">
        <button
          class="modal-close waves-effect waves-green btn-flat btn red white-text"
        >
          Cancel <i class="material-icons">cancel</i>
        </button>
        <button class="modal-close waves-effect waves-green btn-flat btn green">
          Add Plant
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import M from "materialize-css";
import HeaderView from "../components/HeaderView.vue";
import PlantsComponent from "../components/Plants.vue";
export default {
  name: "DashboardView",
  props: {
    plants: Array,
  },
  components: {
    HeaderView,
    PlantsComponent,
  },
  mounted() {
    M.AutoInit();
    // console.log(this.$router.currentRoute._value.path)
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
