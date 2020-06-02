<template>
    <div class="individual-order">
        <div class="row">
            <div class="col-12">
                <Breadcrumb :items="items" class="px-5" />
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 text-center">
                <h4><strong class="text-head">Order Detail</strong></h4>
            </div>
        </div>
        <div class="row my-5 mx-3">
            <div class="col-xl-6 col-lg-8 col-md-12 offset-xl-2 offset-lg-2 col-12 mt-3">
                <div class="card shadow">
                    <div class="card-head pt-3">
                        <div class="row pl-5 pr-3 my-4">
                            <div class="col-8">
                                <h4 class=""><strong class="text-head">Order Information</strong></h4>
                            </div>
                            <div class="col-4 text-center">
                                <!-- <p class="text-primary">ZOHO Tracking No. : <br> 817731</p> -->
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="card-body">
                        <div class="pl-5 pr-3 pt-3 mb-5">
                            <div class="row">
                                <div class="col-md-12 candidate">
                                    <p class="mb-4"><strong class="text-head">Candidate Information</strong></p>  
                                    <p class="text-gray">First Name: {{selected_order.Candidate.FirstName}}</p>
                                    <p class="text-gray">Last Name: {{selected_order.Candidate.FirstName}}</p>
                                    <p class="text-gray">Email: {{selected_order.Candidate.Email}}</p>
                                    <p class="text-gray">Mobile: {{selected_order.Candidate.MobileCode}}{{selected_order.Candidate.MobileNumber}}</p>
                                </div>
                                 
                            </div>
                        </div>

                        <hr>
                        <div v-if="userdetails.UserRoleCode!='INDIVIDUAL' && selected_order.CandidateReference.length>0" class="pl-5 pr-3 mb-5 pt-3">
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="mb-4"><strong class="text-head">Client Reference</strong></p>  
                                    <p class="text-gray">{{selected_order.CandidateReference[0].OrderCandidateInfoId}}</p>
                                    
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="pl-5 pr-3 mb-5 pt-3">
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="mb-4"><strong class="text-head">Country of Hire</strong></p>  
                                    <p class="text-gray">{{getCountryById(this.selected_order.Candidate.CountryId).CountryName}}</p>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <!-- <div class="pl-5 pr-3 mb-5 pt-3">
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="mb-4"><strong class="text-head">Requestor</strong></p>  
                                    <p class="text-gray">ABC Hong Kong Limited</p>
                                </div>
                            </div>
                        </div> -->
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

                            <div v-for="(item,i) in selected_order.Items" :key="i" class="row mt-3">
                                <div class="col-md-6 col-6">
                                    <p><strong class="text-blue">{{item.PackageServiceItemName}}</strong></p>
                                </div>
                                <div class="col-md-3 col-3">
                                    <p class="text-gray">{{getCountryById(item.CountryId).CountryName}}</p>
                                </div>
                                <div class="col-md-3 col-3 text-right">
                                    <p class="text-blue"><strong>{{item.SubTotal}}</strong></p>
                                </div>
                            </div>
                            <!-- <div class="row mt-3">
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
                            </div> -->

                            <div class="row mt-4">
                                <div class="col-md-6 col-6">
                                    <h4><strong class="text-head">Total:</strong></h4>
                                </div>
                                <div class="col-md-3 col-3">
                                </div>
                                <div class="col-md-3 col-3 text-right">
                                    <h4 class="text-head"><strong>${{total}}</strong></h4>
                                </div>
                            </div>

                            <!-- <div class="row mt-3">
                                <div class="col-md-12 text-center">
                                    <b-form-checkbox class="text-primary"> Terms and Conditions</b-form-checkbox>
                                </div>
                            </div> -->
                        </div>
                        <hr>

                        <!-- <div class="pl-5 pr-3 pt-3 mb-5">
                            <div class="row">
                                <div class="col-md-12">
                                    <h4><strong class="text-head">Payment</strong></h4>
                                </div>
                                <div class="col-md-6 col-12 mt-3">
                                    <p><strong class="text-blue">Option 1: Online Credit Card</strong></p>
                                </div>
                                <div class="col-md-6 col-12 mt-3">
                                    <button class="btn btn-primary btn-block">Pay Online</button>
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
                                    <button class="btn btn-primary btn-block">Confirm Order with Bank Transfer</button>
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
                        </div> -->
                        
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
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import { mapGetters } from 'vuex'
export default {
  name: "OrderDetail",
  props:['selected_order'],
  computed:{
      ...mapGetters(['countries','userdetails','temp_selected_order']),
      total(){
          let i=0
          this.selected_order.Items.forEach(item=>{
              i=i+item.SubTotal
          })
          return i 
      }
      
  },
  components: {
    Breadcrumb
  },
  created(){
      window.scrollTo(0,0) 
      if(this.selected_order!=null){
          this.$store.commit("setSelectedOrder",this.selected_order)
      }
      else{
          this.selected_order=this.temp_selected_order
      }
  },
  
  methods:{
        getCountryById(id){
        return  this.countries.find(item=>item.CountryId==id)
      }
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
            text: 'Profile',
            active: false,
            to: '/profile'
        },
        {
            text: 'Order Detail',
            active: true,
            to: '/order-detail'
        }
      ],
    }
  }
}
</script>

<style scoped>
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

</style>