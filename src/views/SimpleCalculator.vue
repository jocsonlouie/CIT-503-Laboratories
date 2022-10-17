<template>
    <div>
        <v-toolbar dense color="primary" dark extended extension-height="300" flat>
            <v-toolbar-title class="mx-auto" slot="extension">
                <span>Simple Calculator</span>
                <h2>Lesson 1 Activity 1</h2>
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
                                    <h2 class="headline">Explore Simple Calculator</h2>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap>
                                <v-flex sm12>
                                    <v-text-field type="number" label="Enter First Number" filled dense
                                        v-model.number="first_value">
                                    </v-text-field>
                                    <v-text-field type="number" label="Enter Second Number" filled dense
                                        v-model.number="second_value">
                                    </v-text-field>
                                    <!-- <v-btn x-large color="primary mb-4" @click="compute"> Compute Values</v-btn> -->
                                </v-flex>
                                <v-flex xs12 sm6 md6 lg6>
                                    <v-hover>
                                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2} teal`">

                                            <v-card-title primary-title>

                                                <div>
                                                    <h5 class="caption text-uppercase white--text">
                                                        sum
                                                    </h5>
                                                    <h3 class="headline mb-0 white--text"> {{ add }}</h3>
                                                </div>

                                            </v-card-title>

                                        </v-card>

                                    </v-hover>
                                </v-flex>

                                <v-flex xs12 sm6 md6 lg6>
                                    <v-hover>
                                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2} orange`">

                                            <v-card-title primary-title>

                                                <div>
                                                    <h5 class="caption text-uppercase white--text">
                                                        difference
                                                    </h5>
                                                    <h3 class="headline mb-0 white--text"> {{ minus }}</h3>
                                                </div>

                                            </v-card-title>

                                        </v-card>

                                    </v-hover>
                                </v-flex>

                                <v-flex xs12 sm6 md6 lg6>
                                    <v-hover>
                                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2} blue`">

                                            <v-card-title primary-title>

                                                <div>
                                                    <h5 class="caption text-uppercase white--text">
                                                        product
                                                    </h5>
                                                    <h3 class="headline mb-0 white--text"> {{ multiply }}</h3>
                                                </div>

                                            </v-card-title>

                                        </v-card>

                                    </v-hover>
                                </v-flex>

                                <v-flex xs12 sm6 md6 lg6>
                                    <v-hover>
                                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2} purple`">

                                            <v-card-title primary-title>

                                                <div>
                                                    <h5 class="caption text-uppercase white--text">
                                                        quotient
                                                    </h5>
                                                    <h3 class="headline mb-0 white--text"> {{ divide ? divide:
                                                    '-' }}
                                                    </h3>
                                                </div>

                                            </v-card-title>

                                        </v-card>

                                    </v-hover>
                                </v-flex>

                                <v-flex xs12 sm6 md6 lg6>
                                    <v-hover>
                                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2} indigo`">

                                            <v-card-title primary-title>

                                                <div>
                                                    <h5 class="caption text-uppercase white--text">
                                                        average
                                                    </h5>
                                                    <h3 class="headline mb-0 white--text"> {{ computeAverage }}</h3>
                                                </div>

                                            </v-card-title>

                                        </v-card>

                                    </v-hover>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            first_value: 0,
            second_value: 0,
            sum: 0,
            difference: 0,
            product: 0,
            quotient: 0,
            average: 0,
            t_one: 'Enter First Number',
            t_two: "Enter Second Number",
            empty: true,
        }
    },
    computed: {
        add: function () {
            this.sum = this.first_value + this.second_value;
            return this.sum
        },

        minus: function () {
            this.difference = this.first_value - this.second_value;
            return this.difference
        },

        multiply: function () {
            this.product = this.first_value * this.second_value;
            return this.product
        },

        divide: function () {
            this.quotient = this.first_value / this.second_value;
            return this.quotient
        },

        computeAverage: function () {
            this.average = (this.first_value + this.second_value) / 2;
            return this.average
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
