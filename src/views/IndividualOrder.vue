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
                                <button class="btn btn-secondary">Need help?</button>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="card-body">
                        <div class="pl-5 pr-4">

                        
                        <p><strong class="text-head">Platinum Package Items</strong></p>
                        <p class="text-gray">Please select the associated country of interest of the checking.</p>

                        <div class="row">
                            <div class="col-md-12 col-xl-4 col-12 mt-3">
                                <p><strong class="text-blue">Bankruptcy Check</strong></p>
                            </div>
                            <div class="col-md-12 col-xl-6 offset-xl-2 col-12">
                                <div v-for="(b, i) in b_country" :key="i" class="countries">
                                    <i v-if="i > 0" class="fa fa-trash trash" @click="removeBankCountry(i)"></i><select class="form-control mt-3" v-model="bankruptcy.countries[i]">
                                        <option :value="null">-Country-</option>
                                        <option value="USA">USA</option>
                                        <option value="Canada">Canada</option>
                                    </select>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-6">
                                        <button v-if="bankruptcy.show" class="btn btn-primary" @click="addBankruptcyCountry">Add Country</button>
                                    </div>
                                    <div class="col-6 text-right">
                                        <span class="text-right text-gray">(Can add Upto 5) </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row mt-3">
                            <div class="col-md-12 col-xl-4 col-12 mt-3">
                                <p><strong class="text-blue">Civii Litigation Check</strong></p>
                            </div>
                            <div class="col-md-12 col-xl-6 offset-xl-2 col-12">
                                <div v-for="(b, i) in c_country" :key="i" class="countries">
                                    <i v-if="i > 0" class="fa fa-trash trash" @click="removeCLCountry(i)"></i><select class="form-control mt-3" v-model="civil.countries[i]">
                                        <option :value="null">-Country-</option>
                                        <option value="USA">USA</option>
                                        <option value="Canada">Canada</option>
                                    </select>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-6">
                                        <button v-if="civil.show" class="btn btn-primary" @click="addCLCountry">Add Country</button>
                                    </div>
                                    <div class="col-6 text-right">
                                        <span class="text-right text-gray">(Can add Upto 5) </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row mt-3">
                            <div class="col-md-12 col-xl-4 col-12 mt-3">
                                <p><strong class="text-blue">Credit Check</strong></p>
                            </div>
                            <div class="col-md-12 col-xl-6 offset-xl-2 col-12">
                                <div v-for="(b, i) in cr_country" :key="i" class="countries">
                                    <i v-if="i > 0" class="fa fa-trash trash" @click="removeCRCountry(i)"></i><select class="form-control mt-3" v-model="credit.countries[i]">
                                        <option :value="null">-Country-</option>
                                        <option value="USA">USA</option>
                                        <option value="Canada">Canada</option>
                                    </select>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-6">
                                        <button v-if="credit.show" class="btn btn-primary" @click="addCRCountry">Add Country</button>
                                    </div>
                                    <div class="col-6 text-right">
                                        <span class="text-right text-gray">(Can add Upto 5) </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row mt-3">
                            <div class="col-md-12 col-xl-4 col-12 mt-3">
                                <p><strong class="text-blue">Criminal Check</strong></p>
                            </div>
                            <div class="col-md-12 col-xl-6 offset-xl-2 col-12">
                                <div v-for="(b, i) in cm_country" :key="i" class="countries">
                                    <i v-if="i > 0" class="fa fa-trash trash" @click="removeCMCountry(i)"></i><select class="form-control mt-3" v-model="criminal.countries[i]">
                                        <option :value="null">-Country-</option>
                                        <option value="USA">USA</option>
                                        <option value="Canada">Canada</option>
                                    </select>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-6">
                                        <button v-if="criminal.show" class="btn btn-primary" @click="addCMCountry">Add Country</button>
                                    </div>
                                    <div class="col-6 text-right">
                                        <span class="text-right text-gray">(Can add Upto 5) </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-md-6 col-xl-4 col-12 mt-3">
                                <p><strong class="text-blue">Global Sanctions</strong></p>
                            </div>
                            <div class="col-md-6 col-xl-6 offset-xl-2 col-12">
                                <p class="text-head mt-3">NA</p>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-md-6 col-xl-4 col-12 mt-3">
                                <p><strong class="text-blue">Passport Check</strong></p>
                            </div>
                            <div class="col-md-6 col-xl-6 offset-xl-2 col-12">
                                <p class="text-head mt-3">NA</p>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-md-6 col-xl-4 col-12 mt-3">
                                <p><strong class="text-blue">Global Media</strong></p>
                            </div>
                            <div class="col-md-6 col-xl-6 offset-xl-2 col-12">
                                <p class="text-head mt-3">NA</p>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-md-12 col-xl-4 col-12 mt-3">
                                <p><strong class="text-blue">Education Check</strong></p>
                            </div>
                            <div class="col-md-12 col-xl-6 offset-xl-2 col-12">
                                
                                <select class="form-control mt-3">
                                    <option :value="null">-Country-</option>
                                    <option value="USA">USA</option>
                                    <option value="Canada">Canada</option>
                                </select>
                            </div>
                        </div>




                        <div class="row mt-3 mb-5">
                            <div class="col-md-4 col-12 mt-3">
                                <p><strong class="text-blue">Employment Check</strong></p>
                            </div>
                            <div class="col-md-12 col-xl-6 offset-xl-2 col-12">
                                <div v-for="(b, i) in e_country" :key="i" class="countries">
                                    <i v-if="i > 0" class="fa fa-trash trash" @click="removeEMCountry(i)"></i><select class="form-control mt-3" v-model="employment.countries[i]">
                                        <option :value="null">-Country-</option>
                                        <option value="USA">USA</option>
                                        <option value="Canada">Canada</option>
                                    </select>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-6">
                                        <button v-if="employment.show" class="btn btn-primary" @click="addEMCountry">Add Country</button>
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
                                    <input type="text" class="form-control" placeholder="First Name*" >
                                </div>
                                <div class="col-md-12 col-lg-12 col-xl-6 col-12 mt-3">
                                    <input type="text" class="form-control" placeholder="Last Name*" >
                                </div>
                                <div class="col-md-12 col-lg-12 col-xl-6 col-12 mt-3">
                                    <input type="email" class="form-control" placeholder="Email (UserID)*" >
                                </div>
                                <div class="col-md-12 col-lg-12 col-xl-2 col-12 mt-3">
                                    <select class="form-control">
                                        <option :value="null">-Country-</option>
                                        <option value="USA">USA</option>
                                        <option value="Canada">Canada</option>
                                    </select>
                                </div>
                                <div class="col-xl-4 mobile col-12 mt-3">
                                    <input type="tel" class="form-control" placeholder="Mobile*" >
                                </div>  
                            </div>
                        </div>

                        <hr>

                        <div class="pl-5 pr-3 mb-5 pt-3">
                            <div class="row">
                                <div class="col-md-12">
                                    <p><strong class="text-head">Country of Residence</strong></p>
                                    <select class="form-control">
                                        <option :value="null">-Country-</option>
                                        <option value="USA">USA</option>
                                        <option value="Canada">Canada</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-5">
                            <div class="col-12 text-center">
                                <button class="btn btn-primary next">Next</button>
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
export default {
    name: "IndividualOrder",
    components: {
        Breadcrumb
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
        addBankruptcyCountry() {
            this.b_country++
            if(this.b_country == 5) {
                this.bankruptcy.show = false
            }
        },
        addCLCountry() {
            this.c_country++
            if(this.c_country == 5) {
                this.civil.show = false
            }
        },
        addCRCountry() {
            this.cr_country++
            if(this.cr_country == 5) {
                this.credit.show = false
            }
        },
        addCMCountry() {
            this.cm_country++
            if(this.cm_country == 5) {
                this.criminal.show = false
            }
        },
        addEMCountry() {
            this.e_country++
            if(this.e_country == 5) {
                this.employment.show = false
            }
        },
        removeBankCountry(i) {
            this.b_country--
            if(this.b_country < 5) {
                this.bankruptcy.show = true
            }
            console.log(this.b_country)
            this.bankruptcy.countries.splice(i, 1)
        },
        removeCLCountry(i) {
            this.c_country--
            if(this.c_country < 5) {
                this.civil.show = true
            }
            this.bankruptcy.countries.splice(i, 1)
        },
        removeCRCountry(i) {
            this.cr_country--
            if(this.cr_country < 5) {
                this.credit.show = true
            }
            this.credit.countries.splice(i, 1)
        },
        removeCMCountry(i) {
            this.cm_country--
            if(this.cm_country < 5) {
                this.criminal.show = true
            }
            this.criminal.countries.splice(i, 1)
        },
        removeEMCountry(i) {
            this.e_country--
            if(this.e_country < 5) {
                this.employment.show = true
            }
            this.employment.countries.splice(i, 1)
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
.country {
    padding-right: 0 !important;
}
</style>