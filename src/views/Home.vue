<template>
  <v-container fluid class="py-0">
    <v-row id="hero" class="height" style="font-size: 20px; width: 100vw !important; position: fixed; left: 0; top: 0;"></v-row>
    <v-row class="height" style="font-size: 20px">
      <v-col offset-md="1" xs="12" md="8" class="my-auto">
        <v-col xs="12" md="6" v-rellax="{speed: 5}">
          <h1 class="mt-5 blue--text text--accent-3">What is <span id="whatis" class="pink px-3 mx-2 black--text"></span>?</h1>
          <span class="mt-3 mono text-justify">We'll talk about topics such as Networking, Cybersecurity, Software Development, Machine Learining
          and tools related to the topic, such as Kubernetes, Docker, AWS, React, Vue, Angulare, Compilers, Assemblers and more... We'll also talk about some basics of Computer Science.</span>
          <v-btn tile width="250" large class="my-5 mono pink" v-scroll-to="{el:'#more', offset: 0}"><v-icon large>keyboard_arrow_down</v-icon><v-spacer></v-spacer><b>Tell Me More</b><v-spacer></v-spacer><v-icon large>keyboard_arrow_down</v-icon></v-btn>
        </v-col>
      </v-col>
    </v-row>
    <v-row row id="more" class="height">
      <v-col offset-md="1" xs="12" md="8" class="my-auto">
        <v-row wrap>
          <v-col xs="12" md="6" v-rellax="{speed: 5}">
            <v-img src="https://i.gifer.com/2uG0.gif" aspect-ratio="1"/>
          </v-col>
          <v-col xs="12" md="6" v-rellax="{speed: -5}">
            <v-row column class="mx-5 align-self-center" style="font-size: 20px">
              <h1 class="blue--text text--accent-3">Blah Blah Blah blah...</h1>
              <span class="mt-3 mono text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
              <v-btn to="articles" tile width="250" large class="my-5 mono pink"><b>See Articles</b><v-spacer></v-spacer><v-icon large>keyboard_arrow_right</v-icon></v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row row class="height">
      <v-col offset-md="1" xs="12" md="4" class="my-auto" v-rellax="{speed: 5}">
        <v-img src="https://thumbs.gfycat.com/YoungIdolizedBeaver-size_restricted.gif" aspect-ratio="1"/>
      </v-col>
    </v-row>
    <v-col class="py-5 px-3 mt-5 b3">
      <v-row row wrap>
        <v-spacer class="hidden-xs-only"></v-spacer>
        <v-btn tile text dark class="mx-auto" to="/contact"><b>Contact</b></v-btn>
        <!-- <v-btn flat small class="mx-auto" to="/shipping"><b>Shipping & Returns</b></v-btn> -->
        <!-- <v-btn flat small class="mx-auto" to="/terms"><b>Terms of service</b></v-btn> -->
        <v-btn tile text dark class="mx-auto" target="_blank" href="https://app.termly.io/document/privacy-policy/4a319785-c774-4e9b-8b81-1460dd48f599"><b>Privacy policy</b></v-btn>
        <v-spacer class="hidden-xs-only"></v-spacer>
      </v-row>
      <br>
      <v-row>
        <v-spacer></v-spacer>
        <span class="grey--text">@Copyright 2019 Nikita Krupin</span>
        <v-spacer></v-spacer>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import Typed from 'typed.js'
export default {
  data: () => ({
    it: [
      'Internet of Things', 'Cloud Computing', 'Machine Learning', 'Cybersecurity', 'Networking', 'IaaS', 'PaaS', 'SaaS', 'Software', 'Hardware', 'Compiler', 'Assembler', 'OS kernel', 'OS shell', 'Linux', 'React', 'Firebase', 'Kubernetes', 'Docker'
    ]
  }),
  mounted () {
    // eslint-disable-next-line
    new Typed('#whatis', {
      strings: this.it,
      loop: true,
      typeSpeed: 50,
      backSpeed: 50,
      startDelay: 0,
      backDelay: 3000,
      smartBackspace: true,
      showCursor: false
    })
    // eslint-disable-next-line
    // VANTA.GLOBE({
    //   el: '#hero',
    //   color2: 0x7890ff,
    //   size: 0.50,
    //   backgroundColor: 0x0
    // })
  }
}
</script>
