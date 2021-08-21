<template>
  <div class="relative w-full h-full">
    <img
      :src="require('../../assets/images/home-images/' + imgName + '.jpg')"
      :alt="categoryName"
      class="w-full h-full rounded-tr-xl rounded-br-md"
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
      >{{ categoryName }}</span
    >
    <!--Additional Cards-->
    <slot name="lastcard" />
  </div>
</template>

<script>
export default {
  props: ['categoryName', 'imgName'],
}
</script>

<style lang="scss" scoped></style>
