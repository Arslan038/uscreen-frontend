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
                                <div class="py-4 px-5">
                                    <p><strong class="text-head">Login Password</strong></p>
                                    <div class="row">
                                        <div class="col-md-6 col-12 mt-3">
                                            <input type="password" placeholder="Password*" class="form-control">
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
                                            <select class="form-control">
                                                <option :value="null">-Select Currency-</option>
                                                <option value="USD">USD</option>
                                                <option value="CAD">CAD</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <hr>

                                <div class="px-5 py-4">
                                    <p><strong class="text-head">Address</strong></p>
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
                                        <div class="col-md-6 col-12 mt-3">
                                            <input type="text" class="form-control" placeholder="Postcode/zipcodes*">
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
                                <div class="row mt-3">
                                    <div class="col-md-4 offset-md-4 col-4 offset-2">
                                        <vue-recaptcha sitekey="6Lejzd0UAAAAAE_gyBh7TAFyJrTJcDaTdsXbRkoQ"></vue-recaptcha>
                                    </div>
                                </div>
                                <div class="col-12 text-center my-5">
                                    <b-form-checkbox class="text-primary"> Terms and Conditions</b-form-checkbox>
                                    <button class="btn btn-primary mb-5 mt-3">Next</button>
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
export default {
  name: "IndividualSignup",
  components: {
    Breadcrumb,
    VueRecaptcha
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