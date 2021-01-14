<template>
  <v-container>
    <v-card
      v-for="project in projects"
      :key="project.name"
      class="d-flex d-sm-none mt-5 mb-5 pa-2"
      color="#d4fae2"
      elevation="2"
    >
      <v-row>
        <v-card-title class="text-h5 pt-5 pl-7 font-weight-medium ">{{
          project.name
        }}</v-card-title>

        <v-btn class="ml-auto" icon color="black" :href="project.repo" x-large>
          <v-icon>{{ icons.github }}</v-icon>
        </v-btn>
        <v-btn class="mr-5" icon color="black" :href="project.source" x-large>
          <v-icon>{{ icons.source }}</v-icon>
        </v-btn>

        <div class="text-h6 black--text mt-n2 ml-10 font-weight-light">
          {{ project.createdWithText }}
        </div>
        <div class="text-h7 font-weight-thin ml-12 mt-2 mb-4">
          {{ project.descriptionText }}
        </div>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    icons: {
      github: "mdi-github",
      source: "mdi-xml",
    },
    projects: [
      {
        name: "Find Your Fit",
        createdWithText: "Created with Vue.js, Express, and MongoDB",
        descriptionText:
          "A web application to help connect users with health & fitness professionals.",
        repo: "https://github.com/ktraan",
        source: "https://github.com/ktraan",
      },
      {
        name: "Property Assessment",
        createdWithText: "Created with React and JavaScript",
        descriptionText:
          "An application that takes an Edmonton address to get the property assessment of that location.",
        repo: "https://github.com/ktraan/PropertyAssessment",
        source: "",
      },
      {
        name: "Stock Price Checker",
        createdWithText: "Created with Java in Android Studio",
        descriptionText:
          "A mobile app gets information based on a stock ticker symbol.",
        repo: "https://github.com/ktraan/StockPriceChecker",
        source:
          "https://github.com/ktraan/StockPriceChecker/blob/master/StockPriceApp/app/src/main/java/ca/nait/ktran36/stockpriceapp/MainActivity.java",
      },
    ],
  }),
};
</script>
