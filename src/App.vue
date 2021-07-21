<template>
  <div
    id="nav"
    class="
      absolute
      top-0
      left-0
      h-screen
      w-28
      z-50
      flex flex-col
      bg-black
      justify-between
      items-center
      rounded-tl
      border-gray-800 border-r-2
      font-extrabold
      text-gray-800
    "
  >
    <div class="pt-5">
      <span class="bg-white h-5 w-5">Logo</span>
    </div>
    <div class="flex flex-col space-y-6">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
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
}

#nav {
  a {
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
