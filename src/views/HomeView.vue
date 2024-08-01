<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>
          Добро пожаловать в Split the bill
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          Это приложение поможет вам разделить счёт. <br>
          Сначала добавьте людей, затем укажите позиции из счёта,
          кто его оплачивал, а также кто что ел или пил.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn 
          :to="{name: 'people'}"
          target="_self"
          class="bg-blue-lighten-4 text-blue-grey-darken-4"
        >
          Начать
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    mounted() {
      this.$store.commit('delAllPeople');
      this.$store.commit('delAllCheque');
    }
  }
</script>
