<template>
    <div>
        <v-toolbar dense tabs color="primary" dark>
            <v-toolbar-title class="pl-2">String Manipulation</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tabs v-model="tabs" color="transparent" slider-color="white" slot="extension">
                <v-tab v-for="tabsItem in tabsItems" :key="tabsItem.id" :to="tabsItem.link">
                    <span class="pl-2 pr-2">{{ tabsItem.title }}</span>
                </v-tab>
            </v-tabs>
        </v-toolbar>

        <v-container>
            <v-layout row>
                <v-flex xs12 md8 offset-md2>
                    <v-slide-y-transition mode="out-in">
                        <router-view />
                    </v-slide-y-transition>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: null,
            tabsItems: [
                { id: 1, title: 'String to Uppercase', link: 'string-to-uppercase' },
                { id: 2, title: 'Vowel Count', link: 'vowel-count' },
                { id: 3, title: 'Vowel Convert', link: 'vowel-convert' },
                { id: 4, title: 'Consonants to Uppercase', link: 'consonants-to-uppercase' },
                { id: 5, title: 'Count Numbers', link: 'count-numbers' },
                { id: 6, title: 'Count Consonants', link: 'count-consonants' },
            ]
        }
    }
}
</script>

<style scoped>

</style>
