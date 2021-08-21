<template>
  <section class="h-screen w-screen home relative z-20">
    <h1 class="absolute top-80 left-48 z-50 text-white text-4xl w-1/2">
      Browse with confidence & ease and find your new favourite fishing channel
    </h1>
  </section>
  <!---Popular Section-->
  <section class="h-screen">
    <h1 class="ml-36 -mt-20 text-black text-4xl w-50 flex font-extrabold">
      <span>Popular</span>
      <span class="mt-8 -ml-10">videos</span>
    </h1>
    <div class="grid grid-cols-3 ml-36">
      <youtube-card
        v-for="index in 3"
        :key="index"
        :top-margin="videoCardMargin[index - 1]"
      />
    </div>
  </section>
  <!---Categories Section-->
  <section class="h-screen ml-36">
    <h1 class="-mt-48 pb-10 text-black text-4xl w-50 flex font-extrabold">
      Categories
    </h1>
    <div class="flex justify-between relative">
      <categories-main-card />
    </div>
  </section>
  <section class="h-screen">
    <div class="h-1/3 w-1/3 ml-36 -mt-20">
      <video autoplay muted loop class="h-full w-full">
        <source src="../assets/videos/webvideo.mp4" type="video/mp4" />
      </video>
    </div>
  </section>
</template>

<script>
import CategoriesMainCard from '../components/Home/CategoriesMainCard.vue'
import YoutubeCard from '../components/Home/YoutubeCard.vue'

export default {
  components: { YoutubeCard, CategoriesMainCard },
  name: 'Home',
  data() {
    return {
      videoCardMargin: ['48', '6', '24'],
    }
  },
}
</script>

<style lang="scss" scoped>
.home {
  background: url('../assets/images/home-images/home-background.jpg') no-repeat
    center center;
  background-size: cover;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 83%, 56% 95%, 0 77%);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.78);
    width: 100%;
    height: 100%;
  }
}
</style>
