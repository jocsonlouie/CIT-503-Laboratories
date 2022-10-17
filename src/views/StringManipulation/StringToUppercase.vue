<template>
    <v-card color="white pa-4">
        <v-text-field label="Enter String" filled dense v-model="enterText"></v-text-field>
        <v-btn x-large color="primary mb-4" @click="compute"> Convert to uppercase</v-btn>

        <p class="font-weight-medium button text-uppercase">Output</p>
        <h1> {{ convertToUppercase ? convertToUppercase : '[ output here ]' }}</h1>
    </v-card>
</template>

<script>
export default {
    name: 'StringToUppercase',
    data() {
        return {
            enterText: '',
            convertToUppercase: ''
        }
    },
    methods: {
        compute: function () {

            this.convertToUppercase = this.enterText.toUpperCase();

        }
    },
}
</script>
