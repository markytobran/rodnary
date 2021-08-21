<template>
  <div class="h-full w-full relative">
    <img
      :src="require('../../assets/images/home-images/' + imgName + '.jpg')"
      alt=""
      class="rounded-tr-md rounded-br-md h-full w-full"
    />
    <span
      class="
        absolute
        bottom-0
        right-0
        text-white
        bg-primary-dark
        text-xl
        rounded-md
        pl-5
        pr-5
        pt-2
        pb-2
        font-bold
        uppercase
      "
      >{{ categoryTitle }}</span
    >
  </div>
</template>

<script>
export default {
  props: ['categoryTitle', 'imgName'],
}
</script>

<style lang="scss" scoped></style>
