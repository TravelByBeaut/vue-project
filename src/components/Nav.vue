<template>
    <header>
      <router-link :to="{ name: 'Home' }" class="button">Home</router-link>
      <router-link :to="{ name: 'About' }" class="button">About</router-link>
      <router-link :to="{ name: 'Gifs' }" class="button">Gifs</router-link>
    </header>
</template>

\
<style scoped>

header {
  line-height: 1.5;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: rgb(37, 166, 206);
}
.button {
    text-decoration: none;
    color: white;
    padding: 5px;
}
.button:active {
    color: black;
    box-shadow: 2px 2px 2px black;
}

</style>