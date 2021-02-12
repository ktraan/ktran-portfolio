<template>
  <v-container>
    <!-- XS -->
    <v-card
      v-for="project in projects"
      :key="project.name"
      class="d-flex d-sm-none mt-5 mb-5 pa-5"
      color="#d4fae2"
      elevation="2"
    >
      <v-row>
        <v-card-title class="text-h5 pt-5 pl-7 font-weight-medium ">
          {{ project.name }}
        </v-card-title>

        <v-btn
          v-if="project.url"
          :href="project.url"
          class="ml-auto mt-3"
          outlined
          ripple
          width="50"
        >
          Demo
        </v-btn>
        <v-btn
          class="pr-3 ml-auto"
          icon
          color="black"
          :href="project.repo"
          x-large
        >
          <v-icon>{{ icons.source }}</v-icon>
        </v-btn>

        <div class="text-h6 black--text mt-n2 ml-10 font-weight-light">
          {{ project.createdWithText }}
        </div>
        <div class="text-h7 font-weight-thin ml-12 mr-5 mt-2 mb-4">
          {{ project.descriptionText }}
        </div>
      </v-row>
    </v-card>

    <!-- SM & UP -->

    <v-row class="justify-center">
      <v-card
        v-for="project in projects"
        :key="project.name"
        width="650"
        height="170"
        class="d-none d-sm-flex mr-5 mt-5"
        elevation="2"
        outlined
        color="#d4fae2"
      >
        <v-row class="align-center">
          <v-col cols="2">
            <v-img class="ml-5" max-width="95" :src="project.src"> </v-img>
          </v-col>

          <v-col cols="5" class="">
            <v-row>
              <v-card-title class="text-h5 mt-2">
                {{ project.name }}
              </v-card-title>
            </v-row>
            <div class="text-h7">- {{ project.createdWithText }}</div>
            <v-row class="mt-2 ">
              <v-btn
                v-if="project.url"
                :href="project.url"
                class=""
                outlined
                ripple
                >Live Demo
              </v-btn>
              <v-btn class="ml-5" icon :href="project.repo">
                <v-icon x-large color="black">{{ icons.source }}</v-icon>
              </v-btn>
            </v-row>
          </v-col>

          <v-divider vertical></v-divider>

          <v-col>
            <div class="text-h7">
              {{ project.descriptionText }}
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-row>

    <!-- Other copy -->
    <!-- <v-card
      v-for="project in projects"
      :key="project.name"
      width="1000"
      class="mt-5 mb-5 ml-auto mr-auto d-none d-sm-flex"
      elevation="2"
      outlined
      color="#d4fae2"
    >
      <v-row class="pa-4">
        <v-card-title class="text-h4 ">
          {{ project.name }}
        </v-card-title>
        <v-img class="ml-auto mr-10" max-width="100" :src="project.src">
        </v-img>
        <div class="text-h4 ml-7 mt-n3">- {{ project.createdWithText }}</div>

        <div class="text-h5 ml-14 mr-16 mt-2">
          {{ project.descriptionText }}
        </div>

        <v-divider class="mt-5 mb-5" dark></v-divider>
        <div class="ml-auto mr-auto mt-2">
          <v-btn
            v-if="project.url"
            :href="project.url"
            class="ml-5"
            outlined
            ripple
            >Live Demo
          </v-btn>
          <v-btn class="ml-5" icon :href="project.repo">
            <v-icon x-large color="black">{{ icons.source }}</v-icon>
          </v-btn>
        </div>
      </v-row>
    </v-card> -->
    <v-spacer class="mt-16"></v-spacer>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    icons: {
      github: "mdi-github",
      source: "mdi-xml"
    },

    projects: [
      {
        name: "Find Your Fit",
        createdWithText: "Vue.js, Express, and MongoDB",
        descriptionText:
          "A web application to help connect users with health & fitness professionals.",
        repo: "https://github.com/ktraan/FindYourFit",
        source: "https://github.com/ktraan",
        src: require("../assets/meditate.png")
      },
      {
        name: "Property Assessment",
        createdWithText: "React and JavaScript",
        descriptionText:
          "An application that takes an Edmonton address to get the property assessment of that location.",
        repo: "https://github.com/ktraan/PropertyAssessment",
        source:
          "https://github.com/ktraan/PropertyAssessment/blob/main/src/App.js",
        src: require("../assets/house2.png"),
        url: "https://edmonton-property-assessment.herokuapp.com"
      },
      {
        name: "Stock Price Checker",
        createdWithText: "Java in Android Studio",
        descriptionText:
          "An android application that gets information based on a stock ticker symbol.",
        repo: "https://github.com/ktraan/StockPriceChecker",
        source:
          "https://github.com/ktraan/StockPriceChecker/blob/master/StockPriceApp/app/src/main/java/ca/nait/ktran36/stockpriceapp/MainActivity.java",
        src: require("../assets/stock.png")
      },
      {
        name: "StarTED System",
        createdWithText: "C# and MSSQL",
        descriptionText:
          "ASP.NET Framework MVC web application using that performs CRUD functionality.",
        repo: "https://github.com/ktraan/StarTED",
        src: require("../assets/star.png")
      },
      {
        name: "West Wind System",
        createdWithText: "C# and MSSQL",
        descriptionText:
          "ASP.NET Framework MVC application that uses the Code-First approach and includes LINQ queries.",
        repo: "http://github.com/ktraan/WestWindSystem",
        src: require("../assets/box.png")
      }
    ]
  })
};
</script>
