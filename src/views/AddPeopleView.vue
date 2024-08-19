<template>
    <v-container>
        <AddPeople/>
        <v-btn
          :to="{name: 'cheque'}"
          target="_self"
          :disabled="btnDisabled"
          class="bg-blue-grey-darken-4 text-blue-lighten-4"
        >
            Далее
        </v-btn>
    </v-container>
</template>

<script>
    import AddPeople from '../components/AddPeople.vue'
    
    export default {
        computed: {
            btnDisabled() {
                return this.$store.getters['people/getBtnDisabled'];
            }
        },
        components: {
            AddPeople
        }
    }
</script>