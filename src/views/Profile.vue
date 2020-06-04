<template>
    <div class="profile">
        <div class="row">
            <div class="col-12">
                <Breadcrumb :items="items" />
            </div>
        </div>
        <div class="row">
            <img src="../assets/Bitmadyuthfp@2x.png" width="100%" height="auto" alt="">
            <div class="col-12 align-self-end name">
                <h1 class="text-white">{{userdetails.FirstName}} {{userdetails.LastName}}</h1>
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
                                <div class="row">
                                    <div class="col-7 text-center">
                                        <h3 class="text-blue wallet"><strong>Wallet Balance:</strong></h3>
                                    </div>
                                    <div class="col-5">
                                        <h3 class="text-blue wallet"><strong>{{userdetails.CurrencyCode}} {{userdetails.UserWalletAmount}}</strong></h3>
                                    </div>
                                </div>
                                <div class="row mt-3 mb-5">
                                    <div class="col-md-12 col-12 text-center">
                                        <p class="text-gray px-5">Wallet balance can be used towards your next order</p>
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
    created() {
        window.scrollTo(0,0)
        window.onbeforeunload = null

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
    background-repeat: no-repeat;
    color: #fff;
    margin-top: -17px;
}
h1 {
    margin: 0 0 50px 50px;
}
.name {
    position: absolute;
}

@media screen and (max-width: 600px) {
  .head {
    height: 200px;
  }
  h1 {
      font-size: 25px;
      margin-left: 10px;
      margin-bottom: 10px;
  }
  .wallet {
      font-size: 16px;
  }
}
</style>