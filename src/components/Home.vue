<template>
  <div class="banner fullscreen">
    <div class="center-align container">
      <h1>My To-do App</h1>
      <div class="divider"></div>
      <h5>Create to-do lists with multiple tasks.</h5>
      <br />
      <router-link class="btn blue darken-1 center-text" to="/todos">Let's get started!</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {}
};
</script>

<style scoped>
.fullscreen {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/coffee-cup-desk-pen.jpg");
  background-position: center;
  background-size: cover;
}
</style>
