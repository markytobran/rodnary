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
      <div class="mt-48">
        <iframe
          src="https://www.youtube.com/embed/zvbp-oXIys4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div class="mt-6">
        <iframe
          src="https://www.youtube.com/embed/zvbp-oXIys4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div class="mt-24">
        <iframe
          src="https://www.youtube.com/embed/zvbp-oXIys4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
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

iframe {
  height: 315px;
  width: 500px;
  border-radius: 25px;
}
</style>
