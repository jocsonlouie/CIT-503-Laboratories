<template>
    <v-card color="white pa-4">
        <v-text-field label="Enter String" filled dense v-model="enterText"></v-text-field>
        <v-btn x-large color="primary mb-4" @click="compute"> Count Vowels</v-btn>

        <p class="font-weight-medium button text-uppercase">Output</p>
        <h1> {{countVowels}} {{ countVowels > 1 ? 'vowels' : 'vowel' }}</h1>
    </v-card>
</template>

<script>
export default {
    name: 'VowelCount',
    data() {
        return {
            enterText: '',
            countVowels: 0,
        }
    },
    methods: {
        compute: function () {

            let vowels = ["a", "e", "i", "o", "u"];
            for (let letter of this.enterText.toLowerCase()) {
                for (let v of vowels) {
                    if (letter === v) {
                        this.countVowels++;
                    }
                }
            }
        }
    },
}
</script>
