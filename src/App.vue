<template>
  <div
    id="nav"
    class="
      fixed
      top-0
      left-0
      h-screen
      w-36
      z-50
      flex flex-col
      bg-black
      justify-between
      items-center
      font-extrabold
      text-gray-600
    "
  >
    <div class="pt-6 pl-6 pr-6">
      <img src="./assets/images/home-images/logo.png" />
    </div>
    <div class="flex flex-col space-y-6">
      <router-link to="/" class="flex justify-center align-center"
        ><i class="fas fa-home" aria-hidden="true"></i
      ></router-link>
      <router-link to="/about" class="flex justify-center align-center"
        ><i class="fas fa-stream" aria-hidden="true"></i
      ></router-link>
    </div>
    <div class="pb-9">
      <h2>kek</h2>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');

#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  margin-left: 100px;
}

#nav {
  a {
    font-size: 20px;
    padding: 8px 10px;
    &.router-link-exact-active {
      color: white;
      background: #166088;
      border-radius: 10px;
    }
  }
}
</style>
