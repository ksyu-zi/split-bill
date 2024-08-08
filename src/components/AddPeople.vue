<template>
    <v-container>
        <v-btn
          @click="addPeople"
          class="bg-blue-grey-darken-4 text-blue-lighten-4"
          rounded="xl"
        >
            + Добавить человека
        </v-btn>
        <div
          v-for="(item, index) in people"
          :key="item.id"
          class="pt-6"
        >
            <v-form @submit.prevent="">
                <v-row justify="center">
                    <v-col cols="4">
                        <v-text-field
                          type="text" 
                          label="Имя"
                          v-model="people[index].name" 
                          :rules="rules.errorName"
                          color="blue-lighten-4"
                        />
                    </v-col>
                    <v-col cols="2">
                        <v-btn
                          @click="delPeople(item.id)"
                          icon="mdi-delete-outline"
                          class="bg-blue-grey-darken-4 text-blue-lighten-4"
                        />
                    </v-col>
                </v-row>
            </v-form>  
        </div>
    </v-container>
</template>

<script>
    export default {
        data(){
            return {
                rules: {
                    errorName: [
                        v => !!v || 'Введите имя участника',
                        v => {
                            const pattern = this.$store.getters['people/getValidName'];
                            return pattern.test(v) || 'Имя участника может содержать только буквы, можно ввести в виде ФИО';
                        }
                    ]
                }
            }
        },
        computed: {
            people() {
                return this.$store.getters['people/getPeople'];
            }
        },
        methods: {
            addPeople() {
                this.$store.commit('people/addPeople');
            },
            delPeople(id) {
                this.$store.commit('people/delPeople', id);
            }
        }
    }
</script>
