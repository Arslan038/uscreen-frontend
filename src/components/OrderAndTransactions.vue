<template>
    <div class="order-and-transactions">
        <div class="row">
            <div class="col-md-12 pr-4 pl-4 ">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Order No.</th>
                                <th>Item</th>
                                <th>Amount ({{userdetails.CurrencyCode}})</th>
                                <th>Candidate Status</th>
                                <th>Order Status</th>
                                <th>Order Date</th>
                                <th>Report</th>
                                <th>Invoice</th>
                                <th>Order Details</th>
                            </tr>
                        </thead>
                        <tbody v-if="pageLoad==false">
                            <tr v-for="(item,i) in allorders" :key="i" >
                                <td>{{item.OrderNumber}}</td>
                                <td>{{item.PackageServiceName}}</td>
                                <td>${{item.OriginalAmount.toFixed(2)}}</td>
                                <td><button  :class="['btn ','btn-sm btn-block',item.CandidateStatusCode=='Ready'? 'btn-primary':'btn-border']">{{item.CandidateStatusName}}</button></td>
                                <!-- <td><button class="btn btn-sm btn-border btn-block">in review</button></td> -->
                                <!-- v-if="v-if="getOrderStatus(item.OrderStatusId)=='Paid'"(item.OrderStatusId)=='Paid'" -->
                                <td >
                                    <button v-if="getOrderStatus(item.OrderStatusId)=='Pending'" @click="total=item.TotalAmount.toFixed(2);paymentobj.OrderKey=item.OrderKey;payModal=true" class="btn btn-sm btn-border btn-block">{{getOrderStatus(item.OrderStatusId)}}</button>
                                    <button v-else  class="btn btn-sm btn-border btn-block">{{getOrderStatus(item.OrderStatusId)}}</button>

                                </td>
                                <td>{{item.LastCreated.split('T')[0]}}</td>
                                <td ><button :disabled=" (getOrderStatus(item.OrderStatusId)=='Ready' && item.CandidateStatusCode=='READY') ? false:true " class="btn btn-primary btn-sm btn-block" @click="getViewReport(item.OrderKey,i)">View</button></td>
                                <td ><button class="btn btn-primary btn-sm btn-block" @click="getOrderExportReport(item.OrderKey,i)">Download</button></td>
                                <td><button @click="routeto(item)" class="btn btn-primary btn-sm btn-block">View</button></td>

                                <!-- <td @click="routeto(item)" class="btn btn-primary btn-sm btn-block">View</td> -->
                            </tr>
                        </tbody>
                    </table>
                    <div  class="text-center mt-5">
                        <h3 v-if="allorders.length<1 && pageLoad==false">No Record</h3>
                        <b-spinner  v-if="pageLoad==true" variant="primary" label="Spinning"></b-spinner>


                    </div>
                </div>
            </div>
        </div>
        <div>
            <a-pagination class="float-right"  :page-size.sync="per_page" :current="current" @change="thechange"  :total="rows" />  

        </div>

        <b-modal v-model="payModal" title="Pay Online" :hideFooter="true">
            <h4 class="text-blue  mb-3 text-center">Pay ${{total}} {{userdetails.CurrencyCode}} via Credit Card</h4>
            <b-row>
                <b-input v-model="paymentobj.number" placeholder=" Card Number"></b-input>
            </b-row>
            <b-row>
                <b-col>
                    <b-input v-model="paymentobj.exp_month" placeholder="M"></b-input>
                </b-col>
                <b-col>
                    <b-input v-model="paymentobj.exp_year" placeholder="YYYY"></b-input>
                </b-col>
                <b-col>
                    <b-input v-model="paymentobj.cvc" placeholder=" CVV"></b-input>
                </b-col>
            </b-row>
            <div class="text-center">
            <button v-if="isLoad==false" class="btn btn-primary btn-block mt-3 " style="padding-top:0.5rem !important;padding-bottom:0.5rem !important;" @click="createPayment">Pay Now</button>
            <b-spinner  v-else variant="primary" label="Spinning"></b-spinner>

            </div>

       </b-modal>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { RepositoryFactory } from '../Repository/RepositoryFactory'
const OrderRepository = RepositoryFactory.get('order_repository')

