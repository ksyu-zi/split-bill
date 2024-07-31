<template>
    <v-container>
        <v-btn @click="addCheque">
            + Добавить позицию
        </v-btn>
        <v-list>
            <v-list-item
              v-for="(item, index) in cheque"
              :key="item.id"
            >
                <v-form @submit.prevent="">
                    <v-text-field
                      label="Название чека/продукта" 
                      v-model="cheque[index].name"
                      :rules="[rules.errorName]"
                    ></v-text-field>
                    <v-text-field
                      type="number"
                      :min="0"
                      label="Сумма"
                      v-model="cheque[index].price"
                      :rules="[rules.errorPrice]"                   
                    ></v-text-field>
                    <v-btn
                      icon="mdi-delete-outline"
                      @click="delCheque(item.id)"
                    ></v-btn>
                    <v-select
                      label="Кто платил?"
                      v-model="cheque[index].payId"
                      :items="people"
                      item-title="name"
                      item-value="id"
                      :rules="[rules.errorSelect]"
                    ></v-select>
                    <v-select
                      label="Кто заказывал?"
                      v-model="cheque[index].buyersId"
                      :items="people"
                      item-title="name"
                      item-value="id"
                      :rules="[rules.errorSelects]"
                      multiple
                    ></v-select>                    
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
        data() {
            return {
                rules: {
                    errorName: v => !!v || 'Введите название позиции',
                    errorPrice: v => !!v || 'Введите сумму',
                    errorSelect: v => !!v || 'Выберите участника',
                    errorSelects: v => v.length !== 0 || 'Выберите участников',
                }
            }
        },
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