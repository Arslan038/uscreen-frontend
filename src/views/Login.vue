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
                    <h4 class="text-center text-head mt-5">Login</h4>
                    <div class="card my-5">
                        <div class="card-body pt-3 pb-5 shadow">
                            <div class="row mx-5">
                                <div class="col-md-6 offset-md-3 col-12">
                                    <input type="email" class="form-control mt-3" placeholder="Email (UserID)*">
                                    <input type="password" class="form-control mt-3" placeholder="Password">
                                    <p class="text-primary mt-2">Forget Password</p>
                                </div>
                                <div class="col-12 text-center">
                                    <button class="btn btn-primary">Sign In</button>
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
export default {
  name: "Login",
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
            text: 'Login',
            active: true,
            to: '/login'
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
.text-primary:hover {
    cursor: pointer;
}
</style>