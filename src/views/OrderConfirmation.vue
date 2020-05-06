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
                                <!-- <button class="btn btn-secondary">Need help?</button> -->
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="card-body">
                        <div class="pl-5 pr-3 pt-3 mb-5">
                            <div class="row">
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

                        <div class="pl-5 pr-3 mb-5 pt-3" v-if="userdetails.UserRoleCode!='INDIVIDUAL'">
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="mb-4"><strong class="text-head">Client Reference</strong></p>  
                                    <p class="text-gray">{{selected_order.Reference[0].EmployeeId}}</p>
                                    <p class="text-gray">{{selected_order.Reference[1].EmployeeId}}</p>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="pl-5 pr-3 mb-5 pt-3">
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="mb-4"><strong class="text-head">Country of Hire</strong></p>  
                                    <p class="text-gray">{{getCountryById(selected_order.CountryId).CountryName}}</p>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="pl-5 pr-3 mb-5 pt-3" v-if="userdetails.UserRoleCode!='INDIVIDUAL'">
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="mb-4"><strong class="text-head">Requestor</strong></p>  
                                    <p class="text-gray">{{selected_order.Requestor}}</p>
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
                                    <p class="text-head">Price ({{userdetails.CurrencyCode}})</p>
                                </div>
                            </div>

                            <div v-for="(item,i) in selected_order.PackageServiceItems" :key="i" class="row mt-3">
                                <div class="col-md-6 col-6">
                                    <p><strong class="text-blue">{{extras[i].PackageServiceItemName}}</strong></p>
                                </div>
                                <div  class="col-md-3 col-3">
                                    <p v-for="(cunt,j) in item.Countries" :key="j" class="text-gray">{{getCountryByCode(cunt).CountryName}}</p>
                                </div>
                                <div class="col-md-3 col-3 text-right">
                                    <p class="text-blue" v-for="(it,l) in extras[i].amounts" :key="l"><strong>{{it}}</strong></p>
                                </div>
                            </div>
                      
                            <div class="row mt-4">
                                <div class="col-md-6 col-6">
                                    <h4><strong class="text-head">Total:</strong></h4>
                                </div>
                                <div class="col-md-3 col-3">
                                </div>
                                <div class="col-md-3 col-3 text-right">
                                    <h4 class="text-head"><strong>{{total}}</strong></h4>
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col-md-12 text-center">
                                    <b-form-checkbox class="text-primary" v-model="terms"> Terms and Conditions</b-form-checkbox>
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
                                    <button class="btn btn-primary btn-block" @click="createAndDownload()">Get Pro Forma Invoice</button>
                                </div>
                                <div class="col-md-12 text-center">
                                    <a v-if="performa_file!=''" :href="performa_file" download>Your file is ready click here </a>                                         
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
            <h4 class="text-blue  mb-3 text-center">Pay ${{total}} via Credit Card</h4>
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
  props:['selected_order','extras'],
  
  computed:{
      ...mapGetters(['countries','userdetails']),
      total() {
          let i=0
          this.extras.forEach(item=>{
              item.amounts.forEach(val=>{
              i=i+val
              })
          })
          return i.toFixed(2) 
      }
  },
  components: {
    Breadcrumb
  },
  mounted(){
     this.performa_file=''
  },
  created() {
      window.scrollTo(0,0)
  },
  methods: {
      async bankTransfer(){
          if(this.terms==true){

           let {data}=await OrderRepository.create_order(this.selected_order)
            .catch(error => {
                this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'})
            });
            console.log(data)

            if(data!=null){
                this.$router.push({name:'OrderBankTransfer',params:{orderkey:data.data.OrderKey}})
            }
            else{
                console.log(data)
            }
          }
        else{
                this.$store.commit('setNotifications',{message:'Accept terms and conditions',type:'error'})

            }

      },
      async createAndDownload(){
          if(this.terms==true){

           let {data}=await OrderRepository.create_order(this.selected_order)
            .catch(error => {
                this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'})
            });
            console.log(data)

            if(data!=null){
                this.$router.push({name:'OrderBankTransfer',params:{proforma:true,orderkey:data.data.OrderKey}})

                // let resp=await OrderRepository.getOrderPerforma(data.data.OrderKey)
                // .catch(error => {
                //     this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'})
                // });
                // console.log(resp)

                // if(resp.data.code=='MSG_SUCCESS_EXPORTS'){
                //     this.$store.commit('setNotifications',{message:'File Generated succesfully',type:'success'})
                //     window.open(resp.data.data[0].File)    
                // }   
                // else{
                //      this.$store.commit('setNotifications',{message:'Problems in Creating file',type:'error'})
                // }

            }
            else{
                console.log(data)
            }
          }
            else{
                    this.$store.commit('setNotifications',{message:'Accept terms and conditions',type:'error'})

                }

      },
      async createPayment(){
          this.isLoad=true
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
                     this.$store.commit('setNotifications',{message:'Order created succesffuly',type:'success'})
                     this.$router.push({name:'OrderBankTransfer',params:{orderkey:data.data.OrderKey}})
                }
                else{
                     this.$store.commit('setNotifications',{message:'Problems in Making payments',type:'error'})

                }
                this.payModal=false
                this.isLoad=false

            }
            else{
                console.log(data)
            }
             
      },
      getCountryByCode(id){
        return  this.countries.find(item=>item.CountryCode==id)
      },
      getCountryById(id){
        return  this.countries.find(item=>item.CountryId==id)
      },
      payNow() {
          if(this.terms==true){
                this.payModal = true
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
</style>