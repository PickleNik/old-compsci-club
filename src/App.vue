<template>
  <v-app>
    <v-container fluid class="black white--text py-0">
      <v-row>
        <v-col cols="12" md="4" lg="3" xl="2" class="height pr-0" style="z-index: 999;position: fixed; top: 0; left: 0; background: linear-gradient(-90deg, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0) 100%);">
          <v-row class="ma-0 mt-5">
            <v-icon v-ripple @click="$router.push('/')" large class="blue accent-3 black--text ml-5 mr-2 py-0" style="height: 72px; width: 72px;">device_hub</v-icon>
            <v-col class="pa-1">
              <span class="blue accent-3 pa-1 black--text font-black mono">CompSci</span>
              <v-divider class="my-2"></v-divider>
              <span class="blue accent-3 pa-1 black--text font-black mono">Club</span>
            </v-col>
          </v-row>
          <v-row class="ma-0 mt-5">
            <v-icon v-ripple @click="$router.push('/')" class="blue accent-3 black--text ml-5 mr-2 py-0" style="height: 33px; width: 33px;">web</v-icon>
            <span class="blue accent-3 pa-1 black--text font-black mono">Web Development 101</span>
          </v-row>
          <v-row class="ma-0 mt-2">
            <v-icon v-ripple @click="$router.push('/')" class="blue accent-3 black--text ml-5 mr-2 py-0" style="height: 33px; width: 33px;">devices_other</v-icon>
            <span class="blue accent-3 pa-1 black--text font-black mono">Cross-Platform</span>
          </v-row>
          <v-row class="ma-0 mt-2">
            <v-icon v-ripple @click="$router.push('/')" class="blue accent-3 black--text ml-5 mr-2 py-0" style="height: 33px; width: 33px;">all_inbox</v-icon>
            <span class="blue accent-3 pa-1 black--text font-black mono">Server Side</span>
          </v-row>
          <v-row class="ma-0 mt-2">
            <v-icon v-ripple @click="$router.push('/')" class="blue accent-3 black--text ml-5 mr-2 py-0" style="height: 33px; width: 33px;">security</v-icon>
            <span class="blue accent-3 pa-1 black--text font-black mono">Cybersecurity</span>
          </v-row>
          <v-row class="ma-0 mt-2">
            <v-icon v-ripple @click="$router.push('/')" class="blue accent-3 black--text ml-5 mr-2 py-0" style="height: 33px; width: 33px;">memory</v-icon>
            <span class="blue accent-3 pa-1 black--text font-black mono">Hardware</span>
          </v-row>
          <v-row style="position: fixed; bottom: 1em; left: 1em;" class="ma-0">
            <v-btn fixed bottom left fab tile large class="ma-5" color="pink"><v-icon>menu</v-icon></v-btn>
            <v-btn fab tile large class="ma-5" color="blue accent-3" style="transform: rotate(45deg)"></v-btn>
          </v-row>
        </v-col>
        <v-col cols="12" md="8" offset-md="4" lg="9" offset-lg="3" xl="10" offset-xl="2" class="pa-0">
          <router-view/>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    //
  })
}
</script>

<style media="screen">
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
  body {
    overflow: hidden !important;
  }
  .mono {
    font-family: 'Roboto Mono';
  }
  /* width */
  ::-webkit-scrollbar {
    width: 15px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #000000 !important;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #2b77fa;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #e04f88;
  }
  .v-toolbar__content {
    padding: 0 !important;
    height: auto !important;
  }
  .height {
    height: 100vh;
  }
  .font-black {
    font-weight: 1000;
  }
</style>
