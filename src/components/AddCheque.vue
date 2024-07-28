<template>
    <v-container>
        <v-btn @click="addCheque">+ Добавить позицию</v-btn>
        <v-list>
            <v-list-item v-for="(item, index) in cheque" :key="item.id">
                <v-form @submit.prevent="">
                    <v-text-field
                        label="Название чека/продукта" 
                        v-model="cheque[index].name" 
                    ></v-text-field>
                    <v-text-field type="number"
                        :min="0"
                        control-variant="stacked"
                        label="Сумма"
                        v-model="cheque[index].price"
                    ></v-text-field>
                    <v-btn @click="delCheque(item.id)">-</v-btn>
                    <v-select label="Кто платил?"
                        v-model="cheque[index].payId"
                        :items="people"
                        item-title="name"
                        item-value="id"
                        >
                    </v-select>
                    <v-select v-model="cheque[index].buyersId"
                        :items="people"
                        item-title="name"
                        item-value="id"
                        label="Кто заказывал?"
                        multiple>
                    </v-select>                    
                </v-form> 
            </v-list-item>
            Общая сумма чеков
            <br>
            {{ totalSum }} руб.
        </v-list>
    </v-container>
</template>

<script>
import people from '@/store/modules/people';

    export default {
        // data: () => ({
        //     priceCorrect: [v => (v !== +v && !isNaN(+v)) || 'Допустимые знаки: .,']
        // }),
        computed: {
            cheque() {
                return this.$store.getters.getCheque;
            },
            people() {
                return this.$store.getters.getPeople;
            },
            totalSum() {
                return this.$store.getters.total;
            },
            // priceCorrect() {
            //     return  [v => (v === +v && isNaN(+v)) || 'Допустимые знаки: .,']
            // }
        },
        methods: {
            addCheque() {
                this.$store.commit('addCheque');
            },
            delCheque(id) {
                this.$store.commit('delCheque', id);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>