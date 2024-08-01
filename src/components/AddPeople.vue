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
                          :rules="[rules.errorName]"
                          color="blue-lighten-4"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="2">
                        <v-btn
                          @click="delPeople(item.id)"
                          icon="mdi-delete-outline"
                          class="bg-blue-grey-darken-4 text-blue-lighten-4"
                        ></v-btn>
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
                errorName: v => !!v || 'Введите название позиции'
            }
        }
    },
    computed: {
        people() {
            return this.$store.getters.getPeople;
        }
    },
    methods: {
        addPeople() {
            this.$store.commit('addPeople');
        },
        delPeople(id) {
            this.$store.commit('delPeople', id);
        }
    }
}
</script>
