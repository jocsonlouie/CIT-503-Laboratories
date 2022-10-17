<template>
    <div>
        <v-card color="white pa-4 mb-4">
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="headline mb-2">
                        Areas of Expertise
                    </div>
                    <v-list-item-title class="text-h5 mb-1">
                        Here are my known area of expertise:
                    </v-list-item-title>
                    <ul>
                        <li>• Hands-on Web development experience
                        </li>
                        <li>• Java, JavaScript, PHP and Python experience</li>
                        <li>• Working knowledge of C, React and Vue
                        </li>
                        <li>• UI/UX designer
                        </li>
                        <li>• Wireframing & Prototyping
                        </li>
                        <li>• Figma, Adobe Suite</li>
                    </ul>
                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
            </v-list-item>
        </v-card>
        <v-card color="white pa-4 mb-4">
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
                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2} ma-2 pa-2`">
                            <v-img :src="item.link" :class="item.color" height="250px" contain>
                            </v-img>

                        </v-card>
                    </v-hover>
                </v-flex>
            </v-layout>
        </v-card>

    </div>
</template>

<script>
export default {
    name: 'StringToUppercase',
    data() {
        return {
            enterText: '',
            convertToUppercase: '',
            links: [
                {
                    id: '1',
                    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
                },
                {
                    id: '2',
                    link: 'https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png'
                },
                {
                    id: '3',
                    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png'
                },
                {
                    id: '4',
                    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/2560px-Python_logo_and_wordmark.svg.png'
                }
            ]
        }
    },
    methods: {
        compute: function () {

            this.convertToUppercase = this.enterText.toUpperCase();

        }
    },
}
</script>

<style scoped>
.flexin {
    display: flex;
}
</style>