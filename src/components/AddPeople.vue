<template>
    <v-container>
        <btn class="btn-add" @click="addPeople">+ Добавить человека</btn>
        <v-list class="list">
            <v-list-item v-for="(item, index) in people">
                <v-form @submit.prevent="">
                    <input type="text" 
                           placeholder="Имя"
                           v-model="people[index].name" 
                           class="block">
                    <btn class="btn-del" @click="delPeople(index)">-</btn> 
                </v-form>  
            </v-list-item>
        </v-list>
    </v-container>
</template>

<script>
export default {
    computed: {
        people() {
            return this.$store.getters.getPeople;
        }
    },
    methods: {
        addPeople() {
            this.namePeople = '';
            this.$store.commit('addPeople');
        },
        delPeople(index) {
            this.$store.commit('delPeople', index);
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
  }
  .block {
    background-color: $add-color;
    width: 52%;
    margin-right: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 20px;
    font-family: $font-text;
    font-size: 26px;
    border: 2px solid $text-color;
  }
  .btn-del {
    background-color: $back-color;
    color: $primary-color;
    font-family: $font-header;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    padding: 10px 22px;
    border: 2px solid $text-color;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background-color: $add-color;
    }
  }
</style>