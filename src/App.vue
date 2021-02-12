<template>
  <v-app>
    <Header />
    <v-main>
      <transition name="fade">
        <router-view />
      </transition>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Header,
    Footer
  },

  data: () => ({
    //
  })
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
#app {
  background-color: azure;
}

a {
  font-size: 1.2rem;
  font-weight: normal;
  white-space: nowrap;
  align-content: center;
  text-decoration: none;
}

.name {
  margin-left: 10px;
  text-align: center;
  color: white;
}
</style>
