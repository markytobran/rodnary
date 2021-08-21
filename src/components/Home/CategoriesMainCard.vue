<template>
  <div
    class="
      categories-main-card
      rounded-tl-2xl rounded-tr-2xl rounded-bl-lg rounded-br-lg
      bg-primary-blue
      relative
    "
  >
    <img
      class="h-4/6 w-full rounded-tl-2xl rounded-tr-2xl"
      src="../../assets/images/home-images/commercial.jpg"
    />
    <span
      class="
        text-white
        bg-black
        h-8
        w-3/4
        pl-3
        pr-3
        flex flex-wrap
        content-center
        mt-2
        ml-1
        shadow-sm
        rounded-md
        uppercase
        font-extrabold
        custom-header
      "
    >
      Commercial Fishing
    </span>
    <div
      class="
        absolute
        bottom-3
        left-5
        text-white
        bg-primary-dark
        rounded-md
        pl-3
        pr-3
        pt-1
        pb-1
      "
    >
      <span class="font-bold">Check out the categories</span>
      <i
        class="fas fa-chevron-right ml-7 cursor-pointer text-lg"
        aria-hidden="true"
      ></i>
    </div>
    <!--Secondary Feeder Card-->
    <div class="absolute top-3 categories-seconday-card rounded-tr-xl">
      <categories-medium-card category-name="Feeder" img-name="feeder-fishing">
        <!--Last Cards-->
        <template #lastcard>
          <div
            :class="classes[index]"
            v-for="(data, index) in feederCardDetails"
            :key="data.cardTitle"
          >
            <categories-small-card
              :category-title="data.cardTitle"
              :img-name="data.imgName"
            />
          </div>
        </template>
      </categories-medium-card>
    </div>
    <!--Secondary Float Card-->
    <div class="absolute bottom-3 categories-seconday-card">
      <categories-medium-card category-name="Float" img-name="float-fishing">
        <!--Last Cards-->
        <template #lastcard>
          <div
            :class="classes[index]"
            v-for="(data, index) in floatCardDetails"
            :key="data.cardTitle"
          >
            <categories-small-card
              :category-title="data.cardTitle"
              :img-name="data.imgName"
            />
          </div>
        </template>
      </categories-medium-card>
    </div>
  </div>
</template>

<script>
import CategoriesMediumCard from './CategoriesMediumCard.vue'
import CategoriesSmallCard from './CategoriesSmallCard.vue'
export default {
  components: {
    CategoriesMediumCard,
    CategoriesSmallCard,
  },
  data() {
    return {
      feederCardDetails: [
        {
          cardTitle: 'Method',
          imgName: 'method-feeders',
        },
        {
          cardTitle: 'Bomb',
          imgName: 'bomb-fishing',
        },
        {
          cardTitle: 'Cage',
          imgName: 'cage-feeder',
        },
      ],
      floatCardDetails: [
        {
          cardTitle: 'Pellet Waggler',
          imgName: 'pellet-waggler',
        },
        {
          cardTitle: 'Pole',
          imgName: 'pole-fishing',
        },
        {
          cardTitle: 'Waggler',
          imgName: 'waggler-fishing',
        },
      ],
      classes: [
        'absolute top-2 categories-small-card-1',
        'absolute top-3 categories-small-card-2',
        'absolute top-4 categories-small-card-3',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.categories-main-card {
  height: 520px;
  width: 370px;
}

.categories-seconday-card {
  height: 240px;
  width: 320px;
  right: -320px;
}

.categories-small-card-1,
.categories-small-card-2,
.categories-small-card-3 {
  width: 290px;
}

.categories-small-card-1 {
  height: 225px;
  right: -290px;
}

.categories-small-card-2 {
  height: 218px;
  right: -580px;
}

.categories-small-card-3 {
  height: 211px;
  right: -870px;
}

.custom-header {
  box-shadow: 0.5rem 0.5rem 0.5rem (rgba(0, 0, 0, 0.8));
}
</style>
