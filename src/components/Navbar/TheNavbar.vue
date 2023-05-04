<template>
  <div
    class="bg-gray-100 h-14 flex justify-center items-center gap-5 shadow-lg"
  >
    <RouterLink
      :to="{ name: 'home' }"
      class="font-bold hover:scale-125 duration-75 hover:text-purple-700 uppercase"
      >Home</RouterLink
    >
    <span class="bg-black rounded-full h-2 w-2"></span>
    <RouterLink
      :to="{ name: 'favorites' }"
      class="font-bold hover:scale-125 duration-75 hover:text-purple-700 uppercase"
    >
      Favorites
    </RouterLink>
  </div>
</template>
