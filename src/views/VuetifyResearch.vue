<template>
    <div>
        <v-toolbar dense color="primary" dark extended extension-height="300" flat>
            <v-toolbar-title class="mx-auto" slot="extension">
                <span class="text-uppercase">research</span>
                <h2>Vuetify Vue UI Library</h2>
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
                                    <h2 class="headline">Explore Vuetify</h2>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap>
                                <v-flex sm12>
                                    <span class="font-weight-bold">What is Vuetify?</span>
                                    <div>Vuetify is a complete UI framework built on top of Vue.js. The goal of the
                                        project is to provide developers with the tools they need to build rich and
                                        engaging user experiences. Unlike other frameworks, Vuetify is designed from the
                                        ground up to be easy to learn and rewarding to master with hundreds of carefully
                                        crafted components from the Material Design specification.
                                        <br><br>
                                        Vuetify takes a mobile first approach to design which means your application
                                        just works out of the box—whether it’s on a phone, tablet, or desktop computer.

                                    </div>
                                    <!-- <v-btn x-large color="primary mb-4" @click="compute"> Compute Values</v-btn> -->
                                </v-flex>
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
                                                <v-btn flat color="primary" :href="item.link">Get started</v-btn>
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
                    title: 'Documentation',
                    description: 'Get started with Vuetify, the world’s most popular Vue.js framework for building feature rich, blazing fast applications.',
                    color: 'orange',
                    link: 'https://vuetifyjs.com/en/getting-started/installation/'
                },
                {
                    id: '2',
                    title: 'Why Vuetify?',
                    description: 'Since its initial release in 2014, Vue.js has grown to be one of the most popular JavaScript frameworks in the world.',
                    color: 'teal',
                    link: 'https://vuetifyjs.com/en/introduction/why-vuetify/'
                },
                // {
                //     id: '3',
                //     title: 'Notifications',
                //     description: 'Manage your notification campaigns and send messages to reach the right users at the right time',
                //     color: 'blue'
                // },
                // {
                //     id: '4',
                //     title: 'Authentification',
                //     description: 'Authenticate and manage users from a variety of providers without server-side-code',
                //     color: 'purple'
                // }
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
    margin-top: -64px;
}

.learn-more-btn {
    text-transform: initial;
    text-decoration: underline;
}
</style>
