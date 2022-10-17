<template>
    <v-card color="white pa-4">
        <v-text-field label="Enter String" filled dense v-model="enterText"></v-text-field>
        <v-btn x-large color="primary mb-4" @click="compute"> Count Consonants</v-btn>

        <p class="font-weight-medium button text-uppercase">Output</p>
        <h1> {{countConsonants}} {{ countConsonants > 1 ? 'consonants' : 'consonant' }}</h1>
    </v-card>
</template>

<script>
export default {
    name: 'CountConsonants',
    data() {
        return {
            enterText: '',
            countConsonants: 0,
        }
    },
    methods: {
        compute: function () {

            let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z', '\0'];
            for (let letterC of this.enterText.toLowerCase()) {
                for (let vC of consonants) {
                    if (letterC === vC) {
                        this.countConsonants++;
                    }
                }
            }
        }
    },
}
</script>
