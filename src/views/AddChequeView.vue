<template>
    <v-app>
        <v-main class="main">
            <v-container class="container">
                <add-cheque></add-cheque>
                <btn class="btn" @click="goToResults" v-if="!minCheque">Показать результаты</btn>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import AddCheque from '../components/AddCheque.vue'
    
    export default {
        computed: {
            cheque() {
                return this.$store.getters.getCheque;
            },
            minCheque() {
                if (this.cheque.length >= 2) {
                    for (let i = 0; i < this.cheque.length; i++) {
                        if (this.cheque[i].name === '' || this.cheque[i].price === null ||
                            this.cheque[i].payId === 'Кто платил?' || this.cheque[i].buyersId.length === 0) {
                            return true
                        }
                    }
                    return false
                }
                return true
            }
        },
        methods: {
            goToResults() {
                console.log(this.cheque);
                this.$router.push('/results');
            },
        },
        components: {
            AddCheque
        }
    }
</script>

<style lang="scss" scoped>
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