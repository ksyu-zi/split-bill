<template>
    <v-container>
        <ShowResults/>
        <v-btn :to="{name: 'home'}" target="_self">
            Вернуться в начало
        </v-btn>
    </v-container>
</template>

<script>
    import ShowResults from '../components/ShowResults.vue'
    
    export default {
        components: {
            ShowResults
        }
    }
</script>

<style lang="scss" scoped>

</style>