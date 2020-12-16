<template>
  <v-container class="text-center">
    <div id="about">
      <h1
        class="mt-10 mb-10 text-h4 text-sm-h3 text-md-h2 d-flex justify-center font-weight-light"
      >
        Welcome to my Portfolio!
      </h1>
    </div>

    <v-avatar size="300" class="d-flex ml-auto mr-auto">
      <v-row justify="center">
        <v-img
          lazy-src="../assets/kevin.jpeg"
          src="../assets/kevin.jpeg"
          max-width="400"
          align="center"
        /> </v-row
    ></v-avatar>
    <h2
      class="text-h4 text-sm-h3 text-md-h2 mt-10 mb-md-5 font-weight-light d-flex justify-sm-center"
    >
      I'm Kevin Tran and I'm a full-stack developer.
    </h2>
    <v-row class="d-sm-flex justify-sm-center mb-16 mb-sm-16" no-gutters>
      <h3 class="font-weight-thin text-h6 text-sm-h4">
        My goal is to find developer position where I can build meaningful
        projects, and at the same time making everyone's life a bit easier. I am
        constantly learning new and different technologies to add to my stack.
        Check out some of the projects that I have worked on!
      </h3>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: () => ({}),

  computed: {}
};
</script>

<style>
h1,
h2 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
h3 {
  width: 800px;
}
</style>
