<template>
    <v-container>
        <ShowResults/>
        <v-btn
          :to="{name: 'home'}"
          target="_self"
          class="bg-blue-grey-darken-4 text-blue-lighten-4"
        >
            Вернуться в начало
        </v-btn>
    </v-container>
</template>

<script>
    import ShowResults from '../components/ShowResults.vue'
    
    export default {
        components: {
            ShowResults
        }
    }
</script>
