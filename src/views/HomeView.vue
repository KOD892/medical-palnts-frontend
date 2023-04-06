<template>
  <section id="landing">
    <div class="overlay">
      <p>Welcome to the..</p>
      <h4>Medicinal Plants Repository</h4>
    </div>
  </section>
  <div class="divider"></div>
  <section id="plants" class="container section herbs">
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
            perspiciatis optio commodi culpa eius cumque voluptatibus harum modi
            debitis esse?....
          </p>
          <div class="rd-btn">
            <router-link to="/plant">Read more</router-link>
          </div>
        </div>
      </li>
      <li class="collection-item avatar row">
        <div class="col m6 img-container left">
          <img
            src="../assets/av.jpg"
            alt="https://unsplash.com/@karishea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            class="responsive-image herb-img"
          />
        </div>
        <div class="col m6">
          <span class="title green-text">Aloe Vera</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit
            commodi cupiditate quisquam, numquam iure consectetur odit
            recusandae pariatur vero quasi cum blanditiis suscipit quidem
            asperiores quia ex molestiae?
          </p>
          <div class="rd-btn">
            <router-link to="/plant">Read more</router-link>
          </div>
        </div>
      </li>
      <li class="collection-item avatar row">
        <div class="col m6 img-container left">
          <img
            src="../assets/av.jpg"
            alt="https://unsplash.com/@karishea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            class="responsive-image herb-img"
          />
        </div>
        <div class="col m6">
          <span class="title green-text">Aloe Vera</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit
            commodi cupiditate quisquam, numquam iure consectetur odit
            recusandae pariatur vero quasi cum blanditiis suscipit quidem
            asperiores quia ex molestiae?
          </p>
          <div class="badge rd-btn">
            <router-link to="/plant">Read more</router-link>
          </div>
        </div>
      </li>
      <li class="collection-item avatar row">
        <div class="col m6 img-container left">
          <img
            src="../assets/av.jpg"
            alt="https://unsplash.com/@karishea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            class="responsive-image herb-img"
          />
        </div>
        <div class="col m6">
          <span class="title green-text">Aloe Vera</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit
            commodi cupiditate quisquam, numquam iure consectetur odit
            recusandae pariatur vero quasi cum blanditiis suscipit quidem
            asperiores quia ex molestiae?
          </p>
          <div class="badge rd-btn">
            <router-link to="/plant">Read more</router-link>
          </div>
        </div>
      </li>
    </ul>
  </section>
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
</template>
<script>
export default {
  name: "HomeView",
};
</script>
