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
                    <h4 class="text-center text-head my-5">Registration Completed</h4>
                    <div class="row my-5">
                        <div class="col-md-12 text-center col-12 my-3">
                            <p>Please check and verify your email.</p>
                        </div>
                        <div class="col-12 text-center">
                            <router-link to="/">
                            <button class="btn btn-primary m-4" >Home</button>
                            </router-link>
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
  name: "RegistrationCompleted",
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
            text: 'Registration Completed',
            active: false,
            to: '/login'
        }
      ],
    }
  },
  methods:{
      // async auth_login(){
      //     let {data} = await UserRepository.forget_password(this.forgetObj)
      //     .catch(error => {
      //         console.log(error.response)
      //         this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'})
      //     });
      //     this.success=true
      //       // this.$store.commit('setNotifications',{message:'Password reset link sent successfully',type:'success'})

      // }
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