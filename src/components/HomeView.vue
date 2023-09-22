<template>
  <div class="home">
    <nav class="top-nav">
      <RouterLink to="/" class="nav-item">Home</RouterLink>
      <RouterLink to="/about" class="nav-item">About</RouterLink>
      <RouterLink to="/experience" class="nav-item">Experience</RouterLink>
    </nav>
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I'm Abdullah, a passionate and hardworking developer with a love for creating
          innovative solutions (Like this website).
        </p>
        <router-link to="/about" class="button">Learn More</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import {RouterLink} from "vue-router";

export default {
  name: "HomePage",
  components: {RouterLink},
};
</script>

<style scoped>
</style>
