<template>
    <div class="wrap">
        <v-snackbar v-model="snackbar" outlined :color="result" :timeout="1000" tile class="mb-4 text-center">
            <v-layout align-center pr-4>
                <v-icon class="pr-3" dark large>{{ icon }}</v-icon>
                <div>{{ message }}</div>
            </v-layout>


        </v-snackbar>
        <v-dialog v-model="dialog" persistent max-width="500">

            <v-card color="white pa-3 ">
                <v-card-title class="headline pa-0 mb-2 ">
                    <v-layout row class="mb-2">
                        <v-flex xs12>
                            <v-chip block color="error white--text text-uppercase">
                                highscore on this device:
                                {{ highestscore
                                }}
                            </v-chip>
                        </v-flex>
                    </v-layout>
                    <v-flex xs12>
                        <span>Welcome to Otaku Quiz! 🎌</span>
                    </v-flex>


                </v-card-title>
                <v-card-text class="pa-0 mb-4">Take this quiz to see what % you are of an Otaku! The world is going to
                    be
                    destroyed
                    and you have twenty second before it will blow up!<br>

                </v-card-text>
                <v-card-actions class="pa-0">
                    <v-spacer></v-spacer>
                    <v-btn class=" mr-3" outline text to="/" flat>
                        cancel
                    </v-btn>
                    <v-btn class="error" text @click="fetchQuestionsFromServer" flat>
                        Start
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="passed" persistent max-width="450">

            <v-card color="white pa-3 ">
                <small class="text-uppercase">Score: {{ score }}/10</small>
                <v-card-title class="headline pa-0 mb-2 ">
                    Congratulations! 🎉🎌
                </v-card-title>
                <v-img contain src="https://i.ibb.co/sRSNPQm/certificate-dl.jpg"></v-img>
                <v-card-text class="pa-0 mb-4 mt-3">You have proven your knowledge and expertise! Here is your
                    certificate
                    which you deserve!</v-card-text>
                <v-card-actions class="pa-0">
                    <v-spacer></v-spacer>
                    <v-btn class=" mr-3" outline text @click="reload" flat>
                        Restart Quiz
                    </v-btn>
                    <v-btn class="error" text href="https://i.ibb.co/sRSNPQm/certificate-dl.jpg" flat target="_blank">
                        Download Certificate
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="failed" persistent max-width="450">

            <v-card color="white pa-3 ">
                <small class="text-uppercase">Score: {{ score }}/10</small>
                <v-card-title class="headline pa-0 mb-2 ">
                    Nice try! 🙌🏼
                </v-card-title>
                <v-img contain src="https://i.ibb.co/tbkb1J3/koro-sensei.gif"></v-img>
                <v-card-text class="pa-0 mb-4 mt-3">
                    “The difference between a novice and a master is that a master has failed
                    more times than a novice had tried.” – Koro-Sensei
                </v-card-text>
                <v-card-actions class="pa-0">
                    <v-spacer></v-spacer>

                    <v-btn class="error" text @click="reload" flat>
                        Seek revenge!
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <img src="https://i.ibb.co/wJyKF6L/v1012-bg-03b.jpg" width="100%" class="bg3">
        <img src="https://i.ibb.co/wJyKF6L/v1012-bg-03b.jpg" width="100%" class="bg2" :hidden="!show">
        <v-toolbar dense dark extended extension-height="300" flat class="black">
            <img src="https://i.ibb.co/YbGBWX7/otaku-bg.jpg" width="100%" class="toolbar-bg">
            <v-toolbar-title class="mx-auto" slot="extension" style="text-align: center;">
                <span class="text-center">Midterm Project</span>
                <h2 class="text-center">Otaku Quiz 🎌 </h2>
                <p class="mb-4">アニメクイズ <br>
                    <small>API from
                        <a href="https://opentdb.com/api_config.php"> Open
                            Trivia
                            DB
                        </a>
                    </small>
                </p>
                <span style="margin-bottom: 12px;"></span>
                <v-layout row>
                    <v-flex wrap class="mr-4">
                        <p><b>Question</b></p>
                        <span>{{ questionCounter }}/10</span>
                    </v-flex>
                    <v-flex wrap class="mr-4">
                        <p><b>Difficulty</b></p>
                        <span class="text-uppercase">{{ currentQuestion.difficulty }}</span>
                    </v-flex>

                    <v-flex wrap class="mr-4">
                        <p><b>Score</b></p>
                        <p>{{ score }}/10</p>
                    </v-flex>

                </v-layout>


            </v-toolbar-title>
        </v-toolbar>

        <v-container fill-height class="mb-4 card--flex-toolbar ">
            <v-layout row>
                <v-flex xs12>
                    <v-progress-linear v-model="timer" color="error"></v-progress-linear>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container fill-height v-if="!show">

            <v-layout row>
                <v-flex xs12>
                    <v-card flat class="card--flex-toolbar cardz" color="transparent">
                        <v-container fluid grid-list-lg>
                            <v-layout row wrap>
                                <v-flex xs12 wrap>
                                    <!-- <a href="https://rapidapi.com/ajith/api/love-calculator/" target="_blank">Love
                                        Calculator
                                        API
                                    </a> -->
                                    <p class="text-uppercase white--text">Question</p>
                                    <h2 class="headline white--text" v-html="currentQuestion.question"></h2>

                                    <v-layout row wrap>
                                        <v-flex xs12 md6 :data-key="item"
                                            v-for="(choice, item) in currentQuestion.choices" :key="item"
                                            :ref="optionChosen" @click="onOptionClicked(choice, item)" :v-html="choice">
                                            <v-btn block class="" v-html="choice"></v-btn>
                                        </v-flex>
                                    </v-layout>

                                </v-flex>

                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script >
