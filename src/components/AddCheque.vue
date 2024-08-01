<template>
    <v-container>
        <v-btn
          @click="addCheque"
          class="bg-blue-grey-darken-4 text-blue-lighten-4"
        >
            + Добавить позицию
        </v-btn>
        <div class="block"
          v-for="(item, index) in cheque"
          :key="item.id"
        >
            <v-form @submit.prevent="">
                <v-row justify="center">
                    <v-col>
                        <v-text-field
                          label="Название чека/продукта" 
                          v-model="cheque[index].name"
                          :rules="[rules.errorName]"
                          color="blue-lighten-4"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                          type="number"
                          :min="0"
                          label="Сумма"
                          v-model="cheque[index].price"
                          :rules="[rules.errorPrice]"
                          color="blue-lighten-4"                   
                        ></v-text-field>
                    </v-col>
                    <v-col cols="2">
                        <v-btn
                          icon="mdi-delete-outline"
                          @click="delCheque(item.id)"
                          class="bg-blue-grey-darken-4 text-blue-lighten-4"
                          color="blue-lighten-4"
                        ></v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-select
                          label="Кто платил?"
                          v-model="cheque[index].payId"
                          :items="people"
                          item-title="name"
                          item-value="id"
                          :rules="[rules.errorSelect]"
                          color="blue-lighten-4"
                        ></v-select>
                    </v-col>
                    <v-col>
                        <v-select
                          label="Кто заказывал?"
                          v-model="cheque[index].buyersId"
                          :items="people"
                          item-title="name"
                          item-value="id"
                          :rules="[rules.errorSelects]"
                          color="blue-lighten-4"
                          multiple
                        ></v-select>
                    </v-col>
                </v-row>    
            </v-form> 
        </div>
        <h3>
            Общая сумма чеков
            <br>
            {{ totalSum }} руб.
        </h3>
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