<template>
    <div class="login">
        <div class="row">
            <div class="col-12">
                <Breadcrumb :items="items" class="px-5" />
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div v-if="success==false" class="col-md-12">
                    <h4 class="text-center text-head mt-5">Forget Password</h4>
                    <div class="card my-5">
                        <div class="card-body pt-3 pb-5 shadow">
                            <div class="row">
                                <div class="col-md-6 offset-md-3 col-12">
                                    <input type="email" class="form-control mt-3" v-model="forgetObj.Email" placeholder="Email*">
                                    <!-- <input type="password" v-model="forgetObj.Password" class="form-control mt-3" placeholder="Password"> -->
                                    <!-- <p class="text-primary mt-2">Forget Password</p> -->
                                </div>
                                <div class="col-12 text-center">
                                    <button class="btn btn-primary mt-4" @click="auth_login">Submit</button>
                                    <!-- <p class="text-head pt-3">Don't have an account yet? <span class="text-primary" @click="$router.push({path: '/signup'})">Sign up</span></p> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="col-md-12">
                    <h4 class="text-center text-head mt-5">Check Email Password</h4>
                    <div class="card my-5">
                        <div class="card-body pt-3 pb-5 shadow">
                            <div class="row">
                                <div class="col-md-12 text-center col-12">
                                    <p>Please check your email and follow the instructions</p>
                                    <!-- <input type="password" v-model="forgetObj.Password" class="form-control mt-3" placeholder="Password"> -->
                                    <!-- <p class="text-primary mt-2">Forget Password</p> -->
                                </div>
                                <div class="col-12 text-center">
                                    <router-link to="/login">
                                    <button class="btn btn-primary mt-4" >Ok</button>
                                    </router-link>
                                    <!-- <p class="text-head pt-3">Don't have an account yet? <span class="text-primary" @click="$router.push({path: '/signup'})">Sign up</span></p> -->
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
import { RepositoryFactory } from '../Repository/RepositoryFactory'
const UserRepository = RepositoryFactory.get('user_repository')
import Repository from '../Repository/Repository'
export default {
  name: "Login",
  components: {
    Breadcrumb
  },
  data() {
    return {
        success:false,
        forgetObj:{
            Email:''
            // Password:''
        },
      items: [
        {
            text: 'Home',
            active: false,
            to: '/'
        },
        {
            text: 'Login',
            active: true,
            to: '/login'
        }
      ],
    }
  },
  methods:{
      async auth_login(){
          let {data} = await UserRepository.forget_password(this.forgetObj)
          .catch(error => {
              this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'})
          });
          this.success=true
            // this.$store.commit('setNotifications',{message:'Password reset link sent successfully',type:'success'})

      }
  },

  created() {
      window.scrollTo(0,0)
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
.text-primary:hover {
    cursor: pointer;
}
</style>