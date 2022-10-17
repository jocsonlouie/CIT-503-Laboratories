<template>
    <v-card color="white pa-4">
        <v-text-field label="Enter String" filled dense v-model="enterText"></v-text-field>
        <v-btn x-large color="primary mb-4" @click="compute"> Count Numbers</v-btn>

        <p class="font-weight-medium button text-uppercase">Output</p>
        <h1> {{countNumbers}} {{ countNumbers > 1 ? 'numbers' : 'number' }}</h1>
    </v-card>
</template>

<script>
export default {
    name: 'CountNumbers',
    data() {
        return {
            enterText: '',
            countNumbers: 0,
        }
    },
    methods: {
        compute: function () {

            this.countNumbers = this.enterText.replace(/\D/g, '').length;
        }
    },
}
</script>
