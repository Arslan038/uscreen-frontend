<template>
  <div class="home">
    <div class="row no-gutters header align-items-center">
      <div class="col-md-12 text-center">
          <h1>Why UScreen</h1>
          <p>No hidden fees, no memberships and no minimums. <br>Get quick and easy background checks.</p>
          <button class="btn btn-screen">Screen Today</button>
      </div>
    </div>
    <div class="row package">
      <div class="col-md-12 text-center">
        <h2 class="text-head">Choose Your Package</h2>
        <p class="text-gray">Order your background check today. It's easy!</p>
      </div>
      <div class="container">
      <div class="row mt-3">
        <div class="col-md-6 col-12 text-center mt-5">
          <img class="zoom" src="../assets/adfBitmap@2x.png" width="80%" alt="">
          <h3 class="pt-5 text-head">Individual </h3>
          <p class="px-5 pt-2 text-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          <button class="btn btn-secondary more">More</button>
        </div>
        <div class="col-md-6 col-12 text-center mt-5">
          <img class="zoom" src="../assets/Bitmaafp@2x.png" width="80%" alt="">
          <h3 class="pt-5 text-head">Employer </h3>
          <p class="px-5 pt-2 text-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          <button class="btn btn-secondary more">More</button>
        </div>
      </div>
    </div>
    </div>

    <div class="row membership my-5">
      <div class="col-12 mt-3 mb-5">
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

export default {
  name: 'Home',
  components: {
    //HelloWorld
  }
}
</script>

<style scoped>
.home {
  overflow-x: hidden !important;
}
.header {
  background: url('../assets/Bitmaasdfadfp_2x.png'), rgba(0, 0, 0, 0.4);
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
  transition: transform .2s;
}
.zoom:hover {
  transform: scale(1.05);
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
  /* .header {
    height: 300px;
  } */
}
@media (min-width: 481px) and (max-width: 767px) {
  .header {
    height: 300px;
  }
  
}
</style>
