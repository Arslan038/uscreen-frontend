const state = {
    allorders:[],
    temporder:null,
    temp_selected_package:null

};

const getters = {
    allorders:state => state.allorders,
    temporder:state => state.temporder,
    temp_selected_package:state => state.temp_selected_package,
    
};

const actions = {
};
const mutations = {
  
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
