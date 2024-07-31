<template>
    <v-container>
        <h2>
            Результаты
        </h2>
        <div>
            <div
              v-for="item in getResults"
              :key="item.id"
            >
                <h2 v-if="item.debtors">
                    Пользователю {{ item.name }} должны
                </h2>
                <p
                  v-for="debtor in item.debtors"
                  :key="debtor.id"
                >
                    {{ debtor.name }} - {{ debtor.debt }} руб.
                </p>
            </div>
        </div>
    </v-container>
</template>

<script>
    export default {
        computed: {
            getResults() {
                let people = this.$store.getters.getPeople;
                let get = this.$store.getters.calcWHoToWhom;
                let person;
                let debt;
                let res;
                for (let i = 0; i < people.length; i++) {
                    person = people[i].id;
                    if (get[person]) {
                        res = [];
                        for (let debtor in get[person]) {
                            debt = get[person][debtor];
                            res.push({ name: this.$store.getters.getName(debtor), debt: debt});
                        }
                        if (res.length !== 0) {
                            people[i].debtors = res;
                        }
                    }
                }
                return people;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>