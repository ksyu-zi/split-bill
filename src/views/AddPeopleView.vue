<template>
    <v-app>
        <v-main class="main">
            <v-container class="container">
                <add-people></add-people>
                <btn class="btn" @click="goToAddCheque" v-if="!minPeople">Далее</btn>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import AddPeople from '../components/AddPeople.vue'
    
    export default {
        computed: {
            people() {
                return this.$store.getters.getPeople;
            },
            minPeople() {
                if (this.people.length >= 2) {
                    for (let i = 0; i < this.people.length; i++) {
                        if (this.people[i].name === '') {
                            return true
                        }
                    }
                    return false
                }
                return true
            }
        },
        methods: {
            goToAddCheque() {
                console.log(this.people);
                this.$router.push('/cheque');
            }
        },
        components: {
            AddPeople
        }
    }
</script>

<style lang="scss" scoped>
  @import '~vuetify/styles';

  $back-color: #bbc4c8;
  $catchy-color:  #c5b7b3;
  $add-color: #a6cfe9;
  $primary-color: #2a6084;
  $text-color: #2f3f44;
  $font-header: 'Montserrat', sans-serif;
  

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