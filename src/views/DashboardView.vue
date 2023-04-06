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

    <section id="plants" class="section herbs container">
      <div class=""><h5>Medicinal Plants</h5></div>
      <!-- search bar -->
      <div class="search-bar">
        <div class="nav-wrapper white">
          <form>
            <div class="input-field">
              <input
                id="search"
                type="search"
                required
                placeholder="Common name,Botanical name"
              />
              <label class="label-icon" for="search"
                ><i class="material-icons">search</i></label
              >
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </div>

      <ul class="collection">
        <li class="collection-item avatar row">
          <div class="col m5 img-container left">
            <img
              src="../assets/garlic.jpg"
              alt=""
              class="responsive-image herb-img"
            />
          </div>
          <div class="write-up col m7">
            <span class="title green-text">Garlic</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              perspiciatis optio commodi culpa eius cumque voluptatibus harum
              modi debitis esse?....
            </p>
            <div class="rd-btn">
              <a href="/herb.html">Read more</a>
            </div>
          </div>
        </li>
      </ul>
      <!-- pagination -->
      <div class="container">
        <ul class="pagination">
          <li class="disabled">
            <a href="#!"><i class="material-icons">chevron_left</i></a>
          </li>
          <li class="active"><a href="#!">1</a></li>
          <li class="waves-effect"><a href="#!">2</a></li>
          <li class="waves-effect"><a href="#!">3</a></li>
          <li class="waves-effect"><a href="#!">4</a></li>
          <li class="waves-effect"><a href="#!">5</a></li>
          <li class="waves-effect">
            <a href="#!"><i class="material-icons">chevron_right</i></a>
          </li>
        </ul>
      </div>
    </section>
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
export default {
  name: "DashboardView",
};
</script>


<style scoped>
 .side-nav{
        padding-top: 0;
        position: fixed;
        width: 220px;
    }
    /* .dash{
        display: grid;
        grid-template-columns: 1fr 4fr;
        padding: 0;
    } */
    .user-view{
        padding: 20px 10px;
        position: relative;
        z-index: 999;
    }
    #plants{
        padding-left: 100px;
    }
</style>
