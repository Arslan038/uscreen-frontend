<template>
    <div class="faq">
        <div class="row">
            <div class="col-12">
                <Breadcrumb :items="items" class="px-5" />
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 text-center text-gray">
                <h4 class="text-head"><strong>Frequently Asked Questions</strong></h4>
                <p class="px-5 pt-3">Lorem ipsum dummy text Lorem ipsum dummy text Lorem ipsum dummy text Lorem ipsum dummy text Lorem ipsum dummy text Lorem ipsum dummy text Lorem ipsum dummy text <br> Lorem ipsum dummy text Lorem ipsum dummy text Lorem ipsum dummy text Lorem ipsum dummy text Lorem ipsum dummy text Lorem ipsum dummy text <br> Lorem ipsum dummy text Lorem ipsum dummy text </p>
                <h5 class="mt-5 text-head"><strong>General Questions</strong></h5>
            </div>
        </div>

        <div class="row mt-3 mx-5 px-5">
            <div class="col-md-12">
                <div class="question">
                    <i :class="q1 ? 'fa fa-minus plus' : 'fa fa-plus plus'" @click="q1 = !q1"></i> <span class="ml-3 question-text text-head">How can I get a quote?</span>
                    <b-collapse v-model="q1">
                        <b-card class="pl-5 ml-2 text-head">
                            <p class="answer">Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.</p>
                        </b-card>
                    </b-collapse>
                </div>
            </div>
        </div>
        <div class="row mt-3 mx-5 px-5">
            <div class="col-md-12">
                <div class="question">
                    <i :class="q2 ? 'fa fa-minus plus' : 'fa fa-plus plus'" @click="q2 = !q2"></i> <span class="ml-3 question-text text-head">Am I charged the full quoted amount even if it doesn't take that long to clean my house?</span>
                    <b-collapse v-model="q2">
                        <b-card class="pl-5 ml-2 text-head">
                            <p class="answer">Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.</p>
                        </b-card>
                    </b-collapse>
                </div>
            </div>
        </div>
        <div class="row mt-3 mx-5 px-5">
            <div class="col-md-12">
                <div class="question">
                    <i :class="q3 ? 'fa fa-minus plus' : 'fa fa-plus plus'" @click="q3 = !q3"></i> <span class="ml-3 question-text text-head">Does someone have to visit my house before i can book a cleaning?</span>
                    <b-collapse v-model="q3">
                        <b-card class="pl-5 ml-2 text-head">
                            <p class="answer">Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.</p>
                        </b-card>
                    </b-collapse>
                </div>
            </div>
        </div>
        <div class="row mt-3 mx-5 px-5">
            <div class="col-md-12">
                <div class="question">
                    <i :class="q4 ? 'fa fa-minus plus' : 'fa fa-plus plus'" @click="q4 = !q4"></i> <span class="ml-3 question-text text-head">Are cleaning supplies included?</span>
                    <b-collapse v-model="q4">
                        <b-card class="pl-5 ml-2 text-head">
                            <p class="answer">Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.</p>
                        </b-card>
                    </b-collapse>
                </div>
            </div>
        </div>
        <div class="row mt-3 mx-5 px-5">
            <div class="col-md-12">
                <div class="question">
                    <i :class="q5 ? 'fa fa-minus plus' : 'fa fa-plus plus'" @click="q5 = !q5"></i> <span class="ml-3 question-text text-head">What if I'm not happy with cleaning?</span>
                    <b-collapse v-model="q5">
                        <b-card class="pl-5 ml-2 text-head">
                            <p class="answer">Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.</p>
                        </b-card>
                    </b-collapse>
                </div>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-12 text-center text-head">
                <h5><strong>I'm an Employer Requestor</strong></h5>
            </div>
        </div>

        <div class="row mt-3 mx-5 px-5">
            <div class="col-md-12">
                <div class="question">
                    <i :class="q6 ? 'fa fa-minus plus' : 'fa fa-plus plus'" @click="q6 = !q6"></i> <span class="ml-3 question-text text-head">Can I get a same-day booking?</span>
                    <b-collapse v-model="q6">
                        <b-card class="pl-5 ml-2 text-head">
                            <p class="answer">Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.</p>
                        </b-card>
                    </b-collapse>
                </div>
            </div>
        </div>

        <div class="row mt-3 mx-5 px-5">
            <div class="col-md-12">
                <div class="question">
                    <i :class="q7 ? 'fa fa-minus plus' : 'fa fa-plus plus'" @click="q7 = !q7"></i> <span class="ml-3 question-text text-head">Do I have to be home for cleaning?</span>
                    <b-collapse v-model="q7">
                        <b-card class="pl-5 ml-2 text-head">
                            <p class="answer">Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.</p>
                        </b-card>
                    </b-collapse>
                </div>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-12 text-center text-head">
                <h5><strong>I'm an Individual Requestor</strong></h5>
            </div>
        </div>

        <div class="row mt-3 mx-5 px-5">
            <div class="col-md-12">
                <div class="question">
                    <i :class="q8 ? 'fa fa-minus plus' : 'fa fa-plus plus'" @click="q8 = !q8"></i> <span class="ml-3 question-text text-head">Can I get a same-day booking?</span>
                    <b-collapse v-model="q8">
                        <b-card class="pl-5 ml-2 text-head">
                            <p class="answer">Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.</p>
                        </b-card>
                    </b-collapse>
                </div>
            </div>
        </div>

        <div class="row mt-3 mx-5 px-5 mb-5">
            <div class="col-md-12">
                <div class="question">
                    <i :class="q9 ? 'fa fa-minus plus' : 'fa fa-plus plus'" @click="q9 = !q9"></i> <span class="ml-3 question-text text-head">Do I have to be home for cleaning?</span>
                    <b-collapse v-model="q9">
                        <b-card class="pl-5 ml-2 text-head">
                            <p class="answer">Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.</p>
                        </b-card>
                    </b-collapse>
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
    data() {
        return {
            items: [
                {
                    text: 'Home',
                    active: false,
                    to: '/'
                },
                {
                    text: 'FAQ',
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
</style>