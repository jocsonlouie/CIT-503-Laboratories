<template>
    <div>
        <v-card color="white pa-4 mb-4">
            <v-list-item three-line>
                <v-list-item-content>
                    <v-img src="https://www.tip.edu.ph/assets/Uploads/TIP-INFORMAL-LOGO-04-2.png" aspect-ratio="1"
                        width="150px">
                    </v-img>
                    <div class="headline mb-2">
                        TIP
                    </div>

                    <v-list-item-title class="text-h5 mb-1">
                        Technological Institute of the Philippines
                    </v-list-item-title>

                    <v-list-item-subtitle class="mb-5">The Technological Institute of the Philippines (T.I.P.) is one of
                        the
                        country’s premier technological, engineering, and computing higher educational institutions. It
                        is a
                        private non-sectarian stock school founded on February 8, 1962 by a group of educators headed by
                        Engineer Demetrio A. Quirino, Jr. and Dr. Teresita U. Quirino. Using an outcomes-based
                        educational
                        model with its locally and globally accredited programs, T.I.P. allows students to acquire
                        industry-desired qualities and essential experiences that better equip them to be effective as
                        soon as
                        they enter the workforce or set up their own business.
                    </v-list-item-subtitle>

                    <v-card-actions>
                        <v-btn outlined rounded href="https://www.tip.edu.ph/" target="_blank">
                            Go to TIP 🎓
                        </v-btn>
                    </v-card-actions>
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
