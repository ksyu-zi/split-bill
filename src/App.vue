<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style lang="scss">

  $back-color: #bbc4c8;
  $catchy-color:  #c5b7b3;
  $add-color: #a6cfe9;
  $primary-color: #2a6084;
  $text-color: #2f3f44;
  $font-header: 'Montserrat', sans-serif;
  $font-text: 'Roboto', sans-serif;

  .main {
    background-color: $back-color;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container {
    background-color: $catchy-color;
    margin: 100px 400px;
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 20px;
  }
  .block {
    background-color: $add-color;
    width: 52%;
    margin: 50px;
    border-radius: 20px;
    padding: 20px;
  }
  h1{
    color: $primary-color;
    font-family: $font-header;
    font-size: 64px;
  }
  p{
    color: $text-color;
    font-family: $font-text;
    font-size: 26px;
    padding: 40px;
  }
  .btn {
    background-color: $back-color;
    color: $primary-color;
    font-family: $font-header;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    padding: 20px 30px;
    border: 1px solid $text-color;
    border-radius: 25px;
    cursor: pointer;
    &:hover {
      box-shadow: 0 10px 20px $primary-color;
      background-color: $add-color;
    }
    &:active {
      box-shadow: 0 5px 10px $primary-color;
    }
  }
</style>