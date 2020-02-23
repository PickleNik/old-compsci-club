<template>
  <div class="pa-5">
    <h1 class="ml-5 pl-5 pink--text">Networking</h1>
    <h2 class="ml-5 pl-5 blue--text text--accent-3">TCP/IP</h2>
    <v-row class="height px-5 mx-2">
      <v-col cols="12" md="4" lg="3" xl="2" class="pa-3" v-for="i in items" :key="i.name">
          <v-img v-ripple class="mb-2 article" :src="i.img"  aspect-ratio="1">
            <v-row slot="placeholder" justify="center">
              <v-col align-self="center">
                <v-progress-circular indeterminate color="primary" size="100"></v-progress-circular>
              </v-col>
            </v-row>
            <v-avatar tile v-if="i.sale" size="60" class="gold absolute pa-3" style="left: 1em; top: 1em;"><h2 class="white--text header">SALE</h2></v-avatar>
            <v-avatar tile
              v-if="i.stock < 1"
              size="60"
              class="error absolute pa-3"
              style="left: 1em; top: 1em;">
              <h2 class="white--text header">Out</h2>
            </v-avatar>
          </v-img>
          <span class="header" style="font-size: 1.2em">{{ i.name }}</span>
          <span class="header grey--text" :class="{ 'gold--text': i.sale }"><s class="grey--text header mr-3" v-if="i.sale">${{ (i.price / 100).toFixed(2) }}</s>${{ i.sale ? (i.price / 100 * (1 - i.sale / 100)).toFixed(2) : (i.price / 100).toFixed(2) }}</span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { name: 'View All', img: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1944&q=80' },
      { name: 'Sale', img: 'https://images.unsplash.com/photo-1531303435785-3853ba035cda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
      { name: 'Tops', img: 'https://images.unsplash.com/photo-1497864733562-90b52d063287?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' },
      { name: 'Jeans', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1226&q=80' },
      { name: 'Sweaters', img: 'https://images.unsplash.com/photo-1524146222100-8fd7c6ae9025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' },
      { name: 'Activewear', img: 'https://images.unsplash.com/photo-1555412590-954a889ccb90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
      { name: 'SwimWear', img: 'https://images.unsplash.com/photo-1485586752437-03021cfb7ea4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' },
      { name: 'Accesories', img: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80' }
    ]
  })
}
</script>

<style media="screen" scoped>
  .article {
    transition-duration: 0.3s;
    transition-property: all;
  }
  .article:hover {
    transform: scale(0.8);
  }
</style>
