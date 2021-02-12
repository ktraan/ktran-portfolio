<template>
  <v-container>
    <!-- Front End -->
    <v-row class="">
      <v-col class="d-none d-sm-flex"></v-col>
      <v-col md="5" class="d-flex-row justify-center">
        <v-row class="d-sm-flex mt-5">
          <h2
            class="text-h5 text-sm-h5 text-md-h4 justify-sm-center text-decoration-underline font-weight-light"
          >
            Front End Development
          </h2>
        </v-row>
        <v-row class="d-sm-flex mt-5 mb-5 ">
          <v-img class="mr-5" src="../assets/html.png" max-width="55"></v-img>
          <v-img class="mr-5" src="../assets/css.png" max-width="55"></v-img>
          <v-img
            class="mr-5"
            src="../assets/javascript.png"
            max-width="55"
          ></v-img>
          <v-img class="mr-5" src="../assets/vue.png" max-width="55"></v-img>
          <v-img src="../assets/react.png" max-width="55"></v-img>
        </v-row>

        <!-- Back End -->
        <v-row class="d-sm-flex ">
          <h2
            class="text-h5 text-sm-h5 text-md-h4  text-decoration-underline font-weight-light"
          >
            Back End Development:
          </h2>
        </v-row>
        <v-row class="d-sm-flex mt-5 ">
          <v-img class="mr-10" src="../assets/node.png" max-width="55"></v-img>
          <v-img class="ml-5 mr-5" src="../assets/csharp.png" max-width="55">
          </v-img>
          <v-img class="ml-10" src="../assets/java.png" max-width="55"></v-img>
        </v-row>

        <!-- Database -->
        <v-row class="d-sm-flex mt-5">
          <h2
            class="text-h5 text-sm-h5 text-md-h4 text-decoration-underline font-weight-light"
          >
            Database Systems
          </h2>
        </v-row>
        <v-row class="d-sm-flex mt-5">
          <v-img class="" src="../assets/sql.png" max-width="55"></v-img>
          <v-img
            class="ml-10"
            src="../assets/mongodb.png"
            max-width="55"
          ></v-img>
          <v-img
            class="ml-10"
            src="../assets/sqlite.png"
            contain
            max-width="55"
          >
          </v-img>
        </v-row>
      </v-col>
      <!-- Mobile Development -->
      <!-- <v-row class=" d-sm-flex justify-center mt-10">
    <h2
    class="text-h5 text-sm-h4 text-decoration-underline font-weight-light"
    >
    Mobile Development
    </h2>
    </v-row>
    <v-row class="d-sm-flex justify-center mt-10 mb-5 ">
    
    </v-row> -->
      <v-col md="" class="d-none"></v-col>
      <!-- Other Technologies -->
      <v-col md="6">
        <v-row class="d-sm-flex mt-5">
          <h2
            class="text-h5 text-sm-h5 text-md-h4 text-decoration-underline font-weight-light"
          >
            Other Technologies
          </h2>
        </v-row>
        <v-row class="d-sm-flex mt-5">
          <v-img class="" src="../assets/github.png" max-width="55"></v-img>
          <v-img
            class="ml-3"
            src="../assets/android.png"
            max-width="55"
          ></v-img>
          <v-img
            class="ml-3"
            src="../assets/windows.png"
            max-width="55"
          ></v-img>
          <v-img class="ml-3" src="../assets/mac.png" max-width="55"></v-img>
          <v-img class="ml-3" src="../assets/linux.png" max-width="55"></v-img>
        </v-row>

        <!-- Project Stuff -->
        <v-row class="d-sm-flex mt-5">
          <h2
            class="text-h5 text-sm-h5 text-md-h4 text-decoration-underline font-weight-light"
          >
            Project Design & Management
          </h2>
        </v-row>
        <v-row class="d-sm-flex ml-n7">
          <v-list
            class="text-xs-h7 text-sm-h6  mb-10 font-weight-light "
            color="#f0ffff"
            flat
          >
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Skills",

  data: () => ({}),
};
</script>

<style></style>
