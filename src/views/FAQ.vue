<template>
    <div class="faq" style="margin-bottom: 100px">
        <div class="row">
            <div class="col-12">
                <Breadcrumb :items="items" />
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 text-center text-gray">
                <h4 class="text-head px-5"><strong>Frequently Asked Questions</strong></h4>
                <!-- <p class="px-5 pt-3">Lorem ipsum dummy text Lorem ipsum dummy text Lorem ipsum dummy text Lorem ipsum dummy text Lorem ipsum dummy text Lorem ipsum dummy text Lorem ipsum dummy text <br> Lorem ipsum dummy text Lorem ipsum dummy text Lorem ipsum dummy text Lorem ipsum dummy text Lorem ipsum dummy text Lorem ipsum dummy text <br> Lorem ipsum dummy text Lorem ipsum dummy text </p> -->
                <h5 class="mt-5 text-head"><strong>General Questions</strong></h5>
            </div>
        </div>
        <div class="container">
            <div class="row mt-3">
                <div class="col-md-12">
                    <div class="question">
                        <div @click="q1 = !q1">
                            <i :class="q1 ? 'fa fa-minus plus' : 'fa fa-plus plus'"></i>
                            <span class="ml-3 question-text text-head">
                            What is UScreen?
                            </span>
                        </div>
                        <b-collapse v-model="q1">
                            <b-card class="pl-md-5 pl-4 ml-2 text-head">
                                <p class="answer">
                                Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.
                                </p>
                            </b-card>
                        </b-collapse>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12">
                    <div class="question">
                        <div @click="q2 = !q2">
                            <i :class="q2 ? 'fa fa-minus plus' : 'fa fa-plus plus'"></i>
                            <span class="ml-3 question-text text-head">
                            I have more questions, who should I contact?
                            </span>
                        </div>
                        <b-collapse v-model="q2">
                            <b-card class="pl-md-5 pl-4 ml-2 text-head">
                                <p class="answer">
                                Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.
                                </p>
                            </b-card>
                        </b-collapse>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12">
                    <div class="question">
                        <div @click="q3 = !q3">
                            <i :class="q3 ? 'fa fa-minus plus' : 'fa fa-plus plus'"></i>
                            <span class="ml-3 question-text text-head">
                            How do I order a background check on myself?
                            </span>
                        </div>
                        <b-collapse v-model="q3">
                            <b-card class="pl-md-5 pl-4 ml-2 text-head">
                                <p class="answer">
                                Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.
                                </p>
                            </b-card>
                        </b-collapse>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12">
                    <div class="question">
                        <div @click="q4 = !q4">
                            <i :class="q4 ? 'fa fa-minus plus' : 'fa fa-plus plus'"></i>
                            <span class="ml-3 question-text text-head">
                            How do I order a background check for an employee?
                            </span>
                        </div>
                        <b-collapse v-model="q4">
                            <b-card class="pl-md-5 pl-4 ml-2 text-head">
                                <p class="answer">
                                Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.
                                </p>
                            </b-card>
                        </b-collapse>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12">
                    <div class="question">
                        <div @click="q5 = !q5">
                            <i :class="q5 ? 'fa fa-minus plus' : 'fa fa-plus plus'"></i>
                            <span class="ml-3 question-text text-head">
                            How does the background check process work?
                            </span>
                        </div>
                        <b-collapse v-model="q5">
                            <b-card class="pl-md-5 pl-4 ml-2 text-head">
                                <p class="answer">
                                Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.
                                </p>
                            </b-card>
                        </b-collapse>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12">
                    <div class="question">
                        <div @click="q6 = !q6">
                            <i :class="q6 ? 'fa fa-minus plus' : 'fa fa-plus plus'"></i>
                            <span class="ml-3 question-text text-head">
                            How do I change my details on my account?
                            </span>
                        </div>
                        <b-collapse v-model="q6">
                            <b-card class="pl-md-5 pl-4 ml-2 text-head">
                                <p class="answer">
                                Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.
                                </p>
                            </b-card>
                        </b-collapse>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12">
                    <div class="question">
                        <div @click="q7 = !q7">
                            <i :class="q7 ? 'fa fa-minus plus' : 'fa fa-plus plus'"></i>
                            <span class="ml-3 question-text text-head">
                            What is included in the background check report?
                            </span>
                        </div>
                        <b-collapse v-model="q7">
                            <b-card class="pl-md-5 pl-4 ml-2 text-head">
                                <p class="answer">
                                Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.
                                </p>
                            </b-card>
                        </b-collapse>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12">
                    <div class="question">
                        <div @click="q8 = !q8">
                            <i :class="q8 ? 'fa fa-minus plus' : 'fa fa-plus plus'"></i>
                            <span class="ml-3 question-text text-head">
                            What packages are available for me to order?
                            </span>
                        </div>
                        <b-collapse v-model="q8">
                            <b-card class="pl-md-5 pl-4 ml-2 text-head">
                                <p class="answer">
                                Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.
                                </p>
                            </b-card>
                        </b-collapse>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div class="row mt-4">
            <div class="col-12 text-center text-head">
                <h5><strong>I'm an Employer Requestor</strong></h5>
            </div>
        </div>
        <div class="container">
            <div class="row mt-3 ">
                <div class="col-md-12">
                    <div class="question">
                        <div @click="q9 = !q9">
                            <i :class="q9 ? 'fa fa-minus plus' : 'fa fa-plus plus'"></i>
                            <span class="ml-3 question-text text-head">
                            What package should I order?
                            </span>
                        </div>
                        <b-collapse v-model="q9">
                            <b-card class="pl-md-5 pl-4 ml-2 text-head">
                                <p class="answer">
                                Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.
                                </p>
                            </b-card>
                        </b-collapse>
                    </div>
                </div>
            </div>
            <div class="row mt-3 ">
                <div class="col-md-12">
                    <div class="question">
                        <div @click="q10 = !q10">
                            <i :class="q10 ? 'fa fa-minus plus' : 'fa fa-plus plus'"></i>
                            <span class="ml-3 question-text text-head">
                            How do I view my order?
                            </span>
                        </div>
                        <b-collapse v-model="q10">
                            <b-card class="pl-md-5 pl-4 ml-2 text-head">
                                <p class="answer">
                                Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.
                                </p>
                            </b-card>
                        </b-collapse>
                    </div>
                </div>
            </div>
            <div class="row mt-3 ">
                <div class="col-md-12">
                    <div class="question">
                        <div @click="q11 = !q11">
                            <i :class="q11 ? 'fa fa-minus plus' : 'fa fa-plus plus'"></i>
                            <span class="ml-3 question-text text-head">
                            How do I view my invoice?
                            </span>
                        </div>
                        <b-collapse v-model="q11">
                            <b-card class="pl-md-5 pl-4 ml-2 text-head">
                                <p class="answer">
                                Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.
                                </p>
                            </b-card>
                        </b-collapse>
                    </div>
                </div>
            </div>
            <div class="row mt-3 ">
                <div class="col-md-12">
                    <div class="question">
                        <div @click="q12 = !q12">
                            <i :class="q12 ? 'fa fa-minus plus' : 'fa fa-plus plus'"></i>
                            <span class="ml-3 question-text text-head">
                            I made a mistake on the order. How do I change it?
                            </span>
                        </div>
                        <b-collapse v-model="q12">
                            <b-card class="pl-md-5 pl-4 ml-2 text-head">
                                <p class="answer">
                                Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.
                                </p>
                            </b-card>
                        </b-collapse>
                    </div>
                </div>
            </div>
            <div class="row mt-3 ">
                <div class="col-md-12">
                    <div class="question">
                        <div @click="q13 = !q13">
                            <i :class="q13 ? 'fa fa-minus plus' : 'fa fa-plus plus'"></i>
                            <span class="ml-3 question-text text-head">
                            I need to order multiple screens at once, what do I do?
                            </span>
                        </div>
                        <b-collapse v-model="q13">
                            <b-card class="pl-md-5 pl-4 ml-2 text-head">
                                <p class="answer">
                                Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.
                                </p>
                            </b-card>
                        </b-collapse>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-12 text-center text-head">
                <h5><strong>I'm an Individual Requestor</strong></h5>
            </div>
        </div>

        <div class="container">
        <div class="row mt-3 ">
            <div class="col-md-12">
                <div class="question">
                    <div @click="q14 = !q14">
                        <i :class="q14 ? 'fa fa-minus plus' : 'fa fa-plus plus'"></i>
                        <span class="ml-3 question-text text-head">
                        What package should I order?
                        </span>
                    </div>
                    <b-collapse v-model="q14">
                        <b-card class="pl-md-5 pl-4 ml-2 text-head">
                            <p class="answer">
                            Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.
                            </p>
                        </b-card>
                    </b-collapse>
                </div>
            </div>
        </div>
        <div class="row mt-3 ">
            <div class="col-md-12">
                <div class="question">
                    <div @click="q15 = !q15">
                        <i :class="q15 ? 'fa fa-minus plus' : 'fa fa-plus plus'"></i>
                        <span class="ml-3 question-text text-head">
                        I made a mistake on the order. How do I change it?
                        </span>
                    </div>
                    <b-collapse v-model="q15">
                        <b-card class="pl-md-5 pl-4 ml-2 text-head">
                            <p class="answer">
                            Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.
                            </p>
                        </b-card>
                    </b-collapse>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
