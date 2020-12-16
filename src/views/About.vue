<template>
  <v-container class="text-center">
    <div id="about">
      <h1 class="mt-10 mb-10 text-h2">
        Welcome to my Portfolio!
      </h1>
    </div>

    <v-avatar size="300">
      <v-row justify="center">
        <v-img
          lazy-src="../assets/kevin.jpeg"
          src="../assets/kevin.jpeg"
          max-width="400"
          align="center"
        />
      </v-row>
    </v-avatar>
    <h2 class="text-h3 mt-10 mb-9 font-weight-light">
      I'm Kevin Tran and I'm a full-stack developer.
    </h2>
    <v-row justify="center">
      <v-col cols="6" align="center" justify="center">
        <h3 class="font-weight-thin text-h4">
          My goal is to find developer position where I can build meaningful
          projects, and at the same time making everyone's life a bit easier. I
          am constantly learning new and different technologies to add to my
          stack. Here are some projects that I have worked on.
        </h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
h1,
h2 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>
