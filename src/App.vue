<template>
  <v-app>
    <v-main class="main">
      <router-view/>
    </v-main>
  </v-app>
</template>

<style lang="scss">
  .main {
    background-color: aliceblue;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
</style>