export default {
    name: "FAQ",
    components: {
        Breadcrumb
    },
    created() {
        window.scrollTo(0,0)
    },
    data() {
        return {
            items: [
                {
                    text: 'Home',
                    active: false,
                    to: '/'
                },
                {
                    text: 'FAQs',
                    active: true,
                    to: '/faq'
                }
            ],
            q1: false,
            q2: false,
            q3: false,
            q4: false,
            q5: false,
            q6: false,
            q7: false,
            q8: false,
            q9: false,
            q10: false,
            q11: false,
            q12: false,
            q13: false,
            q14: false,
            q15: false,
        }
    }
}
</script>

<style scoped>
    .plus {
        color: #339df3 !important;
        padding: 18px;
        border: 2px solid #339df3 !important;
        border-radius: 50%;
        z-index: 2;
        cursor: pointer;
    }
    .question-text {
        font-size: 18px;
        font-weight: bold;
    }
    .answer {
        z-index: 1;
        padding-top: -25px;
    }

    @media screen and (max-width: 600px) {
        .question-text {
            font-size: 11px;
            font-weight: bold;
        }
        .plus {
        color: #339df3 !important;
        padding: 9px;
        border: 2px solid #339df3 !important;
        border-radius: 50%;
        z-index: 2;
        cursor: pointer;
    }
    }
</style>