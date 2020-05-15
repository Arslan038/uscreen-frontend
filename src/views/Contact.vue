<template>
    <div class="contact">
        <div class="row">
            <div class="col-12">
                <Breadcrumb :items="items" class="px-5" />
            </div>
        </div>
        <div class="row my-5 pt-5">
            <div class="col-12 text-center">
                <h3><strong class="text-head">Contact First Advantage</strong></h3>
            </div>
        </div>
        <div class="row mx-5">
            <div class="col-md-3 col-12 mt-3">
                <h2><strong class="text-head">Phone</strong></h2>
                <div class="col-12 mt-4">
                    <p class="title"><i class="fa fa-phone-volume text-primary mr-2"></i> <strong>Phone</strong></p>
                    <p class="address text-gray">
                    Australia: <a href="tel:+61290174300">+612.9017.4300</a><br>
                    Hong Kong: <a href="tel:+85239786888">+852.3978.6888</a><br>
                    Malaysia: <a href="tel:+60356244390">+603.5624.4390</a><br>
                    Zealand: <a href="tel:+6494385232">+64.9438.5232</a> /Toll Free: <a href="tel:0800330033">0800.330.033</a><br>
                    Philippines: <a href="tel:+6328592111">+63.2859.2111</a><br>
                    Singapore: <a href="tel:+6566537200">+65.6653.7200</a>
                    </p>
                </div>
                <div class="col-12 mt-4">
                    <p class="title"><i class="far fa-clock text-primary mr-2"></i> <strong>Operating Hours</strong></p>
                    <p class="address text-gray">
                    Mon-Fri: 9:00am - 5:00pm<br>
                    Sat-Sun: 11:00am - 4:00pm
                    </p> 
                </div>
            </div>
            <div class="col-md-8 col-12 mt-3 mb-5">
                <h2 class="text-center"><strong class="text-head">Email</strong></h2>
                <input type="text" class="form-control mt-3" v-model="help_obj.Subject" placeholder="Subject*">
                <input type="email" class="form-control mt-3" placeholder="Email*" v-model="help_obj.Email">
                <textarea cols="30" rows="7" placeholder="Message" class="mt-3 form-control" v-model="help_obj.Message"></textarea>
                <div class="row mt-4">
                    <div class="col-md-12">
                        <vue-recaptcha sitekey="6LeRufEUAAAAAH3YkifekIVSHW44inX-Ud9K57h5" @verify="verified" :loadRecaptchaScript="true">
            
                        </vue-recaptcha>
                    </div>
                </div>
                <button class="btn btn-primary mt-3" @click="sendMessage()">Send Message</button>
            </div>
        </div>

    </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import VueRecaptcha from 'vue-recaptcha';
import { RepositoryFactory } from '../Repository/RepositoryFactory'
const UserRepository = RepositoryFactory.get('user_repository')
export default {
  name: "Contact",
  components: {
    Breadcrumb,
    VueRecaptcha
  },
  methods:{
      verified(response) {
        if(response) {
            this.isVerified = true
        }
        },
      async sendMessage(){
        if(!this.isVerified) {
            this.$store.commit('setNotifications',{message:'Re-Captcha Required',type:'error'})
            return
        }
        let {data} = await UserRepository.helpask(this.help_obj)
        .catch(error => {
              this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'})
          });

        if(data!=null){
            this.$store.commit('setNotifications',{message:'Query submitted succesffuly',type:'success'})

          }
          this.isVerified = false
      }
  },
  data() {
    return {
        isVerified: false,
        help_obj:{
           Email:'',
           Message:'',
           Subject:''
       },
      items: [
        {
            text: 'Home',
            active: false,
            to: '/'
        },
        {
            text: 'Contact Us',
            active: true,
            to: '/contact'
        }
      ],
    }
  },
  created() {
    window.scrollTo(0,0)
  },
}
</script>
<style scoped>
.title {
    font-size: 18px;
}
.address {
    padding-left: 24px;
    margin-top: -5px;
}
input {
    height: 45px;
}
.btn-primary {
    border-radius: 25px;
    padding: 10px 40px;
}
</style>