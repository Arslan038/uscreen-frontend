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
                                    <div class="col-6 text-right">
                                        <button class="btn btn-primary text-right">Update</button>
                                    </div>
                                </div>
                                <hr>
                            </div>
                            <div class="card-body">
                                <div class="py-4 px-5">
                                    <p><strong class="text-head">Login Information</strong></p>
                                    <div class="row">
                                        <div class="col-md-12 col-12 mt-3">
                                            <input type="password" placeholder="Password*" class="form-control">
                                        </div>
                                        <div class="col-md-12 col-12 mt-3">
                                            <input type="password" placeholder="New Password*" class="form-control">
                                        </div>
                                        <div class="col-md-12 col-12 mt-3">
                                            <input type="password" placeholder="Retype password*" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="px-5 py-4">
                                    <p><strong class="text-head">Company Information</strong></p>
                                    <div class="row">
                                        <div class="col-md-12 col-12 mt-3">
                                            <input type="text" class="form-control" placeholder="Company Name" >
                                        </div>
                                        <div class="col-md-12 col-12 mt-3">
                                            <select class="form-control">
                                                <option :value="null">-Select Industry Type-</option>
                                                <option value="Industry 1">Industry 1</option>
                                                <option value="Industry 2">Industry 2</option>
                                            </select>
                                        </div>
                                        <div class="col-md-12 col-12 mt-3">
                                            <input type="text" class="form-control" placeholder="Business Registration No" >
                                        </div>
                                    </div>
                                </div>
                                <hr>

                                <div class="px-5 py-4">
                                    <p><strong class="text-head">User Information</strong></p>
                                    <div class="row">
                                        <div class="col-md-6 col-12 mt-3">
                                            <input type="text" class="form-control" placeholder="First Name*" >
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <input type="text" class="form-control" placeholder="Last Name*" >
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <input type="email" class="form-control" placeholder="Email (UserID)*" >
                                        </div>
                                            <div class="col-md-2 col-12 mt-3 country">
                                                <select class="form-control">
                                                    <option :value="null">-Country-</option>
                                                    <option value="USA">USA</option>
                                                    <option value="Canada">Canada</option>
                                                </select>
                                            </div>
                                            <div class="col-md-4 mobile col-12 mt-3">
                                                <input type="tel" class="form-control" placeholder="Mobile*" >
                                            </div>
                                    </div>
                                </div>
                                <hr>

                                <div class="px-5 py-4">
                                    <p><strong class="text-head">Registered Address</strong></p>
                                    <textarea class="form-control" rows="5" style="resize:none" placeholder="Address"></textarea>
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-12 mt-3">
                                            <select class="form-control">
                                                <option :value="null">-Select Country-</option>
                                                <option value="USA">USA</option>
                                                <option value="Canada">Canada</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <select class="form-control">
                                                <option :value="null">-Select State/Province-</option>
                                                <option value="North Dakota">North Dakota</option>
                                                <option value="South Dakota">South Dakota</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <select class="form-control">
                                                <option :value="null">-Select City-</option>
                                                <option value="New York">New York</option>
                                                <option value="Texas">Texas</option>
                                            </select>
                                        </div>
                                        
                                    </div>
                                </div>
                                <hr>

                                <div class="px-5 py-4">
                                    <p><strong class="text-head">Billing Address</strong></p>
                                    <b-form-checkbox class="text-gray"> same as Address</b-form-checkbox>
                                    <textarea class="form-control mt-3" rows="5" style="resize:none" placeholder="Address"></textarea>
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-12 mt-3">
                                            <select class="form-control">
                                                <option :value="null">-Select Country-</option>
                                                <option value="USA">USA</option>
                                                <option value="Canada">Canada</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <select class="form-control">
                                                <option :value="null">-Select State/Province-</option>
                                                <option value="North Dakota">North Dakota</option>
                                                <option value="South Dakota">South Dakota</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-12 mt-3">
                                            <select class="form-control">
                                                <option :value="null">-Select City-</option>
                                                <option value="New York">New York</option>
                                                <option value="Texas">Texas</option>
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
                                        <vue-recaptcha sitekey="6Lejzd0UAAAAAE_gyBh7TAFyJrTJcDaTdsXbRkoQ"></vue-recaptcha>
                                    </div>
                                </div>
                                <div class="col-12 text-center mt-3 mb-5">
                                    <button class="btn btn-primary mb-5 mt-3">Update</button>
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
export default {
    name: "UserInfo",
    components: {
        VueRecaptcha
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