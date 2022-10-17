<template>
    <div>
        <v-toolbar dense color="primary" dark extended extension-height="300" flat>
            <v-toolbar-title class="mx-auto" slot="extension">
                <span class="text-uppercase">research</span>
                <h2>Composition API</h2>
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
                                    <h2 class="headline">Composition API</h2>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap>
                                <v-flex sm12>
                                    <span class="font-weight-bold">What is Composition API?</span>
                                    <div>
                                        Composition API is a set of APIs that allows us to author Vue components using
                                        imported functions instead of declaring options. It is an umbrella term that
                                        covers the following APIs:
                                    </div>
                                    <br>
                                    <div>
                                        Lifecycle Hooks, e.g. onMounted() and onUnmounted(), that allow us to
                                        programmatically hook into the component lifecycle.
                                    </div>
                                    <br>
                                    <div>
                                        Dependency Injection, i.e. provide() and inject(), that allow us to leverage
                                        Vue's dependency injection system while using Reactivity APIs.
                                    </div>
                                    <br>
                                    <div>
                                        Composition API is a built-in feature of Vue 3 and Vue 2.7. For older Vue 2
                                        versions, use the officially maintained @vue/composition-api plugin. In Vue 3,
                                        it is also primarily used together with the script setup syntax in Single-File
                                        Components.
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
                    description: 'Composition API is a set of APIs that allows us to author Vue components using imported functions instead of declaring options.',
                    color: 'purple',
                    link: 'https://vuejs.org/guide/extras/composition-api-faq.html#what-is-composition-api'
                },
                {
                    id: '2',
                    title: 'Why Composition API?',
                    description: 'It solves all the drawbacks of mixins, the primary logic reuse mechanism for Options API. Better Logic Reuse and More Flexible Code Organization',
                    color: 'indigo',
                    link: 'https://vuejs.org/guide/extras/composition-api-faq.html#better-logic-reuse'
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
