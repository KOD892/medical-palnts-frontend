<template>
  <section id="main ">
    <div class="container">
      <div class="about">
        <div class="title"><h5>User Profile</h5></div>
        <hr />
        <div class="user-profile row">
          <div class="user-img col s12">
            <img class="responsive circle" src="../assets/profile.jpg" alt="" />
          </div>
          <div class="details col s12 offset-m2">
            <table>
              <tbody>
                <tr>
                  <td><b>Username</b></td>
                  <td>John Doe</td>
                </tr>
                <tr>
                  <td><b>Email</b></td>
                  <td>john@gmail.com</td>
                </tr>
                <tr>
                  <td><b>Role</b></td>
                  <td>Contributor</td>
                </tr>
              </tbody>
            </table>
            <div class="divider"></div>
            <div class="buttons">
              <button class="btn btn-small red">Delete Acc</button>
              <button class="btn btn-small">
                <a class="modal-trigger white-text" href="#modal2"
                  >Edit Profile
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Modal Structure -->
  <div id="modal2" class="modal modal-fixed-footer">
    <form>
      <div class="modal-content">
        <div class="row">
          <div class="input-field col s12">
            <input required id="email" type="email" class="validate" />
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <label for="profile">Profile Image</label>
            <input required id="profile" type="file" class="validate" />
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
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
          <i class="material-icons right">send</i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import M from "materialize-css";
export default {
  name: "ProfileView",
  components: {},
  mounted() {
    M.AutoInit();
    // console.log(this.$router.currentRoute._value.path)
  },
};
</script>
<style scoped>
.user-img {
  width: 100%;
}
.user-img img {
  width: 100px;
  max-height: 100px;
  margin: 0 auto;
}
.buttons {
  margin-top: 5%;
}
</style>
