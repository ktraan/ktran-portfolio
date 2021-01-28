<template>
  <v-container>
    <!-- XS -->
    <v-card
      v-for="project in projects"
      :key="project.name"
      class="d-flex d-sm-none mt-5 mb-5 pa-2"
      color="#d4fae2"
      elevation="2"
    >
      <v-row>
        <v-card-title class="text-h5 pt-5 pl-7 font-weight-medium ">
          {{ project.name }}
        </v-card-title>

        <v-btn class="ml-auto" icon color="black" :href="project.repo" x-large>
          <v-icon>{{ icons.github }}</v-icon>
        </v-btn>
        <v-btn class="pr-3" icon color="black" :href="project.source" x-large>
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
    <v-card
      v-for="project in projects"
      :key="project.name"
      width="1000"
      class="mt-5 mb-5 ml-auto mr-auto d-none d-sm-flex"
      elevation="2"
      outlined
      color="#d4fae2"
    >
      <v-row class="pa-4">
        <v-card-title class="text-h2 ">
          {{ project.name }}
        </v-card-title>
        <v-img class="ml-auto mr-10" max-width="120" :src="project.src">
        </v-img>
        <div class="text-h4 ml-7 mt-n3">- {{ project.createdWithText }}</div>

        <div class="text-h5 ml-14 mr-16 mt-2">
          {{ project.descriptionText }}
        </div>
        <div class="ml-auto mr-auto mt-2">
          <v-btn icon :href="project.repo">
            <v-icon x-large color="black">{{ icons.github }}</v-icon>
          </v-btn>
          <v-btn class="ml-5" icon :href="project.source">
            <v-icon x-large color="black">{{ icons.source }}</v-icon>
          </v-btn>
        </div>
      </v-row>
    </v-card>
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
        createdWithText: "Created with Vue.js, Express, and MongoDB",
        descriptionText:
          "A web application to help connect users with health & fitness professionals.",
        repo: "https://github.com/ktraan",
        source: "https://github.com/ktraan",
        src: require("../assets/meditate.png")
      },
      {
        name: "Property Assessment",
        createdWithText: "Created with React and JavaScript",
        descriptionText:
          "An application that takes an Edmonton address to get the property assessment of that location.",
        repo: "https://github.com/ktraan/PropertyAssessment",
        source: "",
        src: require("../assets/house.png")
      },
      {
        name: "Stock Price Checker",
        createdWithText: "Created with Java in Android Studio",
        descriptionText:
          "An android application that gets information based on a stock ticker symbol.",
        repo: "https://github.com/ktraan/StockPriceChecker",
        source:
          "https://github.com/ktraan/StockPriceChecker/blob/master/StockPriceApp/app/src/main/java/ca/nait/ktran36/stockpriceapp/MainActivity.java",
        src: require("../assets/stock.png")
      }
    ]
  })
};
</script>
