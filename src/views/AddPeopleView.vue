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
            people() {
                return this.$store.getters.getPeople;
            },
            btnDisabled() {
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
        components: {
            AddPeople
        }
    }
</script>