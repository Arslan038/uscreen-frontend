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
export default {
  components: {
    Navbar,
    Footer
  }
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
.menu {
  margin-bottom: 70px;
}
.text-gray {
  color: #D0CFCD !important;
}
.text-head {
  color: #575757 !important;
}
.btn-primary {
  background: #002F87 !important;
  border-radius: 25px !important;
  border: 1px solid #002F87 !important;
}
.btn-primary:hover {
  background: #fff !important;
  color: #002F87 !important;
  border: 1px solid #002F87 !important;
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
}
.breadcrumb ol {
  height: 30px !important;
}
@media screen and (max-width: 600px) {
  .nav-tabs .nav-link {
    font-size: 12px !important;
    font-weight: bold !important;
  }
}

</style>
