<template>
    <v-container>
        <v-btn @click="addPeople">+ Добавить человека</v-btn>
        <v-list>
            <v-list-item v-for="(item, index) in people" :key="item.id">
                <v-form @submit.prevent="">
                    <v-text-field type="text" 
                           label="Имя"
                           v-model="people[index].name" 
                           class="block"></v-text-field>
                    <v-btn @click="delPeople(item.id)">-</v-btn> 
                </v-form>  
            </v-list-item>
        </v-list>
    </v-container>
</template>

<script>
export default {
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

<style lang="scss" scoped>

</style>