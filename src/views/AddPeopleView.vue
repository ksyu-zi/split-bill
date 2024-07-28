<template>
    <v-container>
        <AddPeople/>
        <v-btn :to="{name: 'cheque'}" target="_self">
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
        components: {
            AddPeople
        }
    }
</script>

<style lang="scss" scoped>

</style>