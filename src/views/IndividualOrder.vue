<template>
    <div class="individual-order">
        <div class="row">
            <div class="col-12">
                <Breadcrumb :items="items" class="px-5" />
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 text-center">
                <h4><strong class="text-head">Individual's Order</strong></h4>
            </div>
        </div>
        <div class="row my-5 mx-3">
            <div class="col-xl-6 col-lg-6 col-md-12 offset-xl-2 offset-lg-2 col-12 mt-3">
                <div class="card shadow">
                    <div class="card-head pt-3">
                        <div class="row pl-5 pr-3 my-4">
                            <div class="col-lg-6 col-6 col-md-6 col-xl-8">
                                <h4 class=""><strong class="text-head">Order Information</strong></h4>
                            </div>
                            <div class="col-6 col-xl-4 col-lg-6 col-md-6 text-right">
                                <!-- <button class="btn btn-secondary">Need help?</button> -->
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="card-body">
                        <div class="pl-5 pr-4">

                        
                        <p><strong class="text-head">{{selected_package.PackageServiceName}} Package Items</strong></p>
                        <p class="text-gray">Please select the associated country of interest of the checking.</p>

                        <div v-if="item.IsActive==1" class="row" v-for="(item,i) in packageitems" :key="i">
                            <div class="col-md-12 col-xl-4 col-12 mt-3">
                                <p><strong class="text-blue">{{item.PackageServiceItemName}}</strong></p>
                            </div>
                            <div v-if="b_countryarr[i].countrylimit>0" class="col-md-12 col-xl-6 offset-xl-2 col-12">
                                <div v-for="(b, j) in b_countryarr[i].b_country" :key="j" class="countries">
                                    <i v-if="j > 0" class="fa fa-trash trash" @click="removeBankCountry(i,j)"></i>
                                    <select class="form-control mt-3" v-model="b_countryarr[i].countries[j]">
                                        <option v-for="(cn_item,k) in countryitems[i].Pricing" :key="k" :value="cn_item.CountryCode">{{cn_item.CountryName}}</option>
                                    </select>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-6">
                                        <button v-if="b_countryarr[i].show && b_countryarr[i].b_country != b_countryarr[i].countrylimit" class="btn btn-primary" @click="addBankruptcyCountry(i)">Add Country</button>
                                    </div>
                                    <div class="col-6 pr-0 text-right">
                                        <span class="text-right text-gray">(Can add Upto {{b_countryarr[i].countrylimit}}) </span>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="mt-2 col-md-12 col-xl-6 offset-xl-2 col-12">
                               <select disabled  class="form-control mt-3" >
                                        <option ></option>
                                </select> 
                            </div>
                        </div>
                    </div>
                       <form v-on:submit.prevent="moveNext()">
                        <div class="pl-5 pr-3 pt-3 mb-5">
                            <div class="row">
                                <div class="col-md-12">
                                    <p><strong class="text-head">Candidate Information</strong></p>  
                                    <p class="text-gray">This information will be used to contact your candidate about their background check.</p>
                                </div>
                               <div class="col-md-12 col-lg-12 col-xl-6 col-12 mt-3">
                                    <input required type="text" class="form-control" v-model="new_order.FirstName" placeholder="First Name*" >
                                </div>
                                <div class="col-md-12 col-lg-12 col-xl-6 col-12 mt-3">
                                    <input required type="text" class="form-control" v-model="new_order.LastName" placeholder="Last Name*" >
                                </div>
                                <div class="col-md-12 col-lg-12 col-xl-6 col-12 mt-3">
                                    <input required type="email" class="form-control" v-model="new_order.Email" placeholder="Email (UserID)*" >
                                </div>
                                <div class="col-md-12 col-lg-12 col-xl-2 col-12 mt-3">
                                    <input required  class="form-control" v-model="new_order.MobileCode" placeholder="" >
                                
                                </div>
                                <div class="col-xl-4 mobile col-12 mt-3">
                                    <input required type="tel" class="form-control" v-model="new_order.MobileNumber" placeholder="Mobile*" >
                                </div>  
                            </div>
                        </div>


                        <hr>

                        <div class="pl-5 pr-3 mb-5 pt-3">
                            <div class="row">
                                <div class="col-md-12">
                                    <p><strong class="text-head">Country of Residence</strong></p>
                                    <select required v-model="new_order.CountryId" class="form-control">
                                        <option v-for="(item,i) in countries" :key="i" :value="item.CountryId">{{item.CountryName}}</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-5">
                            <div class="col-12 text-center">
                                <button class="btn btn-primary next" type="submit" >Next</button>
                            </div>
                        </div>
                        </form>
                        
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-12 text-md-left text-center mt-3">
                <img src="../assets/Bitmaafsdgsp@2x.png" class="img-fluid" width="65%" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import {mapGetters} from 'vuex'
