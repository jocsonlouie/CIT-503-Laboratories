<template>
    <div>
        <v-toolbar dense color="primary" dark extended extension-height="300" flat>
            <v-toolbar-title class="mx-auto" slot="extension">
                <span>Welcome to my application</span>
                <h2>Laboratory Compilation</h2>
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
                        <v-container fluid grid-list-lg>
                            <v-layout row wrap>
                                <v-flex xs12>
                                    <h2 class="white--text">Explore my application</h2>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap>
                                <v-flex xs12 sm6 md6 lg6 v-for="item in links" :key="item.id">
                                    <v-hover>
                                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                                            <v-img src="" aspect-ratio="2.75" height="125px" :class="item.color">
                                            </v-img>

                                            <v-card-title primary-title>
                                                <div>
                                                    <h3 class="headline mb-0">{{item.title}}</h3>
                                                    <div>
                                                        {{item.description}}
                                                    </div>
                                                </div>
                                            </v-card-title>

                                            <v-card-actions>

                                                <v-btn flat color="primary" :to="item.link">Explore</v-btn>
                                            </v-card-actions>
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
            links: [
                {
                    id: '1',
                    title: 'Simple Calculator',
                    description: 'Explore my simple calculator activity.',
                    color: 'orange',
                    link: "/simple-calculator"
                },
                {
                    id: '2',
                    title: 'String Manipulation',
                    description: 'Explore my string manipulation laboratory.',
                    color: 'teal',
                    link: '/string-manipulation/string-to-uppercase'
                },
                {
                    id: '3',
                    title: 'Vuetify',
                    description: 'Explore my research on the vuetify.',
                    color: 'blue',
                    link: "/vuetify"
                },
                {
                    id: '4',
                    title: 'Composition API',
                    description: 'Explore my research on the composition api',
                    color: 'purple',
                    link: '/composition-api'
                }
            ]
        }
    }
}
</script>

<style scoped>
.outine-2 {
    border: 2px solid white;
}

.card--flex-toolbar {
    margin-top: -124px;
}

.learn-more-btn {
    text-transform: initial;
    text-decoration: underline;
}
</style>
