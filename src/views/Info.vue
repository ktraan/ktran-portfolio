<template>
  <v-container>
    <v-row class="justify-center mt-10">
      <h1
        class="text-h5 text-sm-h5 mt-sm-5 text-center titleText font-weight-font-font-weight-regular"
      >
        Feel free to contact me and I will get back to you as soon as possible!
      </h1>
    </v-row>
    <!-- Phone -->
    <v-row class="justify-center mt-5">
      <v-icon>mdi-phone</v-icon>
      <p class="text-h5 mt-3 ml-3">(780)-233-2065</p>
      <!-- Email -->
      <v-icon class="ml-10">mdi-email</v-icon>
      <p class="text-h5 mt-3 ml-3">kevintraan@live.com</p>
    </v-row>
    <!-- Linkedin -->
    <v-row class="justify-center mt-3">
      <v-icon class="">
        mdi-linkedin
      </v-icon>
      <v-btn
        class="text-capitalize text-h5"
        href="https://www.linkedin.com/in/ktraan"
        text
        rounded
        elevation="0"
      >
        Kevin Tran
      </v-btn>

      <v-icon class="ml-7">mdi-github</v-icon>
      <v-btn
        class="buttonText text-lowercase text-h5"
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
        class="text-h5"
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

.titleText {
  width: 800px;
}
</style>
