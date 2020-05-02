<template>
    <div class="employer-order">
        <div class="row">
            <div class="col-12">
                <Breadcrumb :items="items" class="px-5" />
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 text-center">
                <h4><strong class="text-head">Employer's Order</strong></h4>
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
                                <button class="btn btn-secondary">Need help?</button>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="card-body">
                        <div class="pl-5 pr-4">

                        
                        <p><strong class="text-head">{{selected_package.PackageServiceName}} Package Items</strong></p>
                        <p class="text-gray">Please select the associated country of interest of the checking.</p>

                        <div class="row" v-for="(item,i) in packageitems" :key="i">
                            <div class="col-md-12 col-xl-4 col-12 mt-3">
                                <p><strong class="text-blue">{{item.PackageServiceItemName}}</strong></p>
                            </div>
                            <div class="col-md-12 col-xl-6 offset-xl-2 col-12">
                                <div v-for="(b, j) in b_countryarr[i].b_country" :key="j" class="countries">
                                    <i v-if="j > 0" class="fa fa-trash trash" @click="removeBankCountry(i,j)"></i>
                                    <select class="form-control mt-3" v-model="b_countryarr[i].countries[j]">
                                        <option v-for="(cn_item,j) in countryitems[i].Pricing" :key="j" :value="cn_item.CountryCode">{{cn_item.CountryName}}</option>
                                    </select>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-6">
                                        <button v-if="b_countryarr[i].show" class="btn btn-primary" @click="addBankruptcyCountry(i)">Add Country</button>
                                    </div>
                                    <div class="col-6 text-right">
                                        <span class="text-right text-gray">(Can add Upto 5) </span>
                                    </div>
                                </div>
                            </div>
                        </div>
  
                        </div>
                        <hr>

                        <div class="pl-5 pr-3 pt-3 mb-5">
                            <div class="row">
                                <div class="col-md-12">
                                    <p><strong class="text-head">Candidate Information</strong></p>  
                                    <p class="text-gray">This information will be used to contact your candidate about their background check.</p>
                                </div>
                                <div class="col-md-12 col-lg-12 col-xl-6 col-12 mt-3">
                                    <input type="text" class="form-control" v-model="new_order.FirstName" placeholder="First Name*" >
                                </div>
                                <div class="col-md-12 col-lg-12 col-xl-6 col-12 mt-3">
                                    <input type="text" class="form-control" v-model="new_order.LastName" placeholder="Last Name*" >
                                </div>
                                <div class="col-md-12 col-lg-12 col-xl-6 col-12 mt-3">
                                    <input type="email" class="form-control" v-model="new_order.Email" placeholder="Email (UserID)*" >
                                </div>
                                <div class="col-md-12 col-lg-12 col-xl-2 col-12 mt-3">
                                    <input  class="form-control" v-model="new_order.MobileCode" placeholder="09" >
                                    
                                </div>
                                <div class="col-xl-4 mobile col-12 mt-3">
                                    <input type="tel" class="form-control" v-model="new_order.MobileNumber" placeholder="Mobile*" >
                                </div>  
                            </div>
                        </div>

                        <hr>

                        <div class="pl-5 pr-3 mb-5 pt-3">
                            <div class="row">
                                <div class="col-md-12">
                                    <p><strong class="text-head">Client Reference</strong></p>
                                    <input type="text" v-model="new_order.Reference[0].EmployeeId" class="form-control mt-3" placeholder="Cost Centre/EmployeeID*">
                                    <input type="text" v-model="new_order.Reference[1].EmployeeId" class="form-control mt-3" placeholder="Cost Centre/EmployeeID*">
                                </div>
                            </div>
                        </div>
                        <hr>

                        <div class="pl-5 pr-3 mb-5 pt-3">
                            <div class="row">
                                <div class="col-md-12">
                                    <p><strong class="text-head">Country of Hire</strong></p>
                                    <select v-model="new_order.CountryId" class="form-control">
                                        <option v-for="(item,i) in countries" :key="i" :value="item.CountryId">{{item.CountryName}}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <hr>

                        <div class="pl-5 pr-3 mb-5 pt-3">
                            <div class="row">
                                <div class="col-md-12">
                                    <p><strong class="text-head">Requestor</strong></p>
                                    <input type="text" class="form-control mt-3" v-model="new_order.Requestor" placeholder="Requester Name*">
                                </div>
                            </div>
                        </div>

                        <div class="row mb-5">
                            <div class="col-12 text-center">
                                <button class="btn btn-primary next" @click="moveNext()">Next</button>
                            </div>
                        </div>
                        
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
    name: "EmployerOrder",
    props:['selected_package'],
    computed:{
        ...mapGetters(['countries','loggedUser'])
    },
    components: {
        Breadcrumb
    },
    created(){
        console.log(this.selected_package)
        this.new_order.PackageServiceCode=this.selected_package.PackageServiceCode
        this.new_order.UserKey=this.loggedUser.UserKey

        this.getPackageItems()
        this.getPackageCountry()

    },
    data() {
        return {
            packageitems:[],
            countryitems:[],
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
                Reference: [
                    {EmployeeId: ""},
                    {EmployeeId: ""}
                ],
                Requestor: ""

                
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
                    to: '/employer-order'
                }
            ],
            b_countryarr:[],
           
        }
    },
    methods: {
        async moveNext(){
            // let items=[]
            let amounts=[]
            let extras=[]
            this.b_countryarr.forEach((item,i)=>{
                if(item.countries.length>0){
                
                item.countries.forEach(opds=>{   
                 amounts.push(this.countryitems[i].Pricing.find(cunts=>cunts.CountryCode==opds).Amount)
                })
                extras.push({amounts:amounts,PackageServiceItemName:item.name})
                this.new_order.PackageServiceItems.push({ComponentType:item.type,Countries:item.countries})
                amounts=[]
                }
            })
            console.log(extras)
            this.$router.push({name:'OrderConfirmation',params:{selected_order:this.new_order,extras:extras}})

           
        },
        removeBankCountry(arrindex,j) {
            this.b_countryarr[arrindex].b_country--
           
            if(this.b_countryarr[arrindex].b_country < 5) {
                this.b_countryarr[arrindex].show = true
            }
            this.b_countryarr[arrindex].countries.splice(j, 1)
        },
        async getPackageItems(){
            let {data}=await OrderRepository.getPackageItems(this.selected_package.PackageServiceId)
            this.packageitems=data.data
            this.packageitems.forEach(item=>{
            this.b_countryarr.push({name:item.PackageServiceItemName,type:item.ComponentType,b_country:1,countries:[],show:true})
            })
        },
        async getPackageCountry(){
            let {data}=await OrderRepository.getPackageItemCountries(this.selected_package.PackageServiceId)
            this.countryitems=data.data
        },
        
        addBankruptcyCountry(arrindex) {
            this.b_countryarr[arrindex].b_country++

            if(this.b_countryarr[arrindex].b_country == 5) {
                this.b_countryarr[arrindex].show = false

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