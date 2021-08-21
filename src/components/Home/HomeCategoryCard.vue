<template>
  <div class="price__cards">
    <div class="card">
      <div class="card__side card__side--front">
        <figure>
          <img :src="require('../../assets/imges/home-images' + imgName)" />
          <figcaption>{{ cardHeader }}</figcaption>
        </figure>
        <div class="card__side--details">
          <ul></ul>
        </div>
      </div>
      <div class="card__side card__side--back">
        <small>from &#163;20</small>
        <!-- <router-link :to="url">Learn More</router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cardHeader', 'url', 'imgName'],
}
</script>

<style lang="scss" scoped>
.price__cards {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  width: 100%;
  height: 100%;
}

.card {
  perspective: 150rem;
  z-index: 1000;
  cursor: pointer;
  position: relative;
  height: 30rem;
  width: 18rem;

  &__side {
    height: 30rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    transition: all 2s ease;
    box-shadow: 0 1.5rem 4rem rgba(#000, 0.15);

    &--front {
      background-color: #fff;

      & figure {
        height: 50%;
        position: relative;
        clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);

        &::after {
          content: '';
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.6);
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }

      & figure img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }

      & figcaption {
        position: absolute;
        bottom: 4rem;
        right: 2rem;
        color: #fff;
        z-index: 1000;
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 800;
        background-color: white;
        padding: 0.5rem 1rem;
        box-shadow: 1rem 1rem 1rem (rgba(0, 0, 0, 0.8));
        text-shadow: 0.3rem 0.3rem 1rem (rgba(0, 0, 0, 0.8));
      }
    }

    &--back {
      background: linear-gradient(grey 5%, black 95%);
      transform: rotateY(180deg);
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 100%;
      width: 100%;
      flex-direction: column;
      color: #fff;

      small {
        font-size: 3rem;
        font-weight: 800;
      }

      a {
        background: pink;
        width: 18rem;
        color: #fff;
        padding: 1.5rem 3rem;
        border-radius: 100px;
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 800;
        transition: all 0.5s;
        text-decoration: none;

        &:hover {
          transform: translateY(-5px);
          box-shadow: 0.4rem 0.4rem 0.7rem (rgba(#fff, 0.6));
        }
      }
    }
    &--details {
      background: linear-gradient(grey 5%, black 95%);
      height: 55%;
      margin-top: -2.5rem;

      & ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        padding-top: 4.5rem;
      }

      & i {
        color: pink;
        margin-right: 5px;
        margin-top: 2px;
      }

      & li {
        color: #fff;
        font-size: 1.5rem;
        font-weight: 500;
        display: flex;
        line-height: 2rem;
        margin-bottom: 2.2rem;
      }
    }
  }

  &:hover &__side--front {
    transform: rotateY(180deg);
  }
  &:hover &__side--back {
    transform: rotateY(0);
  }
}
</style>
