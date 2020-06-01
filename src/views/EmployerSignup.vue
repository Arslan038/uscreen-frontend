<template>
    <div class="employer-signup">
        <div class="row">
            <div class="col-12">
                <Breadcrumb :items="items" class="px-5" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h4 class="text-center text-head mt-5">Employer Sign Up</h4>
                <div class="row my-5">
                    <div class="col-md-8 offset-md-2 col-12">
                        <div class="card shadow">
                            <div class="card-head">
                                <h4 class="text-head pt-5 pb-4 px-5">User Information</h4>
                                <hr>
                            </div>
                            <form v-on:submit.prevent="signup()">
                            <div class="card-body">
                                <div class="px-5 py-4">
                                    <p><strong class="text-head">Company Information</strong></p>
                                    <div class="row">
                                        <div class="col-md-12 col-12 mt-3">
                                            <input type="text"  v-model="new_employer.CompanyName" class="form-control" placeholder="Company Name" >
                                        </div>
                                        <div class="col-md-12 col-12 mt-3" >
                                            <select class="form-control" v-model="new_employer.IndustryTypeId">
                                                <option v-for="(item,i) in industry" :key="i" :value="item.IndustryTypeId">{{item.IndustryTypeName}}</option>
                                            </select>
                                        </div>
                                        <div class="col-md-12 col-12 mt-3">
                                            <input v-model="new_employer.BusinessRegistrationNo" type="text" class="form-control" placeholder="Business Registration No" >
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="py-4 px-5">
                                    <p><strong class="text-head">Login Password</strong></p>
                                    <div class="row">
                                        <div class="col-md-6 col-12 mt-3">
                                            <input required v-model="new_employer.Password" type="password" placeholder="Password*" class="form-control">
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <input required  type="password" placeholder="Retype password*" v-model="retype_pass" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <hr>

                                <div class="px-5 py-4">
                                    <p><strong class="text-head">Currency</strong></p>
                                    <p>Select the currency you wish to display in this website.</p>
                                    <div class="row">
                                        <div class="col-md-6 col-12 mt-3">
                                            <select  v-model="new_employer.CurrencyId" class="form-control">
                                                <option v-for="(item,i) in currency" :key="i" :value="item.CurrencyId">{{item.CurrencyName}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <hr>

                                <div class="px-5 py-4">
                                    <p><strong class="text-head">User Information</strong></p>
                                    <div class="row">
                                        <div class="col-md-6 col-12 mt-3">
                                            <input required v-model="new_employer.FirstName" type="text" class="form-control" placeholder="First Name*" >
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <input required type="text" v-model="new_employer.LastName" class="form-control" placeholder="Last Name*" >
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <input required type="email" v-model="new_employer.Email" class="form-control" placeholder="Email (UserID)*" >
                                        </div>
                                            <div class="col-md-2 col-12 mt-3 country">
                                                <input required type="tel" pattern="^([0|\+[0-9]{1,5})"  v-model="new_employer.MobileCode" class="form-control" placeholder="country code*" >

                                            </div>
                                            <div class="col-md-4 mobile col-12 mt-3">
                                                <input required type="tel" pattern="[0-9]{3,10}" v-model="new_employer.MobileNumber" class="form-control" placeholder="Mobile*" >
                                            </div>
                                            <div class="col-md-6 col-12 mt-3">
                                            <input required type="email" v-model="confirm_email" class="form-control" placeholder="Confirm Email*" >
                                            </div>
                                    </div>
                                </div>
                                <hr>

                                <div class="px-5 py-4">
                                    <p><strong class="text-head">Registered Address*</strong></p>
                                    <textarea class="form-control" required v-model="new_employer.BusinessAddress.AddressName" rows="5" style="resize:none" placeholder="Address *"></textarea>
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-12 mt-3">
                                            <select required v-model="new_employer.BusinessAddress.CountryId" @change="handleBusinessCountry" class="form-control">
                                                <option value="" disabled selected>-Select Country-</option>

                                                <option v-for="(item,i) in countries" :key="i" :value="item.CountryId">{{item.CountryName}}</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <select required  v-model="new_employer.BusinessAddress.ProvinceId" @change="handleBusinessProvince" class="form-control">
                                                <option value="" disabled selected>-Select Province/State-</option>
                                                <option v-for="(item,i) in businessprovince" :key="i" :value="item.ProvinceId">{{item.ProvinceName}}</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <select required v-model="new_employer.BusinessAddress.CityId"  class="form-control">
                                                <option value="" disabled selected>-Select City-</option>
                                                <option v-for="(item,i) in bussinesscity" :key="i" :value="item.CityId">{{item.CityName}}</option>
                                                
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <input type="text" class="form-control" placeholder="Postcode/zipcodes*">
                                        </div>
                                    </div>
                                </div>
                                <hr>

                                <div class="px-5 py-4">
                                    <p><strong class="text-head">Billing Address*</strong></p>
                                    <b-form-checkbox class="text-gray"  v-model="isSame" > same as registered address</b-form-checkbox>
                                    <textarea class="form-control mt-3"  v-model="new_employer.BusinessBillingAddress.AddressName" rows="5" style="resize:none" placeholder="Address"></textarea>
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-12 mt-3">
                                            <select  v-model="new_employer.BusinessBillingAddress.CountryId" @change="handleBusinessBillingCountry" class="form-control">
                                                <option value="" disabled selected>-Select Country-</option>
                                                <option v-for="(item,i) in countries" :key="i" :value="item.CountryId">{{item.CountryName}}</option>

                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <select  v-model="new_employer.BusinessBillingAddress.ProvinceId" @change="handleBusinessBillingProvince" class="form-control">
                                                <option value="" disabled selected>-Select Province/State-</option>

                                                <option v-for="(item,i) in billingprovince" :key="i" :value="item.ProvinceId">{{item.ProvinceName}}</option>

                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <select  v-model="new_employer.BusinessBillingAddress.CityId" class="form-control">
                                                <option value="" disabled selected>-Select City-</option>
                                                <option v-for="(item,i) in billingcity" :key="i" :value="item.CityId">{{item.CityName}}</option>

                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <input type="text" class="form-control" placeholder="Postcode/zipcodes*">
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="row mt-3">
                                    <div class="col-md-4 offset-md-4 col-4 offset-2">
                                        <vue-recaptcha sitekey="6LeRufEUAAAAAH3YkifekIVSHW44inX-Ud9K57h5" @verify="verified" :loadRecaptchaScript="true">
            
                                        </vue-recaptcha>
                                    </div>
                                </div>
                                <div class="col-12 text-center my-5">
                                    <!-- <b-alert show variant="danger" v-if="!isVerfied" class="my-3">Danger Alert</b-alert> -->
                                    <div class="d-flex" style=" align-items: center; justify-content: center;">
                                    <b-form-checkbox class="text-primary" required v-model="terms" ></b-form-checkbox> <span @click="showmodals" style="cursor:pointer;color:blue"> Terms and Conditions</span>
                                    </div>
                                    <button class="btn btn-primary mb-5 mt-3" type="submit" >Sign Up</button>
                                    <b-modal size="lg" ok-title="Close" cancel-title="Download" @cancel="downloadAgreement" scrollable="true" id="general" title="Terms and Conditions">
                                        <div class="text-center">User Agreement for UScreen</div>
                                        <div v-html="tc_normal">
                                        </div>
                                    </b-modal>
                                    <b-modal size="lg" ok-title="Close" cancel-title="Download" @cancel="downloadAusAgreement" :scrollable="true" id="aud" title="Terms and Conditions">
                                        <div class="text-center">User Agreement for UScreen</div>
                                        <div v-html="tc_aus">
                                        </div>
                                    </b-modal>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import VueRecaptcha from 'vue-recaptcha';

import { RepositoryFactory } from '../Repository/RepositoryFactory'
const UserRepository = RepositoryFactory.get('user_repository')
import {mapGetters} from 'vuex'
import mainmixin from '../mixins/mainmixin'
import t_c from '../components/t_c.js'

export default {
  name: "EmployerSignup",
  mixins:[mainmixin],
  components: {
    Breadcrumb,
    VueRecaptcha
  },
  computed:{
      ...mapGetters(['currency','countries','industry']),
  },
  watch:{
      currency(){
        if(this.currency.length>0){
          this.fetchCurrency()

          }
      },
      countries(){
        if(this.countries.length>0){
          this.fetchCountries()

          }
      },
      industry(){
          if(this.industry.length>0){
            this.fetchIndustry()

          }
      }
  },
   mounted(){
      this.fetchCountries()
      this.fetchCurrency()
      this.fetchIndustry()

  },
  created(){
      window.scrollTo(0, 0);

      this.fetchCountries()
      this.fetchCurrency()
      this.fetchIndustry()

  },
  methods:{
    verified(response) {
        if(response) {
            this.isVerified = true
        }
    },
    handleSame(){
        if(this.isSame==true){
            this.billingprovince=this.businessprovince
            this.billingcity=this.bussinesscity
                this.new_employer.BusinessBillingAddress={
                    CountryId:this.new_employer.BusinessAddress.CountryId,
                    CityId:this.new_employer.BusinessAddress.CityId,
                    ProvinceId:this.new_employer.BusinessAddress.ProvinceId,
                    AddressName:this.new_employer.BusinessAddress.AddressName,

                }
        }


    },
    downloadAgreement(bvModalEvt) {
        bvModalEvt.preventDefault();
        window.open("../sample.pdf", "_blank");
    },
    downloadAusAgreement(bvModalEvt) {
        bvModalEvt.preventDefault();
        window.open("../sample_aus.pdf", "_blank");
    },
    
    handleBusinessBillingCountry(val){
        this.fetchBusinessProvinceByCountry(val.target.value,'billing')
    },
    handleBusinessBillingProvince(val){
        this.fetchBusinessCityByProvinec(this.new_employer.BusinessBillingAddress.CountryId,val.target.value,'billing')
    },


    handleBusinessCountry(val){
        this.fetchBusinessProvinceByCountry(val.target.value,'business')
    },
    handleBusinessProvince(val){
        this.fetchBusinessCityByProvinec(this.new_employer.BusinessAddress.CountryId,val.target.value,'business')
    },
    scrollMeTo(refName) {
        var elemntss=document.getElementById("legals")
        elemntss.scrollIntoView()
   
    },
    async signup() {

              if(this.new_employer.Password==this.retype_pass) {
                    if(!this.isVerified) {
                        this.$store.commit('setNotifications',{message:'Re-Captcha Required',type:'error'})
                        return
                    }
                    if(this.new_employer.Email!=this.confirm_email){
                        this.$store.commit('setNotifications',{message:'Email and Confirmed email should be same',type:'error'})
                        return
                    }
                    if(this.terms==false){
                    this.$store.commit('setNotifications',{message:'Accept terms and conditions',type:'error'})
                    return
                    }
                    else if(this.isSame!=true){
                        if(this.validationchecker(this.new_employer.BusinessBillingAddress,['CountryId','ProvinceId','CityId','AddressName'])>0){
                            this.$store.commit('setNotifications',{message:'Fill in business billing address details',type:'error'})
                            return
                        }
                    }
                    
                    this.new_employer.UserAddress={
                        CountryId: this.new_employer.BusinessAddress.CountryId,
                        CityId: this.new_employer.BusinessAddress.CityId,
                        ProvinceId: this.new_employer.BusinessAddress.ProvinceId,
                        AddressName: this.new_employer.BusinessAddress.AddressName,
                        PostalCode: ''
                    }
                    if(this.isSame==true){
                        this.handleSame()
                    }
                    
                    let {data} = await UserRepository.createaccount(this.new_employer)
                    
                    .catch(error => {
                        if(error.response.data.Message.toLowerCase().includes('duplicate entry')){

                        this.$store.commit('setNotifications',{message:`The email ${this.new_employer.Email} is already used. Please try another email or contact us for more details`,type:'error'}) 
                        }
                        else{

                            this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'}) 
                        }
                    });

                    if(data!=null){
                        this.$store.commit('setNotifications',{message:'User created succesfully',type:'success'})
                        this.$router.push({path:'/registration-completed'})

                    }
                    else{
                    }

                    this.isVerified = false

              }
              else {
                 this.$store.commit('setNotifications',{message:'Make sure your password and retyped password are same',type:'error'})

              }

        //   }
        //   else{
        //     this.$store.commit('setNotifications',{message:'Fill in all *required fields ',type:'error'})

        //   }


    },
      
    async fetchCountries(){
        //   this.new_employer.CountryId=this.countries[0].CountryId
        //   this.new_employer.BusinessAddress.CountryId=this.countries[0].CountryId
        //   this.new_employer.BusinessBillingAddress.CountryId=this.countries[0].CountryId

          this.fetchBusinessProvinceByCountry(this.new_employer.BusinessAddress.CountryId,'first')

    },
    async fetchBusinessProvinceByCountry(id,type){
        let {data}= await UserRepository.getProvince(id)
        if(type=='first'){
            this.businessprovince=data.data
            this.billingprovince=data.data
            // this.new_employer.BusinessAddress.ProvinceId=data.data[0].ProvinceId
            // this.new_employer.BusinessBillingAddress.ProvinceId=data.data[0].ProvinceId
        }
        else if(type=='business'){
            this.businessprovince=data.data
            this.new_employer.BusinessAddress.ProvinceId=data.data[0].ProvinceId
            this.fetchBusinessCityByProvinec(this.new_employer.BusinessAddress.CountryId,this.new_employer.BusinessAddress.ProvinceId,type)
        }
        else if(type=='billing'){
            this.billingprovince=data.data
            this.new_employer.BusinessBillingAddress.ProvinceId=data.data[0].ProvinceId
            this.fetchBusinessCityByProvinec(this.new_employer.BusinessBillingAddress.CountryId,this.new_employer.BusinessBillingAddress.ProvinceId,type)
        }

    },
    async fetchBusinessCityByProvinec(CountryId,ProvinceId,type){
        let {data}= await UserRepository.getCity({CountryId:CountryId,ProvinceId:ProvinceId})
         if(type=='first'){
        this.bussinesscity=data.data
        this.billingcity=data.data
        this.new_employer.BusinessAddress.CityId=data.data[0].CityId
        this.new_employer.BusinessBillingAddress.CityId=data.data[0].CityId

        }
        else if(type=='business'){
        this.bussinesscity=data.data
        this.new_employer.BusinessAddress.CityId=data.data[0].CityId
         
        }
        else if(type=='billing'){
        this.billingcity=data.data
        this.new_employer.BusinessBillingAddress.CityId=data.data[0].CityId
         
        }
        
    },
    showmodals(){
        if(this.new_employer.CurrencyId==2){

         this.$bvModal.show('aud')
        }
        else{
         this.$bvModal.show('general')

        }
    },
    async fetchCurrency(){
        // let {data}= await UserRepository.getCurrency()
        // this.currency=data
        this.new_employer.CurrencyId=this.currency[0].CurrencyId
    },
    async fetchIndustry(){
        // let {data}= await UserRepository.getIndustry()
        // this.industry=data.data
        this.new_employer.IndustryTypeId=this.industry[0].IndustryTypeId
    }
  },
  data() {
    return {
    terms:false,
    isVerified: false,
      businessprovince:[],
      billingprovince:[],
      billingcity:[],

      bussinesscity:[],
      isSame:false,
      retype_pass:'',

      tc_normal: t_c['tc_normal'].replace(/\n/g, '<br />'),
      tc_aus: t_c['tc_aus'].replace(/\n/g, '<br />'),
    
      new_employer:{
        Email:'',
        FirstName:'',
        MiddleName:'',
        LastName:'',
        UserName:'',
        Password:'',
        MobileCode:'',
        MobileNumber:'',
        UserRoleId:'3',
        UserAddress:{
			CountryId: '',
			CityId: '',
			ProvinceId: '',
			AddressName: '',
			PostalCode: ''
		},
        // CountryId:'',
        CurrencyId:'',
        // CityId:'',
        // ProvinceId:'',
        // AddressName:'',
        CompanyName:'',
        IndustryTypeId:'',
        
        BusinessRegistrationNo:'',
           BusinessAddress:{
                CountryId:'',
                CityId:'',
                ProvinceId:'',
                AddressName:''
           },
           BusinessBillingAddress:{
                CountryId:'',
                CityId:'',
                ProvinceId:'',
                AddressName:'',
           }
        
      },
      confirm_email:'',

      items: [
        {
            text: 'Home',
            active: false,
            to: '/'
        },
        {
            text: 'Sign Up',
            active: false,
            to: '/signup'
        },
        {
            text: 'Employer Sign Up',
            active: true,
            to: '/employer-signup'
        }
      ],
    }
  }
}
</script>

<style scoped>
h4 {
    font-weight: bold;
}
.btn-primary {
    border-radius: 25px;
    font-weight: bold;
    padding: 10px 70px;
}
.mobile {
    margin-left: 0 !important;
}
.country {
    margin-right: 0px !important;
}
.card-body {
    padding: 0 !important;
}
</style>