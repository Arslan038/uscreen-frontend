<template>
    <div class="container">
        <div class="nav">
            <b-navbar toggleable="lg" type="light"  :class="getClass"  fixed="top"  v-on:scroll.passive='handleScroll'>
            <b-navbar-brand @click="move('/')" id="brand">
                <img src="../assets/UScreen Logo_Color.png" class="ml-5" width="55%" alt="">
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-5">
                <b-nav-item href='/'>Home</b-nav-item>
                <b-nav-item v-if="loggedUser==null" href='/employer-packages'>For Employers</b-nav-item>
                <b-nav-item v-if="loggedUser==null" href='/individual-packages'>For Individuals</b-nav-item>
                <b-nav-item v-if="userdetails.UserRoleCode=='EMPLOYER'" href='/employer-packages'>For Employers</b-nav-item>
                <b-nav-item v-if="userdetails.UserRoleCode=='INDIVIDUAL'"  href='/individual-packages'>For Individuals</b-nav-item>
                <b-nav-item v-if="loggedUser!=null" href='/profile'>Profile</b-nav-item>

                <b-nav-item v-if="loggedUser==null" href='/login'>Log In</b-nav-item>
                <b-nav-item v-else @click="logout()">Log Out</b-nav-item>
                <b-nav-item href='/contact'>Contact Us</b-nav-item>
                <b-nav-item href='/about'>About Us</b-nav-item>
                
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>    
        </div>
        
        </div>
   
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: "Navbar",
    computed:{
        getClass: function() {    
            return this.scrolls > 10 && this.scrolls < 110 ? 'white' : 'transparent';
        },
        ...mapGetters(['loggedUser','userdetails'])
    },
    data() {
        return {
            search: false,
            scrolls: 0
        }
    },
    methods: {
        logout(){
            this.$store.commit("logout")
        },
        move(link) {
            this.$router.push({path: link})
        },
        handleScroll (event) {
            this.scrolls=window.scrollY
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped>
a {
    color: #002F87 !important;
    font-size: 18px;
    padding-left: 4px !important;
    font-weight: bold !important;
}
#brand {
    cursor: pointer;
}
.white {
    background-color: #fff !important;
    opacity: 0.9;
    transition: ease-out 2s;
    color: #fff !important;
}
.transparent {
    background-color: #fff !important;
}
.menus {
    width: 100% !important;
}
@media screen and (min-width: 1024px) {
    a {
        padding-left: 10px !important;
        font-size: 16px !important;
    }
}
@media screen and (min-width: 1366px) {
    a {
        padding-left: 25px !important;
        font-size: 20px !important;
    }
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  
  
  
}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  a {
        padding-left: 4px !important;
        font-size: 15px !important;
    }
  
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  
  
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media screen and (max-width: 600px){
    img {
        margin-left: 0 !important;
    }
  .navbar-light .navbar-toggler {
      position: absolute;
      right: 10px;
      top: 15px;
  }
  
}
</style>