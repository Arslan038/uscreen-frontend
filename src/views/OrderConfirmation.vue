<template>
    <div class="individual-order">
        <div class="row">
            <div class="col-12">
                <Breadcrumb :items="items" class="px-5" />
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 text-center">
                <h4><strong class="text-head">Order Confirmation</strong></h4>
            </div>
        </div>
        <div class="row my-5 mx-3">
            <div class="col-md-6 offset-md-2 col-12 mt-3">
                <div class="card shadow">
                    <div class="card-head pt-3">
                        <div class="row pl-5 pr-3 my-4">
                            <div class="col-8">
                                <h4 class=""><strong class="text-head">Order Information</strong></h4>
                            </div>
                            <div class="col-4 text-right">
                                <button class="btn btn-secondary">Need help?</button>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="card-body">
                        <div class="pl-5 pr-3 pt-3 mb-5">
                            <div class="row">
                                <div class="col-md-12 candidate">
                                    <p class="mb-4"><strong class="text-head">Candidate Information</strong></p>  
                                    <p class="text-gray">First Name: Eric</p>
                                    <p class="text-gray">Last Name: Poon</p>
                                    <p class="text-gray">Email: ericpoon@nextsoftech.com</p>
                                    <p class="text-gray">Mobile: +852 61116945</p>
                                </div>
                                 
                            </div>
                        </div>

                        <hr>

                        <div class="pl-5 pr-3 mb-5 pt-3">
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="mb-4"><strong class="text-head">Client Reference</strong></p>  
                                    <p class="text-gray">HK98736627</p>
                                    
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="pl-5 pr-3 mb-5 pt-3">
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="mb-4"><strong class="text-head">Country of Hire</strong></p>  
                                    <p class="text-gray">Hong Kong</p>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="pl-5 pr-3 mb-5 pt-3">
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="mb-4"><strong class="text-head">Requestor</strong></p>  
                                    <p class="text-gray">ABC Hong Kong Limited</p>
                                </div>
                            </div>
                        </div>
                        <hr>

                        <div class="pl-5 pr-3 mb-5 pt-3">
                            <div class="row">
                                <div class="col-md-6 col-6">
                                    <h4><strong class="text-head">Product</strong></h4>
                                </div>
                                <div class="col-md-6 col-6 text-right">
                                    <p class="text-head">Price (USD)</p>
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col-md-6 col-6">
                                    <p><strong class="text-blue">Bankruptcy Check</strong></p>
                                </div>
                                <div class="col-md-3 col-3">
                                    <p class="text-gray">Hong Kong</p>
                                </div>
                                <div class="col-md-3 col-3 text-right">
                                    <p class="text-blue"><strong>$80</strong></p>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6 col-6">
                                    <p><strong class="text-blue">Credit Check</strong></p>
                                </div>
                                <div class="col-md-3 col-3">
                                    <p class="text-gray">Hong Kong</p>
                                    <p class="text-gray">United Kingdom</p>
                                    <p class="text-gray">Australia</p>
                                    <p class="text-gray">Malaysia</p>
                                </div>
                                <div class="col-md-3 col-3 text-right">
                                    <p class="text-blue"><strong>$50</strong></p>
                                    <p class="text-blue"><strong>$50</strong></p>
                                    <p class="text-blue"><strong>$50</strong></p>
                                    <p class="text-blue"><strong>$50</strong></p>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6 col-6">
                                    <p><strong class="text-blue">Civi Litigation Check</strong></p>
                                </div>
                                <div class="col-md-3 col-3">
                                    <p class="text-gray">Hong Kong</p>
                                </div>
                                <div class="col-md-3 col-3 text-right">
                                    <p class="text-blue"><strong>$50</strong></p>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6 col-6">
                                    <p><strong class="text-blue">Criminal Check</strong></p>
                                </div>
                                <div class="col-md-3 col-3">
                                    <p class="text-gray">Hong Kong</p>
                                </div>
                                <div class="col-md-3 col-3 text-right">
                                    <p class="text-blue"><strong>$50</strong></p>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6 col-6">
                                    <p><strong class="text-blue">Global Sanctions</strong></p>
                                </div>
                                <div class="col-md-3 col-3">
                                    <p class="text-gray">Hong Kong</p>
                                </div>
                                <div class="col-md-3 col-3 text-right">
                                    <p class="text-blue"><strong>$50</strong></p>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6 col-6">
                                    <p><strong class="text-blue">Passport Check</strong></p>
                                </div>
                                <div class="col-md-3 col-3">
                                    <p class="text-gray">Hong Kong</p>
                                </div>
                                <div class="col-md-3 col-3 text-right">
                                    <p class="text-blue"><strong>$50</strong></p>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6 col-6">
                                    <p><strong class="text-blue">Global Media</strong></p>
                                </div>
                                <div class="col-md-3 col-3">
                                    <p class="text-gray">Hong Kong</p>
                                </div>
                                <div class="col-md-3 col-3 text-right">
                                    <p class="text-blue"><strong>$50</strong></p>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6 col-6">
                                    <p><strong class="text-blue">Education Check</strong></p>
                                </div>
                                <div class="col-md-3 col-3">
                                    <p class="text-gray">Hong Kong</p>
                                </div>
                                <div class="col-md-3 col-3 text-right">
                                    <p class="text-blue"><strong>$50</strong></p>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6 col-6">
                                    <p><strong class="text-blue">Wallet Balance</strong></p>
                                </div>
                                <div class="col-md-3 col-3">
                                </div>
                                <div class="col-md-3 col-3 text-right">
                                    <p class="text-blue"><strong>-$200</strong></p>
                                </div>
                            </div>

                            <div class="row mt-4">
                                <div class="col-md-6 col-6">
                                    <h4><strong class="text-head">Total:</strong></h4>
                                </div>
                                <div class="col-md-3 col-3">
                                </div>
                                <div class="col-md-3 col-3 text-right">
                                    <h4 class="text-head"><strong>$1000</strong></h4>
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col-md-12 text-center">
                                    <b-form-checkbox class="text-primary"> Terms and Conditions</b-form-checkbox>
                                </div>
                            </div>
                        </div>
                        <hr>

                        <div class="pl-5 pr-3 pt-3 mb-5">
                            <div class="row">
                                <div class="col-md-12">
                                    <h4><strong class="text-head">Payment</strong></h4>
                                </div>
                                <div class="col-md-6 col-12 mt-3">
                                    <p><strong class="text-blue">Option 1: Online Credit Card</strong></p>
                                </div>
                                <div class="col-md-6 col-12 mt-3">
                                    <button class="btn btn-primary btn-block" @click="payNow">Pay Online</button>
                                </div>
                                <div class="col-12 text-center mt-4">
                                    <h4><strong class="text-head">or</strong></h4>
                                </div>

                                <div class="col-md-6 col-12 mt-3 candidate">
                                    <p><strong class="text-blue">Option 2: Bank Transfer</strong></p>
                                    <p class="text-gray">Trans Ref no: xxxxxxxxxxxxxx</p>
                                    <p class="text-gray">Bank Details: xxxxxxxxxxxxxx</p>
                                    <p class="text-gray">xxxxxxxxxxxxxxx</p>
                                    <p class="text-gray">
                                        email Support: xxxx@FADV.com
                                    </p>
                                </div>
                                <div class="col-md-6 col-12 mt-3 align-self-end">
                                    <button class="btn btn-primary btn-block" @click="bankTransfer">Confirm Order with Bank Transfer</button>
                                </div>
                                <div class="col-12 text-center my-5">
                                    <h4><strong class="text-head">or</strong></h4>
                                </div>

                                <div class="col-md-6 col-12 mt-3">
                                    <p><strong class="text-blue">Option 3: Download Pro Forma Invoice and Pay Later</strong></p>
                                    
                                </div>
                                <div class="col-md-6 col-12 mt-3">
                                    <button class="btn btn-primary btn-block">Download Pro Forma Invoice</button>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-12 text-md-left text-center mt-3">
                <img src="../assets/Bitmaafsdgsp@2x.png" class="img-fluid" width="65%" alt="">
            </div>
        </div>

        <b-modal v-model="payModal" title="Pay Online" :hideFooter="true">
            <h4 class="text-blue  mb-3 text-center">Pay $1000 via Credit Card</h4>
            <i class="fa fa-user user"></i><input type="text" class="border-color form-control" placeholder="Name on card">
            <div ref="card" class="border-color"></div>
            <button class="btn btn-primary btn-block mt-3" >Pay Now</button>
       </b-modal>
    </div>
