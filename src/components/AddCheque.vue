<template>
    <v-container>
        <btn class="btn-add" @click="addCheque">+ Добавить позицию</btn>
        <v-list class="list">
            <v-list-item v-for="(item, index) in cheque">
                <v-form @submit.prevent="" class="block">
                    <input type="text" 
                           placeholder="Название чека/продукта" 
                           v-model="cheque[index].name" 
                           class="input">
                    <input type="number" 
                           min="0" 
                           placeholder="Сумма"
                           v-model="cheque[index].price"
                           class="input">
                    <btn class="btn-del" @click="delCheque(index)">-</btn>
                    <br>
                    <div class="select">
                        <label>Кто платил?</label>
                        <select v-model="cheque[index].payId" class="input">
                            <option v-for="(itemPerson, indexPerson) in people"
                                    :value="itemPerson.id"
                            >{{ itemPerson.name }}</option>
                        </select>
                    </div>
                    <div class="select">
                        <label>Кто заказывал?</label>
                        <select multiple v-model="cheque[index].buyersId" class="multi">
                            <option v-for="(itemPerson, indexPerson) in people" 
                                    :value="itemPerson.id"
                            >{{ itemPerson.name }}</option>
                        </select>
                    </div>
                </v-form> 
            </v-list-item>
            <v-container class="result">
                <h3>Общая сумма чеков</h3>
                <p>{{ totalSum }} руб.</p>
            </v-container>
        </v-list>
    </v-container>
</template>

<script>
import people from '../store/modules/people';

    export default {
        computed: {
            cheque() {
                let cheque = this.$store.getters.getCheque;
                for (let i = 0; i < cheque.length; i++) {
                  if (cheque[i].price < 0) {
                    this.$store.commit('setCheque', i);
                  }
                }
                return this.$store.getters.getCheque;
            },
            people() {
                return this.$store.getters.getPeople;
            },
            totalSum() {
                return this.$store.getters.total;
            }
        },
        methods: {
            addCheque() {
                this.nameCheque = '';
                this.price = null;
                this.$store.commit('addCheque');
            },
            delCheque(index) {
                this.$store.commit('delCheque', index);
            }
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
  $font-text: 'Roboto', sans-serif;

  .btn-add {
    background-color: $back-color;
    color: $primary-color;
    font-family: $font-header;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
    border: 1px solid $text-color;
    &:hover {
      background-color: $add-color;
    }
  }
  .list {
    background: none;
    margin: 50px 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .block {
    background-color: $add-color;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 20px;
    border: 2px solid $text-color;
  }
  .input {
    background-color: $back-color;
    color: $text-color;
    margin: 10px;
    padding: 10px;
    font-family: $font-text;
    font-size: 26px;
    border: 2px solid $text-color;
    border-radius: 10px;
  }
  .select {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: $font-text;
    font-size: 26px;
  }
  label {
    margin-right: 20px;
  }
  .multi {
    background-color: white;
    color: $text-color;
    font-family: $font-text;
    font-size: 26px;
    border: 2px solid $text-color;
  }
  .result {
    width: 35%;
    background-color: $add-color;
    color: $primary-color;
    font-family: $font-header;
    font-size: 30px;
    font-weight: bold;
    padding: 20px;
    border: 2px solid $text-color;
    border-radius: 20px;
  }
  .btn-del {
    background-color: $back-color;
    color: $primary-color;
    font-family: $font-header;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    padding: 10px 23px;
    border: 2px solid $text-color;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: $add-color;
    }
  }
</style>