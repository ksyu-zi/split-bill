<template>
    <v-container>
        <h1>
            Результаты
        </h1>
        <div
          v-for="item in getResults"
          :key="item.id"
        >
            <h3 v-if="item.debtors">
                Пользователю {{ item.name }} должны
            </h3>
            <div
              v-for="debtor in item.debtors"
              :key="debtor.id"
            >
                {{ debtor.name }} - {{ debtor.debt }} руб.
            </div>
        </div>
    </v-container>
</template>

<script>
    export default {
        computed: {
            getResults() {
                let people = this.$store.getters['people/getPeople'];
                let cheque = this.$store.getters['cheque/getCheque'];
                if (people.length === 0) {
                    this.$store.dispatch('people/loadFromLocalStorage');
                }
                if (cheque.length === 0) {
                    this.$store.dispatch('cheque/loadFromLocalStorage');
                }
                let get = this.$store.getters['cheque/calcWHoToWhom'];
                let person;
                let debt;
                let res;
                for (let i = 0; i < people.length; i++) {
                    person = people[i].id;
                    if (get[person]) {
                        res = [];
                        for (let debtor in get[person]) {
                            debt = get[person][debtor];
                            res.push({ name: this.$store.getters['people/getName'](debtor), debt: debt});
                        }
                        if (res.length !== 0) {
                            people[i].debtors = res;
                        }
                    }
                }
                return people;
            }
        },
        mounted() {
            if (this.$store.getters['people/getPeople'] === 0) {
                this.$store.dispatch('people/loadFromLocalStorage');
            }
            if (this.$store.getters['cheque/getCheque'] === 0) {
                this.$store.dispatch('cheque/loadFromLocalStorage');
            }
        },
    }
</script>