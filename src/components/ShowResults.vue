<template>
    <v-container>
        <h2>Результаты</h2>
        <div class="block">
          <div v-for="item in getResults">
            <h2 v-if="item.debtors">Пользователю {{ item.name }} должны </h2>
            <p v-for="debtor in item.debtors">
                {{ debtor.name }} - {{ debtor.debt }} руб.
            </p>
          </div>
        </div>
    </v-container>
</template>

<script>
import people from '@/store/modules/people';

    export default {
        computed: {
            getResults() {
                let people = this.$store.getters.getPeople;
                let get = this.$store.getters.calcWHoToWhom;
                console.log(get);
                let person;
                let debt;
                let res;
                for (let i = 0; i < people.length; i++) {
                    person = people[i].id;
                    if (get[person]) {
                        res = [];
                        for (let debtor in get[person]) {
                            debt = get[person][debtor];
                            res.push({ name: this.$store.getters.getName(debtor), debt: debt});
                        }
                        if (res.length !== 0) {
                            people[i].debtors = res;
                        }
                    }
                }
                console.log(people);
                return people;
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

  h2 {
    color: $primary-color;
    font-family: $font-header;
    font-size: 64px;
  }
  .block {
    display: flex;
    flex-direction: column;
    justify-self: center;
    background-color: $add-color;
    border: 2px solid $text-color;
    border-radius: 20px;
    padding: 20px;
    margin: 40px 400px;
    h2 {
      font-size: 32px;
    }
  }
  p {
    color: $text-color;
    font-family: $font-text;
    font-size: 26px;
  }
</style>