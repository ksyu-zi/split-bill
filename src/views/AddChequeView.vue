<template>
    <v-container>
        <AddCheque/>
        <v-btn
          :to="{name: 'results'}"
          target="_self"
          :disabled="btnDisabled"
          class="bg-blue-grey-darken-4 text-blue-lighten-4"
        >
            Показать результаты
        </v-btn>
    </v-container>
</template>

<script>
    import AddCheque from '../components/AddCheque.vue'
    
    export default {
        computed: {
            btnDisabled() {
                return this.$store.getters['cheque/getBtnDisabled'];
            }
        },
        components: {
            AddCheque
        }
    }
</script>