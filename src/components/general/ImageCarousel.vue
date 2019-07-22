<template>
  <!-- //SLIDER  1-->
 <section>
 <!--
  <figure class="image is-16by9">
    <img v-if="yacht.imgs" :src="this.currImg || this.yacht.imgs[0]" @click="nextPicture" />
  </figure>

  <div v-for="image in yacht.imgs" :key="image">
    <figure class="image is-128x128">
      <img v-if="yacht.imgs" :src="image" @click="nextPicture" />
    </figure>
  </div> -->

  <div v-show="isNotMobile" class="columns is-vcentered">
      <div class="column is-12 is-inline-flex">
        <div
          v-for="(image,i) in yacht.imgs"
          :key="i"
          :class="['thumbnail-image', (activeImage == index) ? 'active' : '']"
        >
          <figure class="image is-128x128">
            <img :src="image" />
          </figure>
        </div>
      </div>
    </div>
</section>
  
</template>

<script>
export default {
  name: "image-carousel",
//   props:['images'],
  data() {
    return {
      isMounted: false,
      currImg: null,
      list: [],
      //Index of the active image on the images array
      activeImage: 0,
   
    };
  },
  computed: {
      currentImage() {
                return this.images[this.activeImage].big;
            }
  },
  methods: {
    nextPicture() {
      if (!this.list[0]) this.list = this.yacht.imgs.slice();
      if (this.isMounted && this.yacht.imgs) {
        if (this.list.length > 1) this.currImg = this.list.shift();
        else this.list = this.yacht.imgs.slice();
      }
    },
    
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style>
</style>
