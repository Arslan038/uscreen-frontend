<template>
    <div class="individual-signup">
        <div class="row">
            <div class="col-12">
                <Breadcrumb :items="items" class="px-5" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h4 class="text-center text-head mt-5">Individual Sign Up</h4>
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
                                    <p><strong class="text-head">Contact Information</strong></p>
                                    <label for="">This information will used to contact you about your background check.</label>
                                    <div class="row">
                                        <div class="col-md-6 col-12 mt-3">
                                            <input required type="text" v-model="new_user.FirstName" class="form-control" placeholder="First Name*" >
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <input required type="text" v-model="new_user.LastName" class="form-control" placeholder="Last Name*" >
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <input required type="email" v-model="new_user.Email" class="form-control" placeholder="Email (UserID)*" >
                                        </div>
                                        <div class="col-md-2 col-12 mt-3 country">
                                                <input required pattern="^([0|\+[0-9]{1,5})"  v-model="new_user.MobileCode"  class="form-control" placeholder="country code*" >
                                        </div>
                                        <div class="col-md-4 mobile col-12 mt-3">
                                            <input  required type="tel" pattern="[0-9]{3,10}"  class="form-control" v-model="new_user.MobileNumber" placeholder="Mobile*" >
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                        <input required type="email" v-model="confirm_email" class="form-control" placeholder="Confirm Email*" >
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="py-4 px-5">
                                    <p><strong class="text-head">Login Password</strong></p>
                                    <div class="row">
                                        <div class="col-md-6 col-12 mt-3">
                                            <input required type="password" v-model="new_user.Password" placeholder="Password*" class="form-control">
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <input required type="password" placeholder="Retype password*" v-model="retype_pass" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <hr>

                                <div class="px-5 py-4">
                                    <p><strong class="text-head">Currency</strong></p>
                                    <p>Select the currency you wish to display in this website.</p>
                                    <div class="row">
                                        <div class="col-md-6 col-12 mt-3">
                                            <select  v-model="new_user.CurrencyId" class="form-control">
                                                <option v-for="(item,i) in currency" :key="i" :value="item.CurrencyId">{{item.CurrencyName}}</option>

                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <hr>

                                <div class="px-5 py-4">
                                    <p><strong class="text-head">User Address</strong></p>
                                    <textarea class="form-control" required v-model="new_user.UserAddress.AddressName" rows="5" style="resize:none" placeholder="Address"></textarea>
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-12 mt-3">
                                            <select class="form-control"  required v-model="new_user.UserAddress.CountryId" @change="handleBusinessCountry">
                                                <option value="" disabled selected>-Select Country-</option>
                                                <option v-for="(item,i) in countries" :key="i" :value="item.CountryId">{{item.CountryName}}</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <select class="form-control" required @change="handleBusinessProvince" v-model="new_user.UserAddress.ProvinceId">
                                                <option value="" disabled selected>-Select Province/State-</option>
                                                <option v-for="(item,i) in province" :key="i" :value="item.ProvinceId">{{item.ProvinceName}}</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <select  class="form-control" required v-model="new_user.UserAddress.CityId">
                                                <option value="" disabled selected>-Select City-</option>
                                                <option v-for="(item,i) in city" :key="i" :value="item.CityId">{{item.CityName}}</option>

                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <input v-model="new_user.UserAddress.PostalCode" type="text" class="form-control" placeholder="Select Postcode/zipcodes*">
                                        </div>
                                    </div>
                                </div>
                                <hr>

                                <hr>
                                <div class="row mt-3">
                                    <div class="col-md-4 offset-md-4 col-4 offset-2">
                                        <vue-recaptcha sitekey="6LeRufEUAAAAAH3YkifekIVSHW44inX-Ud9K57h5" @verify="verified" :loadRecaptchaScript="true">
            
                                        </vue-recaptcha>
                                    </div>
                                </div>
                                <div class="col-12 text-center my-5">
                                    <div class="d-flex" style=" align-items: center; justify-content: center;">
                                    <b-form-checkbox class="text-primary" required v-model="terms" ></b-form-checkbox> <span @click="showmodals" style="cursor:pointer;color:blue"> Terms and Conditions</span>
                                    </div>
                                    <button class="btn btn-primary mb-5 mt-3" type="submit" >Signup</button>
                                    <b-modal size="lg" ok-only :scrollable="true" id="general" title="Terms and Conditions">
                                        <div class="text-center">User Agreement for UScreen</div>
                                        <div v-html="tc_normal">
                                        </div>
                                    </b-modal>
                                    <b-modal ok-only size="lg" :scrollable="true" id="aud" title="Terms and Conditions">
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
  name: "IndividualSignup",
  mixins:[mainmixin],
  components: {
    Breadcrumb,
    VueRecaptcha
  },
    computed:{
      ...mapGetters(['currency','countries','industry'])
  },
  methods:{
      verified(response) {
        if(response) {
            this.isVerified = true
        }
    },
    handleBusinessCountry(val){
        this.fetchBusinessProvinceByCountry(val.target.value)
    },
    handleBusinessProvince(val){
        this.fetchBusinessCityByProvinec(this.new_user.UserAddress.CountryId,val.target.value)
    },
    async signup(){
        //  if(this.validationchecker(this.new_user,['FirstName','LastName','MobileCode','MobileNumber'])<1){
              if(this.new_user.Password==this.retype_pass){
                 if(!this.isVerified) {
                    this.$store.commit('setNotifications',{message:'Re-Captcha Required',type:'error'})
                    return
                }
                if(this.new_user.Email!=this.confirm_email){
                    this.$store.commit('setNotifications',{message:'Email and Confirmed email should be same',type:'error'})
                    return
                }
                if(this.terms==false){
                    this.$store.commit('setNotifications',{message:'Accept terms and conditions',type:'error'})
                    return
                }
                let {data} = await UserRepository.createaccount(this.new_user)
                .catch(error => {
                      if(error.response.data.Message.toLowerCase().includes('duplicate entry')){

                        this.$store.commit('setNotifications',{message:`The email ${this.new_user.Email} is already used. Please try another email or contact us for more details`,type:'error'}) 
                      }
                      else{

                        this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'}) 
                      }
                  });
                  if(data.status=='Success'){
                    this.$store.commit('setNotifications',{message:'User created successfully',type:'success'})
                    this.$router.push({path:'/registration-completed'})
                  }
                  this.isVerified = false
              }
              else{
                 this.$store.commit('setNotifications',{message:'Make sure your password and retyped password are same',type:'error'})

              }

        //   }
        //   else{
        //     this.$store.commit('setNotifications',{message:'Fill in all *required fields ',type:'error'})

        //   }


    },
      
    async fetchCountries(){
        //   this.new_user.UserAddress.CountryId=this.countries[0].CountryId
        //   this.fetchBusinessProvinceByCountry(this.new_user.UserAddress.CountryId)

    },
    async fetchBusinessProvinceByCountry(id){
        let {data}= await UserRepository.getProvince(id)
            this.province=data.data
            this.new_user.UserAddress.ProvinceId=data.data[0].ProvinceId

        
        this.fetchBusinessCityByProvinec(this.new_user.UserAddress.ProvinceId,this.new_user.UserAddress.ProvinceId)

    },
    async fetchBusinessCityByProvinec(CountryId,ProvinceId){
        let {data}= await UserRepository.getCity({CountryId:CountryId,ProvinceId:ProvinceId})
        this.city=data.data
        this.new_user.UserAddress.CityId=data.data[0].CityId

        
        
    },
    showmodals(){
        if(this.new_user.CurrencyId==2){

         this.$bvModal.show('aud')
        }
        else{
         this.$bvModal.show('general')

        }
    },
    scrollMeTo(refName) {
        var elemntss=document.getElementById("legals")
        elemntss.scrollIntoView()
    // var element = this.$refs[refName];
    // var top = element.offsetTop;

    // window.scrollTo(0, top);
    },
    async fetchCurrency(){
        this.new_user.CurrencyId=this.currency[0].CurrencyId
    },
    async fetchIndustry(){
        this.new_user.IndustryTypeId=this.industry[0].IndustryTypeId
    }

  },
  watch:{
      currency(){
        if(this.currency.length>0){
          this.fetchCurrency()

          }
      },
      countries(){
        if(this.countries.length>0){
        //   this.fetchCountries()

          }
      },
      industry(){
          if(this.industry.length>0){
            this.fetchIndustry()

          }
      }
  },
   mounted(){
    //   this.fetchCountries()
      this.fetchCurrency()
      this.fetchIndustry()

  },
  created(){
  
  window.scrollTo(0, 0);

      this.fetchCountries()
      this.fetchCurrency()
      this.fetchIndustry()

  },
  data() {
    return {
    terms:false,
    retype_pass:'',
    isVerified: false,
    province:[],
    billingprovince:[],
    billingcity:[],
    city:[],

      tc_normal: t_c['tc_normal'].replace(/\n/g, '<br />'),
      tc_aus: t_c['tc_aus'].replace(/\n/g, '<br />'),
    
      isSame:false,
      new_user:{
        Email:'',
        FirstName:'',
        MiddleName:'',
        LastName:'',
        UserName:'',
        Password:'',
        MobileCode:'',
        MobileNumber:'',
        UserRoleId:'2',
        CurrencyId:'',
        UserAddress:{
			CountryId:'',
            CityId:'',
            ProvinceId:'',
            AddressName:'',
			PostalCode: ''
		},
        
        
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
            text: 'Individual Sign Up',
            active: true,
            to: '/individual-signup'
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