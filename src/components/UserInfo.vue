<template>
    <div class="user-info">
        <div class="row">
            <div class="col-md-12">
                <div class="row my-5">
                    <div class="col-md-8 offset-md-2 col-12">
                        <div class="card">
                            <div class="card-head">
                                <div class="row">
                                    <div class="col-6 text-left">
                                        <h4 class="text-head pb-4 px-5">User Information</h4>
                                    </div>
                                    <!-- <div class="col-6 text-right">
                                        <button class="btn btn-primary text-right">Update</button>
                                    </div> -->
                                </div>
                                <hr>
                            </div>
                            <div class="card-body">
                                <div class="py-4 px-5">
                                    <p><strong class="text-head">Login Information</strong></p>
                                    <div class="row">
                                        <div class="col-md-12 col-12 mt-3">
                                            <input type="password" placeholder="Password" class="form-control">
                                        </div>
                                        <div class="col-md-12 col-12 mt-3">
                                            <input type="password" v-model="new_employer.Password" placeholder="New Password*" class="form-control">
                                        </div>
                                        <div class="col-md-12 col-12 mt-3">
                                            <input type="password" v-model="retypedpassword" placeholder="Retype New password*" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="px-5 py-4">
                                    <p><strong class="text-head">Company Information</strong></p>
                                    <div class="row">
                                        <div class="col-md-12 col-12 mt-3">
                                            <input type="text" v-model="new_employer.CompanyName" class="form-control" placeholder="Company Name" >
                                        </div>
                                        <div class="col-md-12 col-12 mt-3">
                                             <select class="form-control" v-model="new_employer.IndustryTypeId">
                                                <option v-for="(item,i) in industry" :key="i" :value="item.IndustryTypeId">{{item.IndustryTypeName}}</option>
                                            </select>
                                        </div>
                                        <div class="col-md-12 col-12 mt-3">
                                            <input type="text" class="form-control"  v-model="new_employer.BusinessRegistrationNo"  placeholder="Business Registration No" >
                                        </div>
                                    </div>
                                </div>
                                <hr>

                                <div class="px-5 py-4">
                                    <p><strong class="text-head">User Information</strong></p>
                                    <div class="row">
                                        <div class="col-md-6 col-12 mt-3">
                                            <input type="text" v-model="new_employer.FirstName" class="form-control" placeholder="First Name*" >
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <input type="text " v-model="new_employer.LastName" class="form-control" placeholder="Last Name*" >
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <input type="email" v-model="new_employer.Email" class="form-control" placeholder="Email (UserID)*" >
                                        </div>
                                            <div class="col-md-2 col-12 mt-3 country">
                                                <input type="tel" v-model="new_employer.MobileCode" class="form-control" placeholder="Mobile*" >
                                                
                                            </div>
                                            <div class="col-md-4 mobile col-12 mt-3">
                                                <input type="tel" v-model="new_employer.MobileNumber" class="form-control" placeholder="Mobile*" >
                                            </div>
                                    </div>
                                </div>
                                <hr>
                                <div v-if="userdetails.UserRoleCode=='INDIVIDUAL'" class="px-5 py-4">
                                    <p><strong class="text-head">User Address</strong></p>
                                    <textarea class="form-control" v-model="new_employer.UserAddress.AddressName" rows="5" style="resize:none" placeholder="Address"></textarea>
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-12 mt-3">
                                            <select v-model="new_employer.UserAddress.CountryId" @change="handleBusinessCountry" class="form-control">
                                                <option v-for="(item,i) in countries" :key="i" :value="item.CountryId">{{item.CountryName}}</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <select  v-model="new_employer.UserAddress.ProvinceId"  @change="handleBusinessProvince" class="form-control">
                                                <option v-for="(item,i) in businessprovince" :key="i" :value="item.ProvinceId">{{item.ProvinceName}}</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <select v-model="new_employer.UserAddress.CityId"  class="form-control">
                                                <option v-for="(item,i) in bussinesscity" :key="i" :value="item.CityId">{{item.CityName}}</option>
                                                
                                            </select>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div v-if="userdetails.UserRoleCode=='EMPLOYER'" class="px-5 py-4">
                                    <p><strong class="text-head">Registered Address</strong></p>
                                    <textarea class="form-control" v-model="new_employer.BusinessAddress.AddressName" rows="5" style="resize:none" placeholder="Address"></textarea>
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-12 mt-3">
                                            <select v-model="new_employer.BusinessAddress.CountryId" @change="handleBusinessCountry" class="form-control">
                                                <option v-for="(item,i) in countries" :key="i" :value="item.CountryId">{{item.CountryName}}</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <select  v-model="new_employer.BusinessAddress.ProvinceId"  @change="handleBusinessProvince" class="form-control">
                                                <option v-for="(item,i) in businessprovince" :key="i" :value="item.ProvinceId">{{item.ProvinceName}}</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <select v-model="new_employer.BusinessAddress.CityId"  class="form-control">
                                                <option v-for="(item,i) in bussinesscity" :key="i" :value="item.CityId">{{item.CityName}}</option>
                                                
                                            </select>
                                        </div>
                                        
                                    </div>
                                </div>
                                <hr>

                                <div class="px-5 py-4" v-if="userdetails.UserRoleCode=='EMPLOYER'">
                                    <p><strong class="text-head">Billing Address</strong></p>
                                    <b-form-checkbox class="text-gray" v-model="isSame" @change="handleSame"> same as Address</b-form-checkbox>
                                    <textarea class="form-control mt-3" v-model="new_employer.BusinessBillingAddress.AddressName" rows="5" style="resize:none" placeholder="Address"></textarea>
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-12 mt-3">
                                            <select v-model="new_employer.BusinessBillingAddress.CountryId" @change="handleBusinessBillingCountry" class="form-control">
                                                <option v-for="(item,i) in countries" :key="i" :value="item.CountryId">{{item.CountryName}}</option>

                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                             <select v-model="new_employer.BusinessBillingAddress.ProvinceId" @change="handleBusinessBillingProvince" class="form-control">
                                                <option v-for="(item,i) in billingprovince" :key="i" :value="item.ProvinceId">{{item.ProvinceName}}</option>

                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <select v-model="new_employer.BusinessBillingAddress.CityId" class="form-control">
                                                <option v-for="(item,i) in billingcity" :key="i" :value="item.CityId">{{item.CityName}}</option>

                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <input type="text" class="form-control" placeholder="Postcode/zipcodes*">
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="row mt-5">
                                    <div class="col-md-4 offset-md-4 col-4 offset-2">
                                        <vue-recaptcha sitekey="6LeRufEUAAAAAH3YkifekIVSHW44inX-Ud9K57h5" @verify="verified" :loadRecaptchaScript="true">
            
                                        </vue-recaptcha>
                                    </div>
                                </div>
                                <div class="col-12 text-center mt-3 mb-5">
                                    <button class="btn btn-primary mb-5 mt-3" @click="update()">Update</button>
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
import VueRecaptcha from 'vue-recaptcha';
import {mapGetters} from 'vuex'
import { RepositoryFactory } from '../Repository/RepositoryFactory'
const UserRepository = RepositoryFactory.get('user_repository')
export default {
    name: "UserInfo",
    data(){
        return{
            retypedpassword:'',
            isVerified: false,
            new_employer:'',
            businessprovince:[],
            billingprovince:[],
            billingcity:[],
            bussinesscity:[],
            isSame:false,
        }
    },
    components: {
        VueRecaptcha
    },
    methods:{
        verified(response) {
            if(response) {
                this.isVerified = true
            }
        },
        async update(){
            if(!this.isVerified) {
                this.$store.commit('setNotifications',{message:'Re-Captcha Required',type:'error'})
                return
            }
            // if(this.new_employer.Password==''){
            //     delete this.new_employer.Password
            // }
            
            if(this.new_employer.Password!=null) {
            if(this.new_employer.Password!=this.retypedpassword){
                this.$store.commit('setNotifications',{message:'New Password and retyped password should be same',type:'error'})
                return
            }
            }
            let {data}=await UserRepository.updateuser(this.new_employer)
            .catch(error => {
              this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'})
            });
            if(data.status=='Success'){
                this.$store.commit('setNotifications',{message:'User updated successfully',type:'success'})

            }
            this.isVerified = false
        },
        handleSame(e){
        if(e==true){
            this.billingprovince=this.businessprovince
            this.billingcity=this.bussinesscity
                this.new_employer.BusinessBillingAddress.CountryId=this.new_employer.BusinessAddress.CountryId;
                this.new_employer.BusinessBillingAddress.CityId=this.new_employer.BusinessAddress.CityId
                this.new_employer.BusinessBillingAddress.ProvinceId=this.new_employer.BusinessAddress.ProvinceId
                this.new_employer.BusinessBillingAddress.AddressName=this.new_employer.BusinessAddress.AddressName

            }


        },
         async fetchCountries(){
            if(this.userdetails.UserRoleCode=='INDIVIDUAL'){
               this.fetchBusinessProvinceByCountry(this.new_employer.UserAddress.CountryId,'first')

            }
            else{
               this.fetchBusinessProvinceByCountry(this.new_employer.BusinessAddress.CountryId,'first')

            }

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
            if(this.userdetails.UserRoleCode=='INDIVIDUAL'){
                 this.fetchBusinessCityByProvinec(this.new_employer.UserAddress.CountryId,val.target.value,'business')

            }
            else{
                 this.fetchBusinessCityByProvinec(this.new_employer.BusinessAddress.CountryId,val.target.value,'business')

            }
        },
        async fetchBusinessProvinceByCountry(id,type){
            let {data}= await UserRepository.getProvince(id)
            if(type=='first'){
                this.businessprovince=data.data
                this.billingprovince=data.data
            }
            else if(type=='business'){
                this.businessprovince=data.data
            }
            else if(type=='billing'){
                this.billingprovince=data.data

            }
             if(this.userdetails.UserRoleCode=='INDIVIDUAL'){
               this.new_employer.UserAddress
               this.fetchBusinessCityByProvinec(this.new_employer.UserAddress.CountryId,this.new_employer.UserAddress.ProvinceId,type)

             }
             else{
               this.fetchBusinessCityByProvinec(this.new_employer.BusinessAddress.CountryId,this.new_employer.BusinessAddress.ProvinceId,type)

             }

        },
        async fetchBusinessCityByProvinec(CountryId,ProvinceId,type){
        let {data}= await UserRepository.getCity({CountryId:CountryId,ProvinceId:ProvinceId})
         if(type=='first'){
        this.bussinesscity=data.data
        this.billingcity=data.data

        }
        else if(type=='business'){
        this.bussinesscity=data.data
         
        }
        else if(type=='billing'){
        this.billingcity=data.data
         
        }
        
    },
    },
    watch:{
        currency(){
            if(this.currency.length>0){
            // this.fetchCurrency()

            }
        },
        countries(){
            if(this.countries.length>0){
            this.fetchCountries()

            }
        },
        industry(){
            if(this.industry.length>0){
                // this.fetchIndustry()

            }
        },
        userdetails(){
            if(this.userdetails!=null){
                this.new_employer= {...this.userdetails}
               
                this.fetchCountries()

            }
        }
    },
    created(){
        this.new_employer= {...this.userdetails}
       
        this.fetchCountries()
    },
    mounted(){
        this.new_employer= {...this.userdetails}
       
        this.fetchCountries()
    },
    computed:{
        ...mapGetters(['currency','countries','industry','userdetails'])

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