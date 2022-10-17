<template>
    <v-card color="white pa-4">
        <v-text-field label="Enter String" filled dense v-model="enterText"></v-text-field>
        <v-btn x-large color="primary mb-4" @click="compute"> Convert to Consonants to Uppercase</v-btn>

        <p class="font-weight-medium button text-uppercase">Output</p>
        <h1> {{consonantsToUppercase}}</h1>
    </v-card>
</template>

<script>
export default {
    name: 'ConsonantsToUppercase',
    data() {
        return {
            enterText: '',
            consonantsToUppercase: ''
        }
    },
    methods: {
        compute: function () {

            this.consonantsToUppercase = this.enterText.replace(/[bcdfghjklmnpqrstvwxyz]/g, function (char) {
                return char.toUpperCase();
            });

        }
    },
}
</script>
