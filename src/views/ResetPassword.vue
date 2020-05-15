<template>
    <div class="login">
        <div class="row">
            <div class="col-12">
                <Breadcrumb :items="items" class="px-5" />
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h4 class="text-center text-head mt-5">Reset Password</h4>
                    <div class="card my-5">
                        <div class="card-body pt-3 pb-5 shadow">
                            <div class="row mx-5">
                                <div class="col-md-12 text-center col-12">
                                    <p>Please check your email and follow the instructions</p>
                                </div>
                                <div class="col-md-6 offset-md-3 col-12">
                                    <input type="password" class="form-control mt-3" v-model="resetObj.Password" placeholder="New Password*">
                                    <input type="password" v-model="Retypedpass" class="form-control mt-3" placeholder="Confirm New Password">
                                   
                                </div>
                                <div class="col-12 text-center">
                                    <button class="btn btn-primary mt-4" @click="auth_login">Confirm</button>
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
  name: "ResetPassword",
  components: {
    Breadcrumb
  },
  data() {
    return {
        Retypedpass:'',
        resetObj:{
            UserKey:'',
            Password:''
        },
      items: [
        {
            text: 'Home',
            active: false,
            to: '/'
        },
        {
            text: 'Reset Password',
            active: true,
            to: '/login'
        }
      ],
    }
  },
  methods:{
      async auth_login(){
          if(this.Retypedpass==this.resetObj.Password) { 
              if(this.Retypedpass!='' && this.resetObj.Password!='') {
                let {data} = await UserRepository.verify_reset_passs(this.resetObj)
                .catch(error => {
                    this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'})
                });
                if(data.status=='Success'){
                 this.$store.commit('setNotifications',{message:'Password reset successfully ',type:'success'})
                 this.$router.push({path:'/login'})

                }
              }
              else {
                this.$store.commit('setNotifications',{message:'Empty Fields',type:'error'})
              }
            
          }
          else {
            this.$store.commit('setNotifications',{message:'Retyped password and New password are not same',type:'error'})

          }
      }
  },
  created() {
    window.scrollTo(0,0)
    this.resetObj.UserKey=this.$route.params.id
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