<template>
  <div class="home">
    <div class="row no-gutters header align-items-center">
      <div class="col-md-12 text-center">
          <h1 class="text-white">UScreen</h1>
          <p class="px-3">Quick and easy background checks.<br>No hidden fees, no memberships and no minimums</p>
          <button class="btn btn-screen" @click="routeit('simple')">Screen Today</button>
      </div>
    </div>
    <div class="row package">
      <div class="col-md-12 text-center">
        <h2 class="text-head">Choose Your Package</h2>
        <p class="text-gray px-4">Order your background check today. It's easy!</p>
      </div>
      <div class="container">
      <div v-if="loggedUser==null" class="row mt-3">
        <div class="col-md-6 col-12 text-center mt-5">
          <div class="zoom">
            <img src="../assets/homepage_individual.jpg" width="80%" alt="">
          </div>
          <h3 class="pt-5 text-head">Individual </h3>
          <p class="px-5 pt-2 text-gray">Recommended for individual one-off background checks</p>
          <button class="btn btn-secondary more" @click="routeit('indiv')">More</button>
        </div>
        <div class="col-md-6 col-12 text-center mt-5">
          <div class="zoom">
            <img src="../assets/homepage_employer.jpg" width="80%" alt="">
          </div>
          <h3 class="pt-5 text-head">Employer </h3>
          <p class="px-5 pt-2 text-gray">For registered small business owners and/or employers to conduct background checks on employees</p>
          <button class="btn btn-secondary more" @click="routeit('emplo')">More</button>
        </div>
      </div>
      <div v-if="userdetails.UserRoleCode=='INDIVIDUAL'" class="row mt-3">
        <div class="col-md-6 offset-md-3 col-12 text-center mt-5">
          <div class="zoom">
            <img src="../assets/homepage_individual.jpg" width="80%" alt="">
          </div>
          <h3 class="pt-5 text-head">Individual </h3>
          <p class="px-5 pt-2 text-gray">Recommended for individual one-off background checks</p>
          <button class="btn btn-secondary more" @click="routeit('indiv')">More</button>
        </div>
      </div>
      <div v-if="userdetails.UserRoleCode=='EMPLOYER'" class="row mt-3">
        <div class="col-md-6 offset-md-3 col-12 text-center mt-5">
          <div class="zoom">
            <img src="../assets/homepage_employer.jpg" width="80%" alt="">
          </div>
          <h3 class="pt-5 text-head">Employer </h3>
          <p class="px-5 pt-2 text-gray">For registered small business owners and/or employers to conduct background checks on employees</p>
          <button class="btn btn-secondary more" @click="routeit('emplo')">More</button>
        </div>
      </div>
    </div>
    </div>

    <div class="row membership my-5">
      <div class="col-12 mt-3">
        <h1 class="text-center text-head">Memberships, Accreditations &amp; Certification</h1>
      </div>
      <div class="col-md-3 col-12 text-center mt-5">
        <img src="../assets/Bitmap1@2x.png" width="40%" alt="">
      </div>
      <div class="col-md-3 col-12 text-center mt-5">
        <img src="../assets/Bitmap2@2x.png" width="25%" alt="">
      </div>
      <div class="col-md-3 col-12 text-center mt-5">
        <img src="../assets/Bitmap3@2x.png" width="40%" alt="">
      </div>
      <div class="col-md-3 col-12 text-center mt-5">
        <img src="../assets/Bitmap@2x.png" width="60%" alt="">
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'Home',
  computed:{
    ...mapGetters(['loggedUser','userdetails'])
  },
  components: {
    //HelloWorld
  },
  created() {
      window.scrollTo(0,0)
      window.onbeforeunload = null

  },
  methods:{
    routeit(arg){
      if(arg=='indiv'){
        this.$router.push({path:'/individual-packages'})
      }

      else if(arg=='emplo'){
        this.$router.push({path:'/employer-packages'})
      }

      else if(this.loggedUser!=null){
          if(arg=='simple'){
            if(this.userdetails.UserRoleCode=='INDIVIDUAL'){
              this.$router.push({path:'/individual-packages'})

           }
            else if(this.userdetails.UserRoleCode=='EMPLOYER'){
                this.$router.push({path:'/employer-packages'})

            }
          }
          
          // if(arg=='simple'){
          //   if(this.userdetails.UserRoleCode=='INDIVIDUAL'){
          //     this.$router.push({path:'/individual-packages'})

          //  }
          //   else if(this.userdetails.UserRoleCode=='EMPLOYER'){
          //       this.$router.push({path:'/employer-packages'})

          //   }
          // }
        
      }
      else{
      this.$router.push({path:'login'})

      }
      // this.$router.push({path:'employer-package'})
    }
  },
}
</script>

<style scoped>
.home {
  overflow-x: hidden !important;
}
.header {
  background: url('../assets/homebanner.jpg'), rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 900px;
  color: #fff
}
h1 {
  font-size: 42px;
  padding-bottom: 20px;
}
p {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.7rem;
}
.btn-screen {
  background: transparent !important;
  border: 1px solid #fff !important;
  color: #fff;
  font-weight: bold !important;
  border-radius: 25px !important;
  padding: 15px 35px;
  margin-top: 20px;
}
.btn-screen:hover {
  background:#fff !important;
  color:#000;
}
.btn-secondary:focus {
  outline: none !important;
  box-shadow: none !important;
  border: 1px solid #fff !important;
}
.package {
  background: #f9f9f9;
  padding-top: 80px;
  padding-bottom: 30px;
}
.package h2 {
  font-size: 37px;
  font-weight: bold;
}
.package h3 {
  font-size: 32px;
  font-weight: bold;
}
.zoom {
  width: 35vw;
  height: 35vw;
  max-width: 400px;
  max-height: 400px;
  position: relative;
  overflow: hidden;
  transition: transform .2s;
  border-radius: 50%;
  margin: auto;
}
.zoom:hover {
  transform: scale(1.05);
}
.zoom img {
  display: inline;
  margin: 0 auto;
  height: 100%;
  width: auto;
}
.more {
  font-weight: bold;
  border-radius: 25px;
  padding: 10px 80px;

  color: #0071CE !important;
  font-weight: bold;
  border: 2px solid #0071CE !important;
  background: transparent !important;
  border-radius: 25px !important;
}
.more:hover {
  border: 2px solid #0071CE !important;
  background: #0071CE !important;
  color: #fff !important;

}
.membership h1 {
  font-weight: bold;
}
@media (min-width: 768px) and (max-width: 1024px) {
  .header {
    height: 550px;
  }
}
@media screen and (max-width: 600px) {
  .text-head {
    font-size: 28px !important;
  }
  /* .header {
    height: 300px;
  } */
}
@media (min-width: 481px) and (max-width: 767px) {
  .header {
    height: 300px;
  }
}
@media (max-width: 767px) {
  .zoom {
    width: 60vw;
    height: 60vw;
  }  
}
</style>
