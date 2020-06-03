<template>
    <div class="login">
        <div class="row">
            <div class="col-12">
                <Breadcrumb :items="items"/>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h4 class="text-center text-head mt-5">Login</h4>
                    <div class="card my-5">
                        <div class="card-body pt-3 pb-5 shadow">
                            <div class="row">
                                <div class="col-md-6 offset-md-3 col-12">
                                    <input type="email" class="form-control mt-3" v-model="user_Auth.Email" placeholder="Email*">
                                    <input type="password" v-model="user_Auth.Password" v-on:keyup.enter="auth_login" class="form-control mt-3" placeholder="Password">
                                    <router-link  to="/forget-password">
                                    <p class="text-primary mt-2">Forgot Password?</p>
                                    </router-link>
                                </div>
                                <div class="col-12 text-center">
                                    <button class="btn btn-primary mt-4" @click="auth_login">Sign In</button>
                                    <p class="text-head pt-3">Don't have an account yet? <span class="text-primary" @click="$router.push({path: '/signup'})">Sign up</span></p>
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
        user_Auth:{
            Email:'',//'raymond5.company@email.com',paz.alvin22@gmail.com
            Password:''//'daviddavid'@@admin123!@#
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
          let {data} = await UserRepository.authenticatelogin(this.user_Auth)
          .catch(error => {
              this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'})
          });

        if(data!=null){
            Repository.defaults.headers.Authorization = `Bearer ${data.data.Token}`;
            this.$store.commit("setLoggedUser",data.data)

            let resp = await UserRepository.getloggeduser()
            this.$store.commit("setUserDetails",resp.data.data.PageData[0])


          }
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