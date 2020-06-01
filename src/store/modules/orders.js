const state = {
    allorders:[],
    temporder:null,
    temp_selected_package:null,
    temp_selected_order:'',

};

const getters = {
    allorders:state => state.allorders,
    temporder:state => state.temporder,
    temp_selected_package:state => state.temp_selected_package,
    temp_selected_order:state => state.temp_selected_order,
    
};

const actions = {
};
const mutations = {
    setSelectedOrder(state,payload){
        state.temp_selected_order=payload
    },
    setAllOrders(state,payload){
        state.allorders=payload
    },
    setTempOrder(state,payload){
        state.temporder=payload.selected_order
        state.temp_selected_package=payload.selected_package
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
