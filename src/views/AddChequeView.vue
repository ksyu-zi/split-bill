<template>
    <v-container>
        <AddCheque/>
        <v-btn :to="{name: 'results'}" target="_self">
            Показать результаты
        </v-btn>
    </v-container>
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
        components: {
            AddCheque
        }
    }
</script>

<style lang="scss" scoped>

</style>