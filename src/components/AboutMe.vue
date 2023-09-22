<template>
  <div class="home">
    <nav class="top-nav"> 
      <RouterLink to="/" class="nav-item">Home</RouterLink>
      <RouterLink to="/about" class="nav-item">About</RouterLink>
      <RouterLink to="/experience" class="nav-item">Experience</RouterLink>
    </nav>
    <section class="hero">
      <div class="hero-content">
        <h1>About Me</h1>
        <p>
          I'm Abdullah, a full time university student and I have a full time job.
        </p>
        <router-link to="/" class="button">Home Page</router-link>
        <div v-if="showDetails">
          <h2>Contact Details</h2>
          <ul class="contact-details">
            <li>Email: s217656513@deakin.edu.au</li>
            <li>Phone: +61411111111</li>
            <!-- Add more contact details as needed -->
          </ul>
        </div>
        <button @click="toggleDetails" class="button">Toggle Details</button>
      </div>

    </section>
  </div>
</template>

<script>
import {RouterLink} from "vue-router";

export default {
  name: "HomePage",
  components: {RouterLink},
  data() {
    return {
      showDetails: false,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
};
</script>

<style scoped>
</style>
