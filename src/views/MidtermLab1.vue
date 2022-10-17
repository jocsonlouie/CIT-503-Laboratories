<template>
    <div>
        <v-toolbar dense color="primary" dark extended extension-height="300" flat>
            <v-toolbar-title class="mx-auto" slot="extension">
                <span>Shapes Computation</span>
                <h2>Midterm Laboratory 1</h2>
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
                                    <h2 class="headline">Explore Midterm Laboratory 1</h2>
                                    <h2 style="font-size:16px; font-weight: 400;">Here are the following options for
                                        computation.</h2>
                                    <h2 style="font-size:16px; font-weight: 400;">1. Rectangle</h2>
                                    <h2 style="font-size:16px; font-weight: 400;">2. Square</h2>
                                    <h2 style="font-size:16px; font-weight: 400;">3. Triangle</h2>
                                    <h2 style="font-size:16px; font-weight: 400;">4. Circle</h2>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap>
                                <v-flex sm12>
                                    <v-text-field type="number" label="Input the chosen number to
                                        proceed." filled dense v-model.number="inputChoice" min="1">
                                    </v-text-field>
                                </v-flex>
                                <v-flex xs12 v-if="inputChoice === 1">
                                    <v-hover>
                                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2} orange`">

                                            <v-card-title primary-title>

                                                <v-container fluid>
                                                    <h5 class="headline text-uppercase white--text">
                                                        Rectangle
                                                    </h5>
                                                    <v-text-field type="number" label="Enter Length:" filled dense
                                                        v-model.number="rLength" dark>
                                                    </v-text-field>
                                                    <v-text-field type="number" label="Enter Width:" filled dense
                                                        v-model.number="rWidth" dark>
                                                    </v-text-field>
                                                    <h3 class="headline mb-0 white--text"> Rectangle area is {{
                                                    rectangle }}.</h3>
                                                </v-container>

                                            </v-card-title>

                                        </v-card>

                                    </v-hover>
                                </v-flex>

                                <v-flex xs12 v-else-if="inputChoice === 2">
                                    <v-hover>
                                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2} orange`">

                                            <v-card-title primary-title>

                                                <v-container fluid>
                                                    <h5 class="headline text-uppercase white--text">
                                                        Square
                                                    </h5>
                                                    <v-text-field type="number" label="Enter Side:" filled dense
                                                        v-model.number="sSide" dark>
                                                    </v-text-field>
                                                    <h3 class="headline mb-0 white--text"> Square area is {{
                                                    square }}.</h3>
                                                </v-container>

                                            </v-card-title>

                                        </v-card>

                                    </v-hover>
                                </v-flex>

                                <v-flex xs12 v-else-if="inputChoice === 3">
                                    <v-hover>
                                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2} orange`">

                                            <v-card-title primary-title>

                                                <v-container fluid>
                                                    <h5 class="headline text-uppercase white--text">
                                                        Triangle
                                                    </h5>
                                                    <v-text-field type="number" label="Enter Side:" filled dense
                                                        v-model.number="tBase" dark>
                                                    </v-text-field>

                                                    <v-text-field type="number" label="Enter Side:" filled dense
                                                        v-model.number="tHeight" dark>
                                                    </v-text-field>
                                                    <h3 class="headline mb-0 white--text"> Triangle area is {{
                                                    triangle }}.</h3>
                                                </v-container>
                                            </v-card-title>

                                        </v-card>

                                    </v-hover>
                                </v-flex>

                                <v-flex xs12 v-else-if="inputChoice === 4">
                                    <v-hover>
                                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2} orange`">

                                            <v-card-title primary-title>

                                                <v-container fluid>
                                                    <h5 class="headline text-uppercase white--text">
                                                        Circle
                                                    </h5>
                                                    <v-text-field type="number" label="Enter radius:" filled dense
                                                        v-model.number="cRadius" dark>
                                                    </v-text-field>

                                                    <h3 class="headline mb-0 white--text"> Circle area is {{
                                                    circle.toFixed(2) }}.</h3>
                                                </v-container>

                                            </v-card-title>

                                        </v-card>

                                    </v-hover>
                                </v-flex>


                                <v-flex xs12 v-else-if="inputChoice >= 5">
                                    <v-hover>
                                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2} orange`">

                                            <v-card-title primary-title>

                                                <div>
                                                    <h5 class="caption text-uppercase white--text">
                                                        Wrong Input
                                                    </h5>
                                                    <h3 class="headline mb-0 white--text"> Please check your input.</h3>
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
            inputChoice: null,
            rLength: 0,
            rWidth: 0,
            rectangleArea: 0,
            sSide: 0,
            squareArea: 0,
            tBase: 0,
            tHeight: 0,
            triangleArea: 0,
            cRadius: 0,
            circleArea: 0,
            pie: 3.141592653589793238462643383279502884197
        }
    },
    computed: {
        rectangle: function () {
            this.rectangleArea = this.rLength * this.rWidth;
            return this.rectangleArea
        },
        square: function () {
            this.squareArea = this.sSide * this.sSide;
            return this.squareArea
        },
        triangle: function () {
            this.triangleArea = 0.5 * this.tBase * this.tHeight;
            return this.triangleArea
        },
        circle: function () {
            this.circleArea = this.pie * (this.cRadius * this.cRadius);
            return this.circleArea
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
