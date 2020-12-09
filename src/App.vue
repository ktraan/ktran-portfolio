<template>
  <v-app class="myFont">
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
.myFont {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
#app {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  background-color: azure;
}

main {
  /* color: dimgrey; */
}

body {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
a {
  font-size: 1.2rem;
  font-weight: normal;
  white-space: nowrap;
  align-content: center;
  text-decoration: none;
}

.h1 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.name {
  margin-left: 10px;
  text-align: center;
  color: white;
}
</style>
