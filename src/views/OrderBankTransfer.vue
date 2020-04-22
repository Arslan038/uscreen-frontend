<template>
    <div class="bank-transfer">
        <div class="row">
            <div class="col-12">
                <Breadcrumb :items="items" class="px-5" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 offset-md-4 col-12 text-center text-gray mt-5">
                <h4 class="mb-4 mt-3 text-head"><strong>Thank you. Your order has been received.</strong></h4>
                <hr>
                <p>Lorem ipsum dummy text as it is. Lorem ipsum dummy text as it is Lorem ipsum dummy text as it is Lorem ipsum dummy text as it is Lorem ipsum dummy text as it is Lorem ipsum dummy text as it is Lorem ipsum dummy text as it is Lorem ipsum dummy text as it is Lorem ipsum dummy text as it is</p>
                <button class="btn btn-primary mt-3">Download Invoice</button> <br>
                <button class="btn btn-secondary mt-3 mb-5" @click="home">Home</button>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
export default {
    name: "OrderBankTransfer",
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
                    text: 'Order Form',
                    active: false,
                    to: '/employer-order'
                },
                {
                    text: 'Order Confirmation',
                    active: true,
                    to: '/order-confirmation'
                }
            ],
        }
    },
    methods: {
        home() {
            this.$router.push({path: '/'})
        }
    }
}
</script>

<style>
.btn {
    min-width: 150px !important;
    padding: 5px 10px !important;
}
</style>