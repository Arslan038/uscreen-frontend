<template>
    <div class="order-and-transactions">
        <div class="row">
            <div class="col-md-12 px-5">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Order no.</th>
                                <th>Case ID</th>
                                <th>Item</th>
                                <th>Amount (USD)</th>
                                <th>Candidate Status</th>
                                <th>Order Date</th>
                                <th>Order Status</th>
                                <th>Report</th>
                                <th>Invoice</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>987631</td>
                                <td>98768731</td>
                                <td>Employer - Sliver Package</td>
                                <td>1000</td>
                                <td><button class="btn btn-sm btn-border btn-block">in review</button></td>
                                <td>13-3-2019</td>
                                <td><button class="btn btn-sm btn-border btn-block">in review</button></td>
                                <td><button class="btn btn-primary btn-sm btn-block" disabled>View</button></td>
                                <td><button class="btn btn-primary btn-sm btn-block">download</button></td>
                            </tr>
                            <tr>
                                <td>7654378-1</td>
                                <td>765t654378</td>
                                <td>Employer - Gold Package</td>
                                <td>1000</td>
                                <td><button class="btn btn-sm btn-primary btn-block">ready</button></td>
                                <td>6-3-2019</td>
                                <td><button class="btn btn-sm btn-primary btn-block">ready</button></td>
                                <td><button class="btn btn-primary btn-sm btn-block">View</button></td>
                                <td><button class="btn btn-primary btn-sm btn-block">download</button></td>
                            </tr>
                            <tr>
                                <td>7654378-1</td>
                                <td>765t654378</td>
                                <td>Employer - Gold Package</td>
                                <td>2400</td>
                                <td><button class="btn btn-sm btn-primary btn-block">ready</button></td>
                                <td>6-3-2019</td>
                                <td><button class="btn btn-sm btn-border btn-block">Pending Payment</button></td>
                                <td><button class="btn btn-primary btn-sm btn-block">View</button></td>
                                <td><button class="btn btn-primary btn-sm btn-block">download</button></td>
                            </tr>
                            <tr>
                                <td>7654378-1</td>
                                <td>765t654378</td>
                                <td>Employer - Gold Package</td>
                                <td class="text-warning">(1000)</td>
                                <td><button class="btn btn-sm btn-border btn-block">cancelled</button></td>
                                <td>6-3-2019</td>
                                <td><button class="btn btn-sm btn-border btn-block refunded">Refunded</button></td>
                                <td><button class="btn btn-primary btn-sm btn-block">View</button></td>
                                <td><button class="btn btn-primary btn-sm btn-block">download</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "OrderAndTransactions"
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