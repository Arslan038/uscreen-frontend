<template>
    <div class="order-and-transactions">
        <div class="row">
            <div class="col-md-12 px-5">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Order no.</th>
                                <!-- <th>Case ID</th> -->
                                <th>Item</th>
                                <th>Amount (USD)</th>
                                <!-- <th>Candidate Status</th> -->
                                <th>Order Date</th>
                                <th>Order Status</th>
                                <th>Report</th>
                                <th>Invoice</th>
                                <th>Order Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,i) in allorders" :key="i" >
                                <td>{{item.OrderId}}</td>
                                <!-- <td>98768731</td> -->
                                <td>{{item.PackageServiceName}}</td>
                                <td>{{item.TotalAmount}}</td>
                                <!-- <td><button class="btn btn-sm btn-border btn-block">in review</button></td> -->
                                <td>{{item.LastCreated.split('T')[0]}}</td>
                                <td><button class="btn btn-sm btn-border btn-block">{{getOrderStatus(item.OrderStatusId)}}</button></td>
                                <td v-if="viewreport[i].isreportshow==false"><button class="btn btn-primary btn-sm btn-block" @click="getViewReport(item.OrderKey,i)">Get</button></td>
                                <td v-else><a class="btn btn-primary btn-sm btn-block" target="_blank" :href="viewreport[i].reporturl">Click Now</a></td>
                                <td v-if="viewreport[i].showinvoice==false"><button class="btn btn-primary btn-sm btn-block" @click="getOrderExportReport(item.OrderKey,i)">Get</button></td>
                                <td v-else><a class="btn btn-primary btn-sm btn-block"  download :href="viewreport[i].invoiceurl">Download Now</a></td>

                                <td><button @click="routeto(item)" class="btn btn-primary btn-sm btn-block">View</button></td>

                                <!-- <td @click="routeto(item)" class="btn btn-primary btn-sm btn-block">View</td> -->
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { RepositoryFactory } from '../Repository/RepositoryFactory'
const OrderRepository = RepositoryFactory.get('order_repository')

export default {
    name: "OrderAndTransactions",
    computed:{
        ...mapGetters(['allorders'])
    },
    watch:{
        allorders(){
            this.setTempViewReports()
        }
    },
    created(){
        this.fetchOrders()
        this.setTempViewReports()
    },
    data(){
        return {
            viewreport:[]
        }
    },
    methods:{
        setTempViewReports(){
            if(this.allorders.length>0){
                this.allorders.forEach(item=>{  
                  this.viewreport.push({isreportshow:false,reporturl:'',invoiceurl:'',showinvoice:false})
                })

            }
        },
        async getViewReport(id,i){
            // console.log(id)
            let {data}= await OrderRepository.getOrderReport({OrderKey:id})
            this.viewreport[i].isreportshow=true

            this.viewreport[i].reporturl=data.data.screening_results_url
            // console.log(data)

        },
        async getOrderExportReport(id,i){
            let {data}=await OrderRepository.getOrderPerforma(id)
            console.log(data)
            this.viewreport[i].invoiceurl=data.data[0].File
            this.viewreport[i].showinvoice=true

        },
        async fetchOrders(){
        let {data}= await OrderRepository.getorders()
        this.$store.commit("setAllOrders",data.data.PageData)

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
            if(id==6) {
                return 'Completed'
            }
        }
    }
}
</script>

<style scoped>
    .btn {
        padding: 0px 20px;
        min-width: 100px;
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
</style>