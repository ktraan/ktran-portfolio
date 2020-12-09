<template>
  <v-container class="text-center">
    <v-row class="">
      <!-- Find Your Fit Card -->
      <v-card
        width="700"
        class="mb-5 mt-8 ml-auto mr-auto"
        elevation="2"
        outlined
        color="#d4fae2"
      >
        <v-card-title class="font-weight-medium mt-4 ml-4 cardTitle ">
          Find Your Fit
        </v-card-title>
        <p class="d-flex ml-10">- Created with Vue.js, Express, and MongoDB</p>
        <v-row>
          <v-col cols="8">
            <v-card-text class="ml-10 cardText text-left mb-5">
              A web application to help connect users with health & fitness
              professionals.
            </v-card-text>
            <v-row class="mt-1 mb-1">
              <a :href="links.stockRepo" class="mt-5">
                <v-icon color="#32ad5d" x-large class="ml-10">
                  {{ icons.github }}
                </v-icon>
              </a>

              <a :href="links.stockSource" class="mt-5">
                <v-icon color="#32ad5d" x-large class="ml-5">
                  {{ icons.source }}
                </v-icon>
              </a>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-img
              lazy-src="../assets/meditate.png"
              src="../assets/meditate.png"
              max-width="90"
              max-height="170"
              class="ml-auto mr-12"
            >
            </v-img>
          </v-col>
        </v-row>
      </v-card>

      <!-- Stock Ticker Symbol Card -->

      <v-card
        width="700"
        class="mb-5 mt-8 ml-auto mr-auto"
        elevation="2"
        outlined
        color="#d4fae2"
      >
        <v-card-title class="font-weight-medium mt-4 ml-4 cardTitle ">
          Stock Ticker Checker
        </v-card-title>
        <p class="d-flex ml-10">- Created with Java in Android Studio</p>
        <v-row>
          <v-col cols="8">
            <v-card-text class="ml-10 cardText text-left mb-5">
              A mobile app gets information based on a stock ticker symbol.
            </v-card-text>
            <v-row class="mt-1 mb-1">
              <a :href="links.stockRepo" class="mt-5">
                <v-icon color="#32ad5d" x-large class="ml-10">
                  {{ icons.github }}
                </v-icon>
              </a>

              <a :href="links.stockSource" class="mt-5">
                <v-icon color="#32ad5d" x-large class="ml-5">
                  {{ icons.source }}
                </v-icon>
              </a>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-img
              lazy-src="../assets/stock.png"
              src="../assets/stock.png"
              max-width="100"
              max-height="170"
              class="ml-auto mr-9"
            >
            </v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-row>

    <v-row class="mb-md-16">
      <!-- Property Assessment Card -->
      <v-card
        width="700"
        class="mb-5 mt-8 ml-auto mr-auto"
        elevation="2"
        outlined
        color="#d4fae2"
      >
        <v-card-title class="font-weight-medium mt-4 ml-4 cardTitle ">
          Property Assessment
        </v-card-title>
        <p class="d-flex ml-10">- Created with Java, SQL and Vue.js</p>
        <v-row>
          <v-col cols="8">
            <v-card-text class="ml-10 cardText text-left mb-5">
              An application that takes an Edmonton address to get the property
              assessment of that location.
            </v-card-text>
            <v-row class="mt-1 mb-1">
              <!-- <a :href="links.stockRepo" class="mt-5"> -->
              <a href="/" class="mt-5">
                <v-icon color="#32ad5d" x-large class="ml-10">
                  {{ icons.github }}
                </v-icon>
              </a>

              <!-- <a :href="links.stockSource" class="mt-5"> -->
              <a href="/" class="mt-5">
                <v-icon color="#32ad5d" x-large class="ml-5">
                  {{ icons.source }}
                </v-icon>
              </a>
            </v-row>
          </v-col>
          <v-col cols="4" class="">
            <v-img
              lazy-src="../assets/house.png"
              src="../assets/house.png"
              max-width="100"
              max-height="170"
              class="ml-auto mr-12"
            >
            </v-img>
          </v-col>
        </v-row>
      </v-card>

      <!-- Another Card -->
      <!-- <v-card
        width="700"
        class="mb-5 mt-8 ml-auto mr-auto"
        elevation="2"
        outlined
        color="#d4fae2"
      >
        <v-card-title class="font-weight-medium mt-4 ml-4 cardTitle ">
          Property Assessment
        </v-card-title>
        <p class="d-flex ml-10">- Created with Java, SQL and Vue.js</p>
        <v-row>
          <v-col cols="8">
            <v-card-text class="ml-10 cardText text-left mb-5">
              An application that takes an Edmonton address to get the property
              assessment of that location.
            </v-card-text>
            <v-row class="mt-1 mb-1">
              <a :href="links.stockRepo" class="mt-5">
                <v-icon color="#32ad5d" x-large class="ml-10">
                  {{ icons.github }}
                </v-icon>
              </a>

              <a :href="links.stockSource" class="mt-5">
                <v-icon color="#32ad5d" x-large class="ml-5">
                  {{ icons.source }}
                </v-icon>
              </a>
            </v-row>
          </v-col>
          <v-col cols="4" class="">
            <v-img
              lazy-src="../assets/house.png"
              src="../assets/house.png"
              max-width="100"
              max-height="170"
              class="ml-auto mr-12"
            >
            </v-img>
          </v-col>
        </v-row>
      </v-card> -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    icons: {
      github: "mdi-github",
      source: "mdi-xml"
    },
    links: {
      stockRepo: "https://github.com/ktraan/StockPriceChecker",
      stockSource:
        "https://github.com/ktraan/StockPriceChecker/blob/master/StockPriceApp/app/src/main/java/ca/nait/ktran36/stockpriceapp/MainActivity.java",
      propertyRepo: "https://github.com/ktraan/PropertyAssessment",
      propertySource:
        "https://github.com/ktraan/PropertyAssessment/blob/main/dmit2015-winter2020term-sectiona01-assignment04-ktraan-master/dmit2015-assignment04-ktran36/src/main/java/ktran36/assignment04/PropertyAssessmentResource.java"
    }
  })
};
</script>

<style>
.container {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  /* color: #b1fab7; */
}
.titleText {
  font-size: 3rem;
}
.cardTitle {
  font-size: 2.5rem;
}

.cardText {
  font-size: 25px;
  width: 500px;
}
</style>
