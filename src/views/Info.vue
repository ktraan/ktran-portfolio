<template>
  <v-container>
    <v-row class="justify-center">
      <h1 class="text-h3 text-sm-h2 mt-10 mb-5 text-decoration-underline">
        Contact Information
      </h1>
    </v-row>
    <v-row class="justify-center">
      <h1 class="text-h5 text-sm-h4 mt-5 text-center">
        Feel free to contact me and I will get back to you as soon as possible!
      </h1>
    </v-row>
    <!-- Phone -->
    <v-row class="justify-center mt-5">
      <v-icon x-large>mdi-phone</v-icon>
      <p class="text-h4 mt-3 ml-5">(780)-233-2065</p>
    </v-row>
    <!-- Email -->
    <v-row class="justify-center">
      <v-icon x-large>mdi-email</v-icon>
      <p class="text-h4 mt-3 ml-5">kevintraan@live.com</p>
    </v-row>
    <!-- Linkedin -->
    <v-row class="justify-center mt-3">
      <v-icon x-large>
        mdi-linkedin
      </v-icon>
      <v-btn
        class="text-capitalize text-h4"
        href="https://www.linkedin.com/in/ktraan"
        text
        rounded
        elevation="0"
      >
        Kevin Tran
      </v-btn>
    </v-row>
    <!-- Github -->
    <v-row class="justify-center mt-5">
      <v-icon x-large>mdi-github</v-icon>
      <v-btn
        class="buttonText text-lowercase text-h4"
        color="dimgrey"
        href="https://github.com/ktraan"
        text
        flat
      >
        ktraan
      </v-btn>
    </v-row>

    <v-row class="justify-center mt-5">
      <a
        class="text-h4"
        href="https://drive.google.com/file/d/1EEY7xjSWxSZtEiJoYUdjAj-W9tU1hwBJ/view?usp=sharing"
      >
        My Resume
      </a>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.button {
  color: dimgrey;
}
</style>
