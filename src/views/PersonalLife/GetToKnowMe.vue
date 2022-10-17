<template>
    <div>
        <v-card color="white pa-4 mb-4">
            <v-list-item three-line>
                <v-list-item-content>
                    <v-img
                        src="https://tip.instructure.com/images/thumbnails/5109348/bMSoK1QgncEUKJ2uM3pCU0t4Ij5PQfK36CRAnDNM"
                        aspect-ratio="1" width="80px" class="mb-3">
                    </v-img>
                    <div class="headline mb-2">
                        Personal Profile
                    </div>
                    <v-list-item-title class="text-h5 mb-1">
                        My name is Louie B. Jocson
                    </v-list-item-title>
                    <v-list-item-subtitle>An Information Technology (BSIT) student with hands-on experience in creating,
                        designing and developing a website including E-commerce.</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
            </v-list-item>
        </v-card>
        <v-card color="white pa-4 mb-4">
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="headline mb-2">
                        Location
                    </div>

                    <v-list-item-subtitle>I am currently living here from Navotas, Metro Manila. Navotas City has been
                        known
                        as the Fishing Capital of the Philippines with its population deriving their livelihood.
                    </v-list-item-subtitle>

                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
            </v-list-item>
        </v-card>
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
    </div>
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