import OrderRepository from '../Repository/OrderRepository'
export default {
    name: "IndividualOrder",
    props:['selected_package'],
    computed:{
        ...mapGetters(['countries','loggedUser','userdetails'])
    },
    components: {
        Breadcrumb
    },
    created(){
        window.scrollTo(0,0)
        window.onbeforeunload = function() {
            return "Data will be lost if you leave the page, are you sure?";
        };
        if(this.selected_package==null){
            
                if(JSON.parse(localStorage.getItem("userdetails"))!=null){
                    if(JSON.parse(localStorage.getItem("userdetails")).UserRoleCode=='INDIVIDUAL'){
                        this.$router.push({path:'/individual-packages'})
                    }
                    else{
                        this.$router.push({path:'/employer-packages'})

                    }
                }
        }
        this.new_order.PackageServiceCode=this.selected_package.PackageServiceCode
        this.new_order.UserKey=this.loggedUser.UserKey

        this.getPackageItems()

    },
    data() {
        return {
            packageitems:[],
            countryitems:[],
            b_countryarr:[],
            new_order:{
                PackageServiceCode: "",
                PackageServiceItems : [],
                UserKey: "",
                FirstName: "",
                LastName: "",
                Email: "",
                CountryId: "",
                MobileCode: "",
                MobileNumber: "",
                
            },
            items: [
                {
                    text: 'Home',
                    active: false,
                    to: '/'
                },
                {
                    text: 'Order Form',
                    active: true,
                    to: '/individual-order'
                }
            ],
            b_country: 1,
            c_country: 1,
            cr_country: 1,
            cm_country: 1,
            e_country: 1,
            bankruptcy: {
                show: true,
                countries: []
            },
            civil: {
                show: true,
                countries: []
            },
            credit: {
                show: true,
                countries: []
            },
            criminal: {
                show: true,
                countries: []
            },
            employment: {
                show: true,
                countries: []
            }
        }
    },
    methods: {
       async moveNext(){
            // let items=[]
            this.b_countryarr.forEach((item,i)=>{
                if(item.countries.length>0){ 
                    // to remove
                this.new_order.PackageServiceItems.push({ComponentType:item.type,Countries:item.countries})
                }
                else if(item.IsActive==1 && item.countries.length<1){
                this.new_order.PackageServiceItems.push({ComponentType:item.type})

                }
            })
            console.log(this.new_order)
            this.$router.push({name:'OrderConfirmation',params:{selected_order:this.new_order}})

           
        },
        removeBankCountry(arrindex,j) {
            console.log(j)
            this.b_countryarr[arrindex].b_country--
           
            if(this.b_countryarr[arrindex].b_country < this.b_countryarr[arrindex].countrylimit) {
                this.b_countryarr[arrindex].show = true

            }
            this.b_countryarr[arrindex].countries.splice(j, 1)
        },
        async getPackageItems(){
            let {data}=await OrderRepository.getPackageItems({PackageServiceId:this.selected_package.PackageServiceId,UserKey:this.loggedUser.UserKey})
            this.packageitems=data.data     
            this.countryitems=data.data

            this.packageitems.forEach(item=>{
            this.b_countryarr.push({IsActive:item.IsActive,countrylimit:item.countrylimit,name:item.PackageServiceItemName,type:item.ComponentType,b_country:1,countries:[],show:true})
            })
        },
        
        addBankruptcyCountry(arrindex) {
            if(this.b_countryarr[arrindex].b_country > this.b_countryarr[arrindex].countrylimit) {
                this.b_countryarr[arrindex].show = false

            }
            console.log(this.b_countryarr[arrindex].b_country)
            
            if(this.b_countryarr[arrindex].b_country == this.b_countryarr[arrindex].countrylimit) {
                this.b_countryarr[arrindex].show = false

            }
            else{
                this.b_countryarr[arrindex].b_country++

            }
        },
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
.country {
    padding-right: 0 !important;
}
</style>