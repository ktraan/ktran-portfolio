<template>
  <v-app-bar app color="#32ad5d">
    <v-row class="ml-1 d-flex">
      <div id="nav" class="d-flex" width="300">
        <v-btn
          color="#32ad5d"
          class="d-none d-sm-flex"
          min-width="30"
          width="35"
          flat
          rounded
          elevation="0"
          to="/"
          ><v-icon color="white">mdi-code-tags</v-icon></v-btn
        >
        <v-toolbar-title style="color:white" class="ml-3 mt-1 d-none d-sm-flex"
          >Kevin Tran</v-toolbar-title
        >
      </div>
    </v-row>
    <v-col class="d-flex justify-sm-end justify-center mt-1 text-h1">
      <v-btn depressed color="#32ad5d" class="text-capitalize">
        <router-link to="/" class="white--text">About</router-link>
      </v-btn>
      <v-btn depressed color="#32ad5d" class="text-capitalize">
        <router-link to="/projects" class="white--text">Projects</router-link>
      </v-btn>
      <v-btn depressed color="#32ad5d" class="text-capitalize">
        <router-link to="/skills" class="white--text">Skills</router-link>
      </v-btn>
      <v-btn depressed color="#32ad5d" class="text-capitalize">
        <router-link to="/info" class="white--text">Info</router-link>
      </v-btn>
    </v-col>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  props: {
    navColor: {
      type: String,
      default: "#32ad5d"
    }
  }
};
</script>
