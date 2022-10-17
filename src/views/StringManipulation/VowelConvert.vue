<template>
    <v-card color="white pa-4">
        <v-text-field label="Enter String" filled dense v-model="enterText"></v-text-field>
        <v-btn x-large color="primary mb-4" @click="compute"> Convert Vowels to *</v-btn>

        <p class="font-weight-medium button text-uppercase">Output</p>
        <h1> {{convertVowels}}</h1>
    </v-card>
</template>

<script>
export default {
    name: 'VowelConvert',
    data() {
        return {
            enterText: '',
            convertVowels: '',
        }
    },
    methods: {
        compute: function () {

            this.convertVowels = this.enterText.replace(/[aeiou]/gi, '*');
        }
    },
}
</script>
