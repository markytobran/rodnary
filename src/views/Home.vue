<template>
  <div class="h-screen w-screen home">
    <h1>
      Browse with confidence & ease and find your new favourite fishing channel
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
.home {
  background: url('../assets/test.jpg') no-repeat center center fixed;
  background-size: cover;
  position: relative;

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
