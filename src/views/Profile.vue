<template>
    <div class="profile">
        <div class="row">
            <div class="col-12">
                <Breadcrumb :items="items" class="px-5" />
            </div>
        </div>
        <div class="row head">
            <div class="col-12 align-self-end">
                <h1>{{userdetails.FirstName}} {{userdetails.LastName}}</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div>
                    <b-tabs content-class="mt-3" justified>
                        <b-tab title="Orders &amp; Transactions" active>
                            <OrderAndTransactions />
                        </b-tab>
                        <b-tab :title="`User Info (${userdetails.UserRoleCode.charAt(0).toUpperCase() + userdetails.UserRoleCode.slice(1).toLowerCase()})`">
                            <UserInfo />
                        </b-tab>
                        <b-tab title="Wallet">
                            <div class="container">
                                <div class="row mx-5">
                                    <div class="col-7 text-center">
                                        <h3 class="text-blue"><strong>Wallet Balance:</strong></h3>
                                    </div>
                                    <div class="col-5">
                                        <h3 class="text-blue"><strong>${{userdetails.UserWalletAmount}}</strong></h3>
                                    </div>
                                </div>
                                <div class="row mx-5 mt-3 mb-5">
                                    <div class="col-8 text-right">
                                        <p class="text-gray">Wallet Balance can be used as cash upon your next purchase</p>
                                    </div>
                                </div>
                            </div>
                        </b-tab>
                    </b-tabs>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OrderAndTransactions from '@/components/OrderAndTransactions.vue'
import UserInfo from '@/components/UserInfo.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import {mapGetters} from 'vuex'
export default {
    name: "Profile",
    computed:{
        ...mapGetters(['userdetails'])
    },
    components: {
        OrderAndTransactions,
        UserInfo,
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
            text: 'Profile',
            active: true,
            to: '/profile'
        }
      ],
    }
  }
}
</script>

<style scoped>
.head {
    background: url('../assets/Bitmadyuthfp@2x.png');
    background-size: 100% 100%;
    height: 450px;
    color: #fff;
    margin-top: -17px;
}
.head h1 {
    margin: 0 0 50px 50px;
}

@media screen and (max-width: 600px) {
  .head {
    height: 200px;
  }
}
</style>