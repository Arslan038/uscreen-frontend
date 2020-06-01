<template>
  <div class="about">
    <div class="row">
        <div class="col-12">
            <Breadcrumb :items="items" class="px-5"/>
        </div>
    </div>
    <div class="row my-5 pt-5">
      <div class="col-12 text-center">
        <h3><strong class="text-head">About Us</strong></h3>
        <p class="text-gray pt-3">Uscreen is powered by First Advantage, the world's most trusted background check provider.</p>
        <p class="text-gray">We provide comprehensive background screening sloutions that provide employers and individuals, actionable reports so they <br> can make confident choices, reduce risk, stay compliant</p>
      </div>
    </div>

    <div class="row no-gutters experience about-us align-items-center">
      <div class="col-md-6 col-12 image"></div>
      <div class="col-md-6 col-12 px-5">
        <h3 class="text-head my-5">More than 20 Years of Experience</h3>
        <p class="text-gray">Our background check solution is an affordable web-based tool containing the most useful searches for both small businesses (SMB) and individuals.</p>
        <p class="text-gray">We help to make a more informed hiring decision with simple packages of reports that include the most requested and useful screening searches. We have strength of experience providing information that helps businesses make informed hiring decisions.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-12">
        <div class="row my-5 mx-4 px-4">
          <div class="col-4 col-md-2">
            <img src="../assets/target@2x.png" width="80%" class="left" alt=""> 
          </div>
          <div class="col-8 col-md-10">
            <h3 class="text-head"><strong>Our Mission</strong></h3>
            <p>Quick and easy background checks. Its our promise.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-12">
        <div class="row my-5 mx-4 px-4">
          <div class="col-4 col-md-2">
            <img src="../assets/scope@2x.png" width="80%" class="left" alt=""> 
          </div>
          <div class="col-8 col-md-10">
            <h3 class="text-head"><strong>Our Vision</strong></h3>
            <p>Deliver innovative sloutions and insights that help <br> manage risk and hire the best talent.</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
export default {
  name: "About",
  components: {
    Breadcrumb
  },
  created() {
    window.scrollTo(0,0)
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
            text: 'About',
            active: true,
            to: '/about'
        }
      ],
    }
  }
}
</script>
<style scoped>
.left {
  float: left;
}
.clear {
  clear: both;
}
.image {
  background: url('../assets/aboutus.jpg');
   height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
 
}
.experience {
  background: #f1f1f1;
}
.experience h3 {
  font-size: 32px;
  font-weight: bold;
}
.experience p {
  font-size: 16px;
}
@media screen and (max-width: 600px) {
  .image {
    height: 300px;
  }
  .experience h1 {
    font-size: 35px;
  }
  .experience p {
    font-size: 16px;
  }
}
@media (min-width: 481px) and (max-width: 767px) {
  .experience p {
    font-size: 12px !important;
  }
}
</style>