<template>
    <div class="footer">
        <div class="row no-gutters align-items-center">
            <div class="col-md-4 col-12 text-center pt-4">
                <img src="../assets/UScreen Logo_Color.png" alt="" @click="move('/')">
            </div>
            <div class="col-md-4 col-12 links">
                <ul>
                    <li><a href="javascript:;">Privacy Policy</a></li>
                    <li><a href="javascript:;">Terms and Conditions of Use</a></li>
                    <li><a href="javascript:;">Global Code of Conduct</a></li>
                    <li><a href='/faq'>FAQ</a></li>
                    <li><a href='/about'>About Us</a></li>
                </ul>
            </div>
            <div class="col-md-4 col-12 links">
                <ul>
                    <li  v-if="loggedUser==null"><a href='/login'>Log In</a></li>
                    <li><a href='/contact'>Contact Us</a></li>
                    <li v-if="this.userdetails.UserRoleCode=='EMPLOYER'"><a href='/employer-packages'>For Employers</a></li>
                    <li v-if="this.userdetails.UserRoleCode=='INDIVIDUAL'"><a href='/individual-packages'>For Individuals</a></li>
                    <li><a href='/profile'>Orders</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: "Footer",
    computed:{
        ...mapGetters(['loggedUser','userdetails'])
    },
    methods: {
        move(link) {
            this.$router.push({path: link})
        }
    }
}
</script>
<style scoped>
.footer {
    background: #f9f9f9;
}
.links {
    padding-top: 20px;
    padding-bottom: 20px;
}
a {
    font-size: 16px;
    color: rgb(95, 95, 95);
    font-weight: bold;
}
a:hover {
    text-decoration: none;
    color: #002F87 !important;
}
ul li {
    list-style-type: none;
    padding-top: 10px;
}
</style>