import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home')
    },
    {
        path: '/simple-calculator',
        name: 'calculator',
        component: () => import('../views/SimpleCalculator')
    },
    {
        path: '/midterm-lab-1',
        name: 'midterm-lab-1',
        component: () => import('../views/MidtermLab1')
    },
    {
        path: '/midterm-lab-2',
        name: 'midterm-lab-2',
        component: () => import('../views/MidtermLab2')
    },
    {
        path: '/midterm-project',
        name: 'midterm-project',
        component: () => import('../views/MidtermProject')
    },
    {
        path: '/vuetify',
        name: 'vuetify',
        component: () => import('../views/VuetifyResearch')
    },
    {
        path: '/composition-api',
        name: 'api',
        component: () => import('../views/CompositionApi')
    },
    {
        path: '/string-manipulation',
        name: 'string-manipulation',
        component: () => import('../views/StringManipulation/Layout'),
        children: [
            {
                path: 'string-to-uppercase',
                name: 'string-manipulation.string-to-uppercase',
                component: () => import('../views/StringManipulation/StringToUppercase')
            },
            {
                path: 'vowel-count',
                name: 'string-manipulation.vowel-count',
                component: () => import('../views/StringManipulation/VowelCount')
            },
            {
                path: 'vowel-convert',
                name: 'string-manipulation.vowel-convert',
                component: () => import('../views/StringManipulation/VowelConvert')
            },
            {
                path: 'consonants-to-uppercase',
                name: 'string-manipulation.consonants-to-uppercase',
                component: () => import('../views/StringManipulation/ConsonantsToUppercase')
            },
            {
                path: 'count-numbers',
                name: 'string-manipulation.count-numbers',
                component: () => import('../views/StringManipulation/CountNumbers')
            },
            {
                path: 'count-consonants',
                name: 'string-manipulation.count-consonants',
                component: () => import('../views/StringManipulation/CountConsonants')
            }
        ]
    },
    {
        path: '/personal-life',
        name: 'personal-life',
        component: () => import('../views/PersonalLife/Layout'),
        children: [
            {
                path: 'get-to-know-me',
                name: 'personal-life.get-to-know-me',
                component: () => import('../views/PersonalLife/GetToKnowMe')
            },
            {
                path: 'programming-skills',
                name: 'personal-life.programming-skills',
                component: () => import('../views/PersonalLife/ProgrammingSkills')
            },
            {
                path: 'my-program',
                name: 'personal-life.my-program',
                component: () => import('../views/PersonalLife/MyProgram')
            },
            {
                path: 'my-school',
                name: 'personal-life.my-school',
                component: () => import('../views/PersonalLife/MySchool')
            }
        ]
    }
]

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
