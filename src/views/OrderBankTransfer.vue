<template>
    <div class="bank-transfer">
        <div class="row">
            <div class="col-12">
                <Breadcrumb :items="items" class="px-5" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 offset-md-4 col-12 text-center text-gray mt-5">
                <h4 class="mb-4 mt-3 text-head"><strong>Thank you. Your order has been received.</strong></h4>
                <hr>
                <!-- <p>Lorem ipsum dummy text as it is. Lorem ipsum dummy text as it is Lorem ipsum dummy text as it is Lorem ipsum dummy text as it is Lorem ipsum dummy text as it is Lorem ipsum dummy text as it is Lorem ipsum dummy text as it is Lorem ipsum dummy text as it is Lorem ipsum dummy text as it is</p> -->
                <button class="btn btn-primary mt-3"  @click="createAndDownload()">Download Invoice</button> <br>
                <div class="col-md-12 mt-2 text-center">
                    <a  v-if="performa_file!=''" :href="performa_file" download>Your file is ready click here </a>                                         
                </div>
                <button class="btn btn-secondary mt-3 mb-5" @click="home">Home</button>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import { RepositoryFactory } from '../Repository/RepositoryFactory'
const OrderRepository = RepositoryFactory.get('order_repository')
export default {
    name: "OrderBankTransfer",
    props:['orderkey'],
    components: {
        Breadcrumb
    },
    data() {
        return {
            performa_file:'',
            items: [
                {
                    text: 'Home',
                    active: false,
                    to: '/'
                },
                {
                    text: 'Order Form',
                    active: false,
                    to: '/employer-order'
                },
                {
                    text: 'Order Confirmation',
                    active: true,
                    to: '/order-confirmation'
                }
            ],
        }
    },
    methods: {
        home() {
            this.$router.push({path: '/'})
        },
         async createAndDownload(){
            let {data}=await OrderRepository.getOrderPerforma(this.orderkey)
            .catch(error => {
                this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'})
            });
            if(data.code=='MSG_SUCCESS_EXPORTS'){
                this.$store.commit('setNotifications',{message:'File Generated succesffuly',type:'success'})
                window.open(data.data[0].File)    
            }   
            else{
                this.$store.commit('setNotifications',{message:'Problems in Creating file',type:'error'})
            }
      },
    },
    created() {
      window.scrollTo(0,0)
  }
}
</script>

<style>
.btn {
    min-width: 150px !important;
    padding: 5px 10px !important;
}
</style>