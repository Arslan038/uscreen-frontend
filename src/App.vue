<template>
  <div id="app">
    <Navbar class="menu"/>
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import {mapGetters} from 'vuex'
import nativeToast from 'native-toast'
import { RepositoryFactory } from './Repository/RepositoryFactory'
const UserRepository = RepositoryFactory.get('user_repository')
const OrderRepository = RepositoryFactory.get('order_repository')

export default {
  components: {
    Navbar,
    Footer
  },
  created(){
      this.fetchCountries()
      this.fetchCurrency()
      this.fetchIndustry()
      // this.fetchPackages()
      this.fetchEmployerPackages()
      this.fetchIndividualPackages()

    if(localStorage.getItem("loggedUser")!=null){
        this.$store.commit("setLoggedUser",JSON.parse(localStorage.getItem("loggedUser")));
        this.fetchUserDetails()
        this.fetchOrders()

    }
    if(localStorage.getItem("userdetails")!=null){
        this.$store.commit("setUserDetails",JSON.parse(localStorage.getItem("userdetails")))

    }


      // localStorage.setItem("",'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImFkbWluQGZhZHYuY29tIiwiVXNlck5hbWUiOiJhZG1pbiIsIlVzZXJSb2xlSWQiOjEsImV4cCI6MTU5MTY4MDYwOSwiaWF0IjoxNTg2NDk2NjA5fQ.x2VhwdUz0EZ56IkiaaTNl_3LMu4OxYhDPXLV2Wo6l2g')

  },
  computed:{
    ...mapGetters(['notifications','loggedUser'])
  },
  watch:{
    notifications(){
      if(this.notifications.message!=null) {
        nativeToast({
          message: this.notifications.message,
          position: 'north-east',
          timeout: 5000,
          type: this.notifications.type
          })
      }
    },
    loggedUser() {
    if(this.loggedUser!=null){
        this.fetchOrders()
        if(localStorage.getItem("inside")==null){
            localStorage.setItem("inside","yes")
            this.$router.push({path:'/'})
        }
      
    }
    else{
      this.$router.push({path:'/login'})
    }

   }
  
  },
  
  methods:{
    async fetchUserDetails(){
        let resp = await UserRepository.getloggeduser()
        this.$store.commit("setUserDetails",resp.data.data.PageData[0])
    },
    async fetchCountries(){
        let {data}= await UserRepository.getCountries()
        this.$store.commit("setCountries",data.data)

    },
    async fetchOrders(){
        let {data}= await OrderRepository.getorders(1)
        this.$store.commit("setAllOrders",data.data.PageData)

    },
    async fetchCurrency(){
        let {data}= await UserRepository.getCurrency()
        this.$store.commit("setCurrency",data)
      
    },
    async fetchEmployerPackages() {
        let {data}= await OrderRepository.getPackages('EMPLOYER')
        this.$store.commit("setEmployerPackages",data.data)
      
    },
    async fetchIndividualPackages() {
        let {data}= await OrderRepository.getPackages('INDIVIDUAL')
        this.$store.commit("setIndividualPackages",data.data)
      
    },
    async fetchIndustry(){
        let {data}= await UserRepository.getIndustry()
        this.$store.commit("setIndustry",data.data)
    }
  },
}
</script>
<style>

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden !important;
}
.anticon {
  font-size: 32px !important;
  color: #339df3 !important
}
.ant-collapse > .ant-collapse-item > .ant-collapse-header {
  font-size: 18px !important;
  color: #575757 !important;
  font-weight: bold !important;
  padding-left: 70px !important;
}
.menu {
  margin-bottom: 70px;
}
.text-gray {
  color: #575757 !important;
  /* color: #D0CFCD !important; */
}
.text-head {
  color: #575757 !important;
}
.btn-primary {
  background: #0071CE !important;
  border-radius: 25px !important;
  border: 1px solid #0071CE !important;
}
.btn-primary:hover {
  background: #fff !important;
  color: #0071CE !important;
  border: 1px solid #0071CE !important;
}
.btn-secondary {
  color: #0071CE !important;
  font-weight: bold;
  border: 2px solid #0071CE !important;
  background: transparent !important;
  border-radius: 25px !important;
}
.text-blue {
  color: #002F87;
}
.btn-secondary:hover {
  border: 2px solid #0071CE !important;
  background: #0071CE !important;
  color: #fff !important;
}
.card {
  border: none !important;
}
input:focus, select:focus, textarea:focus, .btn-primary:focus, .btn-secondary:focus {
  outline: none !important;
  box-shadow: none !important;
}
/* .navbar-toggler-icon {
  background: transparent !important;
  content: '\e92f' !important;
  color: #ddd !important;
  background: #000 !important;
} */
.nav-tabs .nav-link {
    font-size: 22px !important;
    font-weight: bold !important;
}
.nav-tabs .nav-link {
    color: rgb(163, 162, 162) !important;
    text-decoration: none;
    background-color: transparent;
}
.nav-tabs {
  border: none !important;
  padding: 20px 0;
}
.nav-tabs, .nav-link, .nav-link.active, .nav-tabs .nav-item.show .nav-link {
  border: none !important;
}

.nav-link:focus {
  border: none !important;
  outline: none !important;
}
.nav-tabs .nav-link.active {
  color: rgb(95, 95, 95) !important;
  border-bottom: 3px solid 002F87 !important;
}
.breadcrumb {
  background: #f1f1f1 !important;
  height: 70px !important;
  padding-left: 34px !important;
}
.breadcrumb ol {
  height: 30px !important;
}
@media screen and (max-width: 600px) {
  .nav-tabs .nav-link {
    font-size: 12px !important;
    font-weight: bold !important;
  }
  .rc-anchor-normal, .rc-anchor .rc-anchor-normal .rc-anchor-light {
    max-width: 200px !important;
  }
  .nav-tabs .nav-link {
    font-size: 14px !important;
  }
  .breadcrumb {
  background: #f1f1f1 !important;
  height: 70px !important;
  padding-left: 10px !important;
}
}

</style>