</template>

<script>
let stripe = Stripe(`pk_live_TKHBsoZN8lCilcpqwgy0HW2400916CYmD9`),
    elements = stripe.elements(),
    card = undefined;
import Breadcrumb from '@/components/Breadcrumb.vue'
export default {
  name: "OrderConfirmation",
  components: {
    Breadcrumb
  },
  methods: {
      bankTransfer() {
          this.$router.push({path: '/bank-transfer'})
      },
      payNow() {
          this.payModal = true
          this.$nextTick(function () {
            this.createCardElement()
        })
        
      },
      createCardElement() {
        if(card != undefined) {
            card.destroy(this.$refs.card)
        }
        let style = {
        base: {
            color: '#32325d',
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': {
            color: '#aab7c4'
            }
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a'
        }

        };
        card = elements.create('card', {style: style});
        card.mount(this.$refs.card);
    },
  },
  data() {
    return {
        payModal: false,
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
  }
}
</script>
<style scoped>
.border-color {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #339df3 !important;
}
input {
    border: none !important;
    margin-bottom: 15px !important;
    padding-left: 40px !important;
}
input:focus {
    border-bottom: 1px solid #339df3 !important;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #b9aeae !important;
  opacity: 1; /* Firefox */
}
.countries {
    position: relative;
}
.trash {
    position: absolute;
    left: -20px !important;
    top: 10px !important;
}
.trash:hover {
    cursor: pointer;
}
.btn-primary {
    padding: 5px 30px !important;
}
.btn-secondary {
    padding: 5px 10px;
}
.card-body {
    padding: 0;
}
.next {
    padding: 10px 80px !important;
}
.candidate p {
    margin: 0;
}
.user {
    color: #b9aeae !important;
    position: absolute;
    top: 63px;
    left: 30px;
}
.border-color {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #339df3 !important;
}
</style>