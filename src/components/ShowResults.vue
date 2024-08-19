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
            cheque() {
                return this.$store.state.cheque.cheque;
            },
            people() {
                return this.$store.state.people.people;
            },
            getResults() {
                let result = [];
                let get = this.$store.getters['cheque/calcWHoToWhom'];
                let person;
                let debt;
                let res;
                for (let i = 0; i < this.people.length; i++) {
                    person = this.people[i].id;
                    if (get[person]) {
                        res = [];
                        for (let debtor in get[person]) {
                            debt = get[person][debtor];
                            res.push({ name: this.$store.getters['people/getName'](debtor), debt: debt});
                        }
                        if (res.length !== 0) {
                            result.push({
                                id: person,
                                name: this.$store.getters['people/getName'](person),
                                debtors: res
                            });
                        }
                    }
                }
                return result;
            }
        }
    }
</script>