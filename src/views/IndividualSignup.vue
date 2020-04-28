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
                            <div class="card-body">
                                <div class="px-5 py-4">
                                    <p><strong class="text-head">Contact Information</strong></p>
                                    <label for="">This information will used to contact you about your background check.</label>
                                    <div class="row">
                                        <div class="col-md-6 col-12 mt-3">
                                            <input type="text" v-model="new_user.FirstName" class="form-control" placeholder="First Name*" >
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <input type="text" v-model="new_user.LastName" class="form-control" placeholder="Last Name*" >
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <input type="email" v-model="new_user.Email" class="form-control" placeholder="Email (UserID)*" >
                                        </div>
                                            <div class="col-md-2 col-12 mt-3 country">
                                                    <input  v-model="new_user.MobileCode" class="form-control" placeholder="92" >
                                            </div>
                                            <div class="col-md-4 mobile col-12 mt-3">
                                                <input type="tel" class="form-control" v-model="new_user.MobileNumber" placeholder="Mobile*" >
                                            </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="py-4 px-5">
                                    <p><strong class="text-head">Login Password</strong></p>
                                    <div class="row">
                                        <div class="col-md-6 col-12 mt-3">
                                            <input type="password" v-model="new_user.Password" placeholder="Password*" class="form-control">
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <input type="password" placeholder="Retype password*" class="form-control">
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
                                    <textarea class="form-control" v-model="new_user.UserAddress.AddressName" rows="5" style="resize:none" placeholder="Address"></textarea>
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-12 mt-3">
                                            <select class="form-control" v-model="new_user.UserAddress.CountryId">
                                                <option v-for="(item,i) in countries" :key="i" :value="item.CountryId">{{item.CountryName}}</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <select class="form-control" v-model="new_user.UserAddress.ProvinceId">
                                                <option v-for="(item,i) in province" :key="i" :value="item.ProvinceId">{{item.ProvinceName}}</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <select class="form-control" v-model="new_user.UserAddress.CityId">
                                                <option v-for="(item,i) in city" :key="i" :value="item.CityId">{{item.CityName}}</option>

                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <input v-model="new_user.UserAddress.PostalCode" type="text" class="form-control" placeholder="Postcode/zipcodes*">
                                        </div>
                                    </div>
                                </div>
                                <hr>

                                <hr>
                                <div class="row mt-3">
                                    <div class="col-md-4 offset-md-4 col-4 offset-2">
                                        <vue-recaptcha sitekey="6Lejzd0UAAAAAE_gyBh7TAFyJrTJcDaTdsXbRkoQ"></vue-recaptcha>
                                    </div>
                                </div>
                                <div class="col-12 text-center my-5">
                                    <b-form-checkbox class="text-primary"> Terms and Conditions</b-form-checkbox>
                                    <button class="btn btn-primary mb-5 mt-3" @click="signup()">Signup</button>
                                </div>
                            </div>
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
export default {
  name: "IndividualSignup",
  components: {
    Breadcrumb,
    VueRecaptcha
  },
    computed:{
      ...mapGetters(['currency','countries','industry'])
  },
  methods:{
      
    handleBusinessCountry(val){
        this.fetchBusinessProvinceByCountry(val.target.value)
    },
    handleBusinessProvince(val){
        this.fetchBusinessCityByProvinec(this.new_user.UserAddress.CountryId,val.target.value)
    },
    async signup(){
         
        console.log(this.new_user)
        let {data} = await UserRepository.createaccount(this.new_user)
        .catch(error => {
              console.log(error.response)
              this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'})
          });
          console.log(data)
          if(data.status=='Success'){
              this.$store.commit('setNotifications',{message:'User created successfully',type:'success'})

          }
          

    },
      
    async fetchCountries(){
          this.new_user.UserAddress.CountryId=this.countries[0].CountryId
          this.fetchBusinessProvinceByCountry(this.new_user.UserAddress.CountryId)

    },
    async fetchBusinessProvinceByCountry(id){
        let {data}= await UserRepository.getProvince(id)
            this.province=data.data
            this.new_user.UserAddress.ProvinceId=data.data[0].ProvinceId

        
        this.fetchBusinessCityByProvinec(this.new_user.UserAddress.ProvinceId,this.new_user.UserAddress.ProvinceId)

    },
    async fetchBusinessCityByProvinec(CountryId,ProvinceId){
        let {data}= await UserRepository.getCity({CountryId:CountryId,ProvinceId:ProvinceId})
        console.log(data)
        this.city=data.data
        console.log("fosho")
        this.new_user.UserAddress.CityId=data.data[0].CityId

        
        
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
      this.fetchCountries()
      this.fetchCurrency()
      this.fetchIndustry()

  },
  data() {
    return {
    province:[],
    billingprovince:[],
    billingcity:[],
    city:[],

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