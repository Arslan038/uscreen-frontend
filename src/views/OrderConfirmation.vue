<template>
    <div class="individual-order">
        <div class="row">
            <div class="col-12">
                <Breadcrumb :items="items" />
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12 text-center">
                <h4><strong class="text-head">Order Confirmation</strong></h4>
            </div>
        </div>
        <div class="row mt-3 mb-5 mx-1 mx-md-5">
            <div class="col-xl-6 col-lg-8 col-md-12 offset-xl-2 offset-lg-2 col-12 mt-3">
                <div class="card shadow">
                    <div class="card-head pt-3">
                        <div class="container">
                            <div class="row pr-3 my-4 mx-md-3">
                                <div class="col-12">
                                    <h4 class=""><strong class="text-head">Order Information</strong></h4>
                                </div>
                                <div class="col-4 text-right">
                                    <!-- <button class="btn btn-secondary">Need help?</button> -->
                                </div>
                            </div>
                        </div>
                        
                        <hr>
                    </div>
                    <div class="card-body">
                        <div class="pl-3 pr-3 pt-3 mb-5">
                            <div class="row mx-md-3">
                                <div class="col-md-12 candidate">
                                    <p class="mb-4"><strong class="text-head">Candidate Information</strong></p>  
                                    <p class="text-gray">First Name: {{selected_order.FirstName}}</p>
                                    <p class="text-gray">Last Name: {{selected_order.LastName}}</p>
                                    <p class="text-gray">Email: {{selected_order.Email}}</p>
                                    <p class="text-gray">Mobile: {{selected_order.MobileCode+'-'+selected_order.MobileNumber}}</p>
                                </div>
                                 
                            </div>
                        </div>

                        <hr>

                        <div class="pl-3 pr-3 mb-5 pt-3" v-if="userdetails.UserRoleCode!='INDIVIDUAL'">
                            <div class="row mx-md-3">
                                <div class="col-md-12">
                                    <p class="mb-4"><strong class="text-head">Client Reference</strong></p>  
                                    <p class="text-gray">{{selected_order.Reference[0].EmployeeId}}</p>
                                    <p class="text-gray">{{selected_order.Reference[1].EmployeeId}}</p>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="pl-3 pr-3 mb-5 pt-3">
                            <div class="row mx-md-3">
                                <div class="col-md-12">
                                    <p class="mb-4"><strong class="text-head">Country of Hire</strong></p>  
                                    <p class="text-gray">{{getCountryById(selected_order.CountryId).CountryName}}</p>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="pl-3 pr-3 mb-5 pt-3" v-if="userdetails.UserRoleCode!='INDIVIDUAL'">
                            <div class="row mx-md-3">
                                <div class="col-md-12">
                                    <p class="mb-4"><strong class="text-head">Requestor</strong></p>  
                                    <p class="text-gray">{{selected_order.Requestor}}</p>
                                </div>
                            </div>
                        </div>
                        <hr>

                        <div class="pl-3 pr-3 mb-5 pt-3">
                            <div class="row mx-md-3">
                                <div class="col-md-6 col-6">
                                    <h4><strong class="text-head">Product</strong></h4>
                                </div>
                                <div class="col-md-6 col-6 text-right">
                                    <p class="text-head">Price ({{userdetails.CurrencyCode}})</p>
                                </div>
                            </div>

                            <div v-for="(item,i) in PackageServiceItems" :key="i" class="row mt-3 mx-md-3">
                                 <div class="col-md-6 col-6">
                                    <p><strong class="text-blue">{{item.PackageServiceItemName}}</strong></p>
                                </div>
                                 <div  class="col-md-3 col-3">
                                    <p  class="text-gray">{{getCountryById(item.CountryId).CountryName}}</p>
                                </div>
                                <div class="col-md-3 col-3 text-right">
                                    <p class="text-blue" ><strong>{{item.Amount.toFixed(2) }}</strong></p>
                                </div> 
                            </div>
                      
                            <div class="row mt-4 mx-md-3">
                                <div class="col-md-6 col-6">
                                    <h4><strong class="text-head">Total:</strong></h4>
                                </div>
                                <div class="col-md-6 col-6 text-right">
                                    <h4 class="text-head total mt-2"><strong>{{temp.CurrencyCode}} {{total.toFixed(2)}}</strong></h4>
                                </div>
                            </div>

                            <div class="row mt-3 mx-md-3">
                                <div class="col-md-12 text-center">
                                    <div class="d-flex" style=" align-items: center; justify-content: center;">
                                    <b-form-checkbox class="text-primary" v-model="terms"></b-form-checkbox> <span v-b-modal.modal-1 style="cursor:pointer;color:blue"> Terms and Conditions</span>
                                    </div>
                                 <b-modal ok-only id="modal-1" title="Terms and Conditions">
                                    <div>
                                        Please take note that the above order total is the pre-final amount based on selected checks to be conducted. Anticipating that some orders may have check additions or cancellations, depending on the addresses declared by the candidate upon data entry or depending on in-country regulations when conducting specific background screening checks, the final amount will be based on the actual checks conducted. Additional amounts to settle will be charged via a secondary invoice, while payments for checks not conducted will be refunded via wallet credits to your UScreen account.
                                    </div>
                                </b-modal>
                                </div>
                            </div>
                        </div>
                        <hr>

                        <div class="pl-3 pr-3 pt-3 mb-5">
                            <div class="row mx-md-3">
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
                                    <button class="btn btn-primary btn-block" @click="bankTransfer">Pay via Bank Transfer</button>
                                </div>
                                <div class="col-12 text-center my-5">
                                    <h4><strong class="text-head">or</strong></h4>
                                </div>

                                <div class="col-md-6 col-12 mt-3">
                                    <p><strong class="text-blue">Option 3: Download Invoice and Pay Later</strong></p>

                                </div>
                                <div class="col-md-6 col-12 mt-3">
                                    <button class="btn btn-primary btn-block" @click="createAndDownload()">Pay Invoice</button>
                                </div>
                                <div class="col-md-12 text-center">
                                    <a v-if="performa_file!=''" :href="performa_file" download>Your file is ready click here </a>                                         
                                </div>

                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div v-if="userdetails.UserRoleCode=='INDIVIDUAL'" class="col-xl-3 col-lg-3 col-12 text-md-left text-center mt-3 d-none d-xl-block">
                <div class="individual-img-crop">
                    <img src="../assets/individual_ordering.jpg" alt="">
                </div>
            </div>
            <div v-if="userdetails.UserRoleCode=='EMPLOYER'" class="col-xl-3 col-lg-3 col-12 text-md-left text-center mt-3 d-none d-xl-block">
                <div class="employer-img-crop">
                    <img src="../assets/employer_ordering.jpg" alt="">
                </div>
            </div>
        </div>

        <b-modal v-model="payModal" title="Pay Online" :hideFooter="true">
            <h4 class="text-blue  mb-3 text-center">Pay ${{total.toFixed(2)}} {{userdetails.CurrencyCode}}  via Credit Card</h4>
            <b-row>
                <b-input v-model="paymentobj.number" placeholder=" Card Number"></b-input>
            </b-row>
            <b-row>
                <b-col>
                    <b-input v-model="paymentobj.exp_month" placeholder="M"></b-input>
                </b-col>
                <b-col>
                    <b-input v-model="paymentobj.exp_year" placeholder="YYYY"></b-input>
                </b-col>
                <b-col>
                    <b-input v-model="paymentobj.cvc" placeholder=" CVV"></b-input>
                </b-col>
            </b-row>
            <!-- <i class="fa fa-user user"></i><input type="text" class="border-color form-control" placeholder="Name on card"> -->
            <!-- <div ref="card" class="border-color"></div> -->
            <div class="text-center">
            <button v-if="isLoad==false" class="btn btn-primary btn-block mt-3" @click="createPayment">Pay Now</button>
            <b-spinner  v-else variant="primary" label="Spinning"></b-spinner>

            </div>

       </b-modal>
    </div>
</template>

<script>

import { RepositoryFactory } from '../Repository/RepositoryFactory'
const OrderRepository = RepositoryFactory.get('order_repository')

import Breadcrumb from '@/components/Breadcrumb.vue'
import {mapGetters} from 'vuex'
export default {
  name: "OrderConfirmation",
  props:['selected_order'],
  
  computed:{
      ...mapGetters(['countries','userdetails']),
   
  },
  components: {
    Breadcrumb
  },
  mounted(){
     this.performa_file=''
  },
  created() {
 
    window.scrollTo(0,0)
    window.onbeforeunload = function() {
        return "Changes that you made may not be saved";
    };
      if(this.selected_order==null){
           
            if(JSON.parse(localStorage.getItem("userdetails"))!=null){
                if(JSON.parse(localStorage.getItem("userdetails")).UserRoleCode=='INDIVIDUAL'){
                    this.$router.push({path:'/individual-packages'})
                }
                else{
                    this.$router.push({path:'/employer-packages'})

                }
            }
      }
         this.realprice={
        PackageServiceCode: this.selected_order.PackageServiceCode,
        PackageServiceItems : this.selected_order.PackageServiceItems,
        UserKey: this.userdetails.UserKey

    }
    this.getRealPrice()

  },
  methods: {
      async getRealPrice(){
        let {data} = await OrderRepository.getOrderRealPriceing(this.realprice)
        this.temp=data.data
        this.total=data.data.Amount
        this.PackageServiceItems=data.data.PackageServiceItems

      },
      async bankTransfer(){
          if(this.terms==true){
            if(this.paymentobj.OrderKey=='') {
                let {data}=await OrderRepository.create_order(this.selected_order)
                .catch(error => {
                    this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'})
                });

                if(data!=null) {
                    window.onbeforeunload = null
                    this.$router.push({name:'OrderBankTransfer',params:{orderkey:data.data.OrderKey}})
                }

            }
            else {
                    window.onbeforeunload = null
                    this.$router.push({name:'OrderBankTransfer',params:{orderkey:this.paymentobj.OrderKey}})
            }


          }
        else{
                this.$store.commit('setNotifications',{message:'Accept terms and conditions',type:'error'})

            }

      },
      async createAndDownload(){
          if(this.terms==true){
            if(this.paymentobj.OrderKey=='') {
                let {data}=await OrderRepository.create_order(this.selected_order)
                .catch(error => {
                    this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'})
                });

                if(data!=null){
                    window.onbeforeunload = null
                    this.$router.push({name:'OrderBankTransfer',params:{proforma:true,orderkey:data.data.OrderKey}})
                }
                else {

                }

            }
            else{
                window.onbeforeunload = null

                this.$router.push({name:'OrderBankTransfer',params:{proforma:true,orderkey:this.paymentobj.OrderKey}})
               
            }

           
          }
        else{
                this.$store.commit('setNotifications',{message:'Accept terms and conditions',type:'error'})

            }

      },
      async createPayment(){
          this.isLoad=true
          if(this.paymentobj.OrderKey=='') {
            let {data}=await OrderRepository.create_order(this.selected_order)
            .catch(error => {
                this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'})
            });
            if(data!=null){

                this.paymentobj.OrderKey=data.data.OrderKey

                
                let resp=await OrderRepository.order_charge(this.paymentobj)
                .catch(error => {
                    this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'})
                    this.isLoad=false
                });
                if(resp.data.code=='MSG_SUCCESS_PAYMENT_CHARGE'){
                     this.$store.commit('setNotifications',{message:'Order created successfully',type:'success'})
                      window.onbeforeunload = null

                     this.$router.push({name:'OrderBankTransfer',params:{orderkey:data.data.OrderKey}})
                }
                else{
                     this.$store.commit('setNotifications',{message:'Problems in Making payments',type:'error'})

                }
                this.payModal=false
                this.isLoad=false

            }

          }
          else {

                let resp=await OrderRepository.order_charge(this.paymentobj)
                .catch(error => {
                    this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'})
                    this.isLoad=false
                });
                if(resp.data.code=='MSG_SUCCESS_PAYMENT_CHARGE') {
                     this.$store.commit('setNotifications',{message:'Order created successfully',type:'success'})
                      window.onbeforeunload = null

                     this.$router.push({name:'OrderBankTransfer',params:{orderkey:this.paymentobj.OrderKey}})
                }
                else{
                     this.$store.commit('setNotifications',{message:'Problems in Making payments',type:'error'})

                }
                this.payModal=false
                this.isLoad=false

          }

             
      },
      getCountryByCode(id){
        return  this.countries.find(item=>item.CountryCode==id)
      },
      getCountryById(id){
        var countryFound = this.countries.find(item=>item.CountryId==id);
        if (countryFound == undefined) {
            return "";
        }
        return countryFound;
      },
      payNow() {
          if(this.terms==true){
              
                if(this.total==0){
                    this.createAndDownload()
                }
                else{
                    this.payModal = true
                    
                }
          }
          else{
                this.$store.commit('setNotifications',{message:'Accept terms and conditions',type:'error'})

          }

         
        
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
        temp:{},
        PackageServiceItems:[],
        total:0,
        realprice:{},
        terms:false,
        performa_file:'',
        isLoad:false,
        tempobj:'',
         paymentobj:{
            //  4cce9195-7a7e-4c11-916d-de7d90b1c538
            OrderKey: "",
            number: "5555555555554444",
            exp_month: "7",
            exp_year: "2020",
            cvc: "123"
        },
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
.individual-img-crop {
    width: 200px;
    height: 700px;
    overflow: hidden;
}
.individual-img-crop img{
    height: 700px;
    width: auto;
    margin-left: -500px;
}
.employer-img-crop {
    width: 200px;
    height: 700px;
    overflow: hidden;
}
.employer-img-crop img{
    height: 700px;
    width: auto;
    margin-left: -600px;
}

@media screen and (max-width: 600px) {
    .text-head {
        font-size: 16px;
    }
    .text-blue {
        font-size: 13px;
    }
    .text-gray {
        font-size: 13px;
    }
    .total {
        font-size: 16px;
    }
}
</style>