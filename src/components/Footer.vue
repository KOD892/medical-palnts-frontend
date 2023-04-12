<template>
  <footer class="page-footer green">
    <div class="footer-copyright green">
      <div class="container">
        © 2023 Copyright Text
        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterView",
};
</script>
<style scoped>
footer {
  position: relative;
  width: 100%;
  bottom: 0;
  z-index: -2;
}
</style>