import axios from 'axios';

export default {

    data() {
        let questions = [];
        let itemsRef = [];
        const STORAGE_KEY = "highscores";
        let highestscore = localStorage.getItem(STORAGE_KEY);
        const optionChosen = (element) => {
            if (element) {
                itemsRef.push(element);
            }
        };

        const currentQuestion = {
            question: "",
            answer: 1,
            choices: [],
            difficulty: "",
        };

        return {
            value: 50,
            dialog: true,
            show: true,
            questions,
            currentQuestion,
            questionCounter: 0,
            timer: 100,
            score: 0,
            canClick: true,
            itemsRef,
            optionChosen,
            snackbar: false,
            message: 'Lorem ipsum dolor sit amet',
            result: 'success',
            icon: 'error',
            endOfQuiz: false,
            STORAGE_KEY,
            highestscore,
            passed: false,
            failed: false,

        }
    },
    mounted() {
        if (localStorage.getItem(this.STORAGE_KEY) == null) {
            localStorage.setItem(this.STORAGE_KEY, "0");
        } else {
            console.log(localStorage.getItem(this.STORAGE_KEY));
        }
    },

    methods: {

        fetchQuestionsFromServer: async function () {
            // quizStart.value = false;
            // quizLoader.value = true;
            try {
                // loader.value = false;
                const response = await axios.get(
                    "https://opentdb.com/api.php?amount=10&category=31&type=multiple"
                );
                // const data = await response.json();
                const newQuestions = response.data.results.map((serverQuestions) => {
                    const arrangedQuestion = {
                        question: serverQuestions.question,
                        choices: "",
                        answer: "",
                        difficulty: serverQuestions.difficulty,
                    };

                    const choices = serverQuestions.incorrect_answers;

                    arrangedQuestion.answer = Math.floor(Math.random() * 4 + 1);

                    choices.splice(
                        arrangedQuestion.answer - 1,
                        0,
                        serverQuestions.correct_answer
                    );
                    arrangedQuestion.choices = choices;

                    return arrangedQuestion;
                });

                this.questions = newQuestions;
                this.dialog = false;
                this.show = false;
                this.loadQuestion();
                this.countDownTimer();


            } catch (e) {
                console.error(e);
            }
        },

        loadQuestion() {
            this.canClick = true;
            if (this.questions.length > this.questionCounter) {
                //load
                this.timer = 100;
                this.currentQuestion = this.questions[this.questionCounter];
                console.log("current ques", this.currentQuestion.answer);
                this.questionCounter++;

            } else {
                this.endOfQuiz = true;
                if (this.score >= 8) {
                    this.show = true;
                    this.passed = true;
                } else {
                    this.show = true;
                    this.failed = true;
                }
                this.checkScore();
            }
        },

        onOptionClicked: function (choice, item) {
            if (this.canClick) {
                const optionID = item + 1;
                if (this.currentQuestion.answer == optionID) {
                    this.score += 1;

                    this.snackbar = true;
                    this.icon = "check_circle"
                    this.message = "Correct Answer!";
                    this.result = "success";
                } else {
                    this.snackbar = true;
                    this.message = "Wrong Answer.";
                    this.result = "error";
                }
                this.timer = 100;
                this.canClick = false;

                // go to next ques
                // clearSelected(divContainer);
                this.loadQuestion();
            } else {
                console.log("cant select");
            }
        },

        countDownTimer: function () {
            let interVal = setInterval(() => {
                if (this.timer > 0) {
                    this.timer--;
                } else {
                    if (this.questionCounter > 10) {
                        this.endOfQuiz.value = true;
                        if (this.score >= 8) {
                            this.show = true;
                            this.passed = true;
                        } else {
                            this.show = true;
                            this.failed = true;
                        }
                    } else {
                        this.loadQuestion();
                        this.countDownTimer();
                        clearInterval(interVal);
                    }
                }
            }, 100);
        },

        checkScore: function () {
            if (this.score > parseInt(localStorage.getItem(this.STORAGE_KEY))) {
                localStorage.setItem(this.STORAGE_KEY, this.score);
            }
        },

        reload: function () {
            this.$router.reload();
        }


    }


}

</script>

<style scoped>
.cardz {
    background-color: #00000040 !important;
    outline: 1px solid #ffffff33;
    backdrop-filter: blur(5px);
}

.bg2 {
    position: absolute;
    inset: 0;
    filter: grayscale(1) brightness(0.35);
    z-index: 2;
    transform: scale(1.4);
}

.bg3 {
    position: absolute;
    width: 100%;
    height: 50%;
    bottom: 0;
    filter: grayscale(1) brightness(0.35);
    z-index: 0;
    object-fit: cover;
}

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

p {
    margin-bottom: 0;
}

.toolbar-bg {
    width: 100vw;
    position: absolute;
    height: 100vh;
    position: absolute;
    z-index: -1;
    left: 0;
    object-fit: cover;
}

.wraps {
    background: url("https://i.ibb.co/k3z7p2V/v1012-bg-03b.jpg") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    z-index: 1;
}
</style>

<style>
.v-content__wrap {
    height: 100% !important;
}
</style>