<template>
    <div class="login">
        <div class="row">
            <div class="col-12">
                <Breadcrumb :items="items" class="px-5" />
            </div>
        </div>
        <!-- <div class="container"> -->
            <div class="row">
                <div class="col-md-12">
                    <h4 class="text-center text-head mt-5">Sign Up</h4>
                    <div class="row my-5">
                        <div class="col-md-6 offset-md-3 col-12">
                            <div class="card shadow">
                                <div class="card-head">
                                    <h4 class="text-head pt-4 pb-3 px-5">Select User Type</h4>
                                    <hr>
                                </div>
                                <div class="card-body px-5">
                                    <label for=""><strong class="text-head">User Type</strong></label>
                                    <select class="form-control" v-model="type">
                                        <option :value="null">-Select-</option>
                                        <option value="Employer">Employer</option>
                                        <option value="Individual">Individual</option>
                                    </select>
                                    <div class="col-12 text-center mt-5">
                                    <button class="btn btn-primary" @click="move">Next</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <!-- </div> -->
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
export default {
  name: "Signup",
  components: {
    Breadcrumb
  },
  methods: {
      move() {
          if(this.type == 'Employer') {
              this.$router.push({path: '/employer-signup'})
          }
          if(this.type == 'Individual') {
              this.$router.push({path: '/individual-signup'})
          }
      }
  },
  data() {
    return {
        type: null,
      items: [
        {
            text: 'Home',
            active: false,
            to: '/'
        },
        {
            text: 'Sign Up',
            active: true,
            to: '/signup'
        }
      ],
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
</style>