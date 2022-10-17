<template>
    <div>
        <v-card color="white pa-4 mb-4">
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="headline mb-2">
                        My Program
                    </div>
                    <v-list-item-title class="text-h5 mb-1">
                        BS Information Technology (BSIT)
                    </v-list-item-title>
                    <v-list-item-subtitle class="mb-5">Designed to provide a broad understanding of information and
                        communication
                        technology, our BSIT program delivers an innovative education that equips students with
                        practical
                        knowledge and real-life skills to adapt in a rapidly evolving ICT-driven world.
                    </v-list-item-subtitle>
                    <ul>
                        <li>• Cloud Computing

                        </li>
                        <li>• Data Science and Analytics
                        </li>
                        <li>• Cybersecurity

                        </li>
                        <li>• Mobile and Web Development

                        </li>
                        <li>• Software Development

                        </li>
                        <li>• User Experience (UX) Design
                        </li>
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
