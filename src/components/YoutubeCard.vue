<template>
  <div :class="`mt-${topMargin}`">
    <iframe
      src="https://www.youtube.com/embed/zvbp-oXIys4"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    topMargin: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
iframe {
  height: 315px;
  width: 500px;
  border-radius: 25px;
}
</style>
