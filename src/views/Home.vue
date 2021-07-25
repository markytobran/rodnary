<template>
  <section class="h-screen w-screen home relative z-20">
    <h1 class="absolute top-80 left-48 z-50 text-white text-4xl w-1/2">
      Browse with confidence & ease and find your new favourite fishing channel
    </h1>
  </section>
  <section class="h-screen">
    <h1 class="ml-36 -mt-20 text-black text-4xl w-50 flex">
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
</template>

<script>
import YoutubeCard from '../components/YoutubeCard.vue'

export default {
  components: { YoutubeCard },
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
  background: url('../assets/test.jpg') no-repeat center center;
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
