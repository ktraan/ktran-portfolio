<template>
  <v-container>
    <!-- Front End -->
    <v-row class="justify-center mt-5">
      <h1 class="text-h2 text-decoration-underline">
        Front End Development
      </h1>
    </v-row>
    <v-row class="justify-center mt-10 mb-10">
      <v-img class="mr-5" src="../assets/html.png" max-width="90"></v-img>
      <v-img class="mr-5" src="../assets/css.png" max-width="90"></v-img>
      <v-img class="mr-5" src="../assets/javascript.png" max-width="90"></v-img>
      <v-img class="mr-5" src="../assets/vue.png" max-width="90"></v-img>
      <v-img src="../assets/react.png" max-width="90"></v-img>
    </v-row>

    <!-- Back End -->
    <v-row class="justify-center mt-10">
      <h1 class="text-h2 text-decoration-underline">
        Back End Development:
      </h1>
    </v-row>
    <v-row class="justify-center mt-10 mb-10">
      <v-img class="mr-10" src="../assets/node.png" max-width="90"></v-img>
      <v-img class="ml-5 mr-5" src="../assets/csharp.png" max-width="90">
      </v-img>
      <v-img class="ml-10" src="../assets/java.png" max-width="90"></v-img>
    </v-row>

    <!-- Database -->
    <v-row class="justify-center mt-10">
      <h1 class="text-h2 text-decoration-underline">Database Systems</h1>
    </v-row>
    <v-row class="justify-center mt-10">
      <v-img class="" src="../assets/sql.png" max-width="90"></v-img>
      <v-img class="ml-10" src="../assets/mongodb.png" max-width="90"></v-img>
      <v-img class="ml-10" src="../assets/sqlite.png" contain max-width="90">
      </v-img>
    </v-row>

    <!-- Mobile Development -->
    <v-row class="justify-center mt-10">
      <h1 class="text-h2 text-decoration-underline">Mobile Development</h1>
    </v-row>
    <v-row class="justify-center mt-10 mb-16 ">
      <v-img class="mr-16" src="../assets/android.png" max-width="90"></v-img>
      <v-img class="ml-16" src="../assets/flutter.png" max-width="90"></v-img>
    </v-row>

    <!-- Other Technologies -->
    <v-row class="justify-center mt-10">
      <h1 class="text-h2 text-decoration-underline">Other Technologies</h1>
    </v-row>
    <v-row class="justify-center mt-10 mb-10">
      <v-img class="mr-8" src="../assets/github.png" max-width="90"></v-img>
      <v-img class="mr-8" src="../assets/windows.png" max-width="90"></v-img>
      <v-img class="mr-8" src="../assets/mac.png" max-width="90"></v-img>
      <v-img src="../assets/linux.png" max-width="90"></v-img>
    </v-row>

    <!-- Project Stuff -->
    <v-row class="justify-center mt-10">
      <h1 class="text-h2 text-decoration-underline">
        Project Design and Management
      </h1>
    </v-row>
    <v-row class="justify-center text-center mt-5 mb-10">
      <v-list class="text-h5 text-center" color="#f0ffff" flat>
        <v-list-item class="listItemText" color="blue">
          DevOps - Agile Software Development, SCRUM
        </v-list-item>
        <v-list-item class="listItemText">
          UML - Use Case, Sequential & Class Diagrams
        </v-list-item>
        <v-list-item class="listItemText">
          Database Design - Normalization & ERD's
        </v-list-item>
      </v-list>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Skills",

  data: () => ({})
};
</script>

<style></style>