export default {
    name: "OrderAndTransactions",
    computed:{
        ...mapGetters(['allorders','userdetails']),
        //   rows() {
        //      if(this.allorders.length>0) {
        //             let lngth_posts=this.allorders.length
        //             let temp_perpage=5
        //             let dividedresult=lngth_posts/temp_perpage
        //             let parsed= parseInt(dividedresult)
        //             if(parsed*temp_perpage<lngth_posts) {
        //                 parsed++
        //                 let sringer=parsed.toString()+'0'
        //                 let parsedback=parseInt(sringer)
        //                 return  parsedback
        //             }
        //             else{
        //                 let sringer=parsed.toString()+'0'
        //                 let parsedback=parseInt(sringer)
        //                 return  parsedback
        //             }
        //      }
           
        // },
        // spliced_posts(){
        //     let arr2=[]
        //     if(this.allorders.length>0){
        //     arr2=this.allorders.slice(this.start_index,this.end_index)
        //     return arr2
        //     }
        //     else{
        //         return []
        //     }
        // }
    },
    watch:{
        // allorders(){
        //     this.setTempViewReports()
        // }
    },
    created(){
        this.fetchOrders(this.current)
        // this.setTempViewReports()
    },
    data(){
        return {
            current: 1,
            per_page:5,
            rows:0,

            total:'',
            isLoad:false,
            payModal:false,
            viewreport:[],
            paymentobj:{
                OrderKey: "",
                number: "5555555555554444",
                exp_month: "7",
                exp_year: "2020",
                cvc: "123"
            },
            pageLoad:false,
        }
    },
    methods:{
        thechange(current,pkd){
            this.current=current
            this.fetchOrders(this.current)
        },
        async createPayment(){
          this.isLoad=true
            let resp=await OrderRepository.order_charge(this.paymentobj)
            .catch(error => {
                this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'})
                this.isLoad=false
            });
            if(resp.data.code=='MSG_SUCCESS_PAYMENT_CHARGE') {
                    this.$store.commit('setNotifications',{message:'Payment executed successfully',type:'success'})
                    
                    this.fetchOrders(this.current)

            }
            else{
                    this.$store.commit('setNotifications',{message:'Problems in Making payments',type:'error'})

            }
            this.payModal=false
            this.isLoad=false
             
        },
       
        async getViewReport(id,i){
            let {data}= await OrderRepository.getOrderReport({OrderKey:id})
            .catch(error => {
              this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'})
           });
           if(data.data.screening_results_url==''){
              this.$store.commit('setNotifications',{message:'No report url is being generated by the system' ,type:'error'})

           }
           else{
              window.open(data.data.screening_results_url);
           }
            // this.viewreport[i].isreportshow=true



            // this.viewreport[i].reporturl=data.data.screening_results_url

        },
        async getOrderExportReport(id,i){
            let {data}=await OrderRepository.getOrderPerforma(id)
            .catch(error => {
              this.$store.commit('setNotifications',{message:error.response.data.Message,type:'error'})
           });
            window.open(data.data[0].File);

            // this.viewreport[i].invoiceurl=data.data[0].File
            // this.viewreport[i].showinvoice=true

        },
        async fetchOrders(page){
            this.pageLoad=true
            let {data}= await OrderRepository.getorders(page)
            console.log(data)
            this.rows=data.data.HitsTotal
            this.$store.commit("setAllOrders",data.data.PageData)
            this.pageLoad=false
        },
        routeto(item){
            this.$router.push({name:'OrderDetail',params:{selected_order:item}})

        },
        getOrderStatus(id){
            if(id==1) {
                return 'Ready'
            }
            else if(id==2) {
                return 'Pending'
            }
            else if(id==3) {
                return 'Refund'   
            }
            else if(id==4) {
                return 'Paid'
            }
            else if(id==5) {
                return 'Expired'
            }
            else if(id==6) {
                return 'Done'
            }
            else if(id==7) {
                return 'Wallet'
            }
            else if(id==8) {
                return 'Cancelled'
            }
            return '='
        }
    }
}
</script>

<style scoped>
    .btn {
        padding: 0px 10px !important;
        min-width: 130px !important;
    }
    .btn-border {
        border-radius: 25px;
        color: #339df3 !important;
        border: 2px solid #339df3 !important;
    }
    tbody tr td {
        border: none !important;
    }
    .refunded {
        color: #FFC157 !important;
        border: 2px solid #FFC157 !important;
    }
    .btn:focus {
        outline: none !important;
        box-shadow: none !important;
    }
    input {
    border: none !important;
    margin-bottom: 15px !important;
    padding-left: 40px !important;
}
input:focus {
    border-bottom: 1px solid #339df3 !important;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #b9aeae !important;
  opacity: 1; /* Firefox */
}
</style>