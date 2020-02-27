<template>
  <b-container class="pt-4">
    <b-row>
      <!-- <b-col cols="12">
        <h1><b>HOLA BIENVENIDIDO/A</b></h1>
      </b-col> -->
      <b-col>
        <carousel-home></carousel-home>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import CarouselHome from '@/components/home/CarouselHome.vue'

export default {
  name: 'home',
  components: {
    CarouselHome
  }
}
</script>
