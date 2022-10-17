<template>
    <div>
        <v-toolbar dense color="primary" dark extended extension-height="300" flat>
            <v-toolbar-title class="mx-auto" slot="extension">
                <span>AXIOS API</span>
                <h2>Midterm Laboratory 2</h2>
                <v-layout row>
                    <v-flex wrap>
                        <v-btn outline large fab icon color="white" class="outine-2">
                            <v-icon>data_array</v-icon>
                        </v-btn>
                    </v-flex>
                    <v-flex wrap>
                        <v-btn outline large fab icon color="white" class="outine-2">
                            <v-icon>design_services</v-icon>

                        </v-btn>
                    </v-flex>
                    <v-flex wrap>
                        <v-btn outline large fab icon color="white" class="outine-2">
                            <v-icon>api</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-toolbar-title>
        </v-toolbar>

        <v-container>
            <v-layout row>
                <v-flex xs12 md8 offset-md2>
                    <v-card flat class="card--flex-toolbar" color="transparent">
                        <v-container fluid grid-list-lg class="white">
                            <v-layout row wrap>
                                <v-flex xs12>
                                    <h2 class="headline">Explore Midterm Laboratory 2</h2>
                                    <h2 style="font-size:18px; font-weight: 400; font-weight: bold;">
                                        <a href="https://rapidapi.com/ajith/api/love-calculator/" target="_blank">Love
                                            Calculator
                                            API
                                        </a>
                                    </h2>

                                </v-flex>
                            </v-layout>
                            <v-layout row wrap>
                                <v-flex sm12>
                                    <v-text-field label="Enter your name" ref="userName" filled dense
                                        v-model="userName">
                                    </v-text-field>
                                    <v-text-field label="Enter your lover's name" ref="loversName" filled dense
                                        v-model="loversName">
                                    </v-text-field>
                                    <v-btn x-large color="primary mb-4" @click="compatibilityCheck"> Check compatibility
                                    </v-btn>

                                    <div v-if="show">
                                        <h2
                                            style="font-size:16px; font-weight: 400; font-weight: bold; text-transform: uppercase; text-align: center;">
                                            Result
                                        </h2>
                                        <h2 class="headline" style="text-align: center;">{{ nameOfUser }} 💖 {{
                                        nameOfLover }}</h2>
                                        <v-flex xs12>
                                            <v-hover>
                                                <v-card slot-scope="{ hover }"
                                                    :class="`elevation-${hover ? 12 : 2} indigo`">
                                                    <v-card-title primary-title class="justify-center text-center">
                                                        <div>
                                                            <h5 class="caption text-uppercase white--text text-center"
                                                                style="text-align: center;">
                                                                message
                                                            </h5>
                                                            <h3 class="headline mb-0 white--text"> {{ message }}
                                                            </h3>
                                                        </div>
                                                    </v-card-title>
                                                </v-card>
                                            </v-hover>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-hover>
                                                <v-card slot-scope="{ hover }"
                                                    :class="`elevation-${hover ? 12 : 2} blue`">
                                                    <v-card-title primary-title class="justify-center text-center">
                                                        <div>
                                                            <h5 class="caption mb-4 text-uppercase white--text text-center"
                                                                style="text-align: center;">
                                                                percentage
                                                            </h5>
                                                            <v-progress-circular :size="150" :width="15"
                                                                :value="parseInt(percentage)" color="white">
                                                                {{ percentage }}
                                                            </v-progress-circular>
                                                        </div>
                                                    </v-card-title>
                                                </v-card>
                                            </v-hover>
                                        </v-flex>
                                    </div>




                                </v-flex>

                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script >
import axios from 'axios';
export default {

    data() {
        return {
            userName: '',
            loversName: '',
            nameOfUser: '',
            nameOfLover: '',
            message: '',
            percentage: '',
            loversData: null,
            show: false
        }
    },
    methods: {
        compatibilityCheck: async function () {
            const options = {
                method: 'GET',
                url: 'https://love-calculator.p.rapidapi.com/getPercentage',
                params: { sname: this.$refs.userName.value, fname: this.$refs.loversName.value },
                headers: {
                    'X-RapidAPI-Key': '487ebc34d7mshafa2432ad12a1eap1bd18ejsnf9a4945d7b36',
                    'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
                }
            };
            console.log(this.$refs.userName.value, this.$refs.loversName.value);

            await axios.request(options).then((response) => {
                console.log(response.data);
                console.log(response.data.sname);

                this.nameOfUser = response.data.fname;
                this.nameOfLover = response.data.sname;
                this.message = response.data.result;
                this.percentage = response.data.percentage;
                this.show = true;
            }).catch((error) => {
                console.error(error);
            })
        }

    }
}
</script>

<style scoped>
.outine-2 {
    border: 2px solid white;
}

.card--flex-toolbar {
    margin-top: -64px;
}

.learn-more-btn {
    text-transform: initial;
    text-decoration: underline;
}
</style>
