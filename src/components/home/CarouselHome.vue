<template>
  <b-container>
    <b-row>
      <b-col cols="8" offset="2">
        <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1020"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        >
        <!-- Text slides with image -->
          <a href="" @click.prevent="$router.push('/tech')">
            <b-carousel-slide
            img-src="../../assets/img1.jpg"
          ></b-carousel-slide>
          </a>
          <!-- Slides with custom text -->
          <b-carousel-slide img-src="../../assets/img2.jpg">
            <!-- <h1>Hello world!</h1> -->
          </b-carousel-slide>
      </b-carousel>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
