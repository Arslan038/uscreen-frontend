const state = {
    industry:[],
    countries:[],
    currency:[],
    packages:[],

};

const getters = {
    currency:state => state.currency,
    countries:state => state.countries,
    industry:state => state.industry,
    packages:state => state.packages,

};

const actions = {
};
const mutations = {
  
    setCountries(state,payload){
        state.countries=payload
    },
    setIndustry(state,payload){
        state.industry=payload
    },
    setCurrency(state,payload){
        state.currency=payload
    },
    setPackages(state,payload){
        state.packages=payload
    }
    
};

export default {
    state,
    getters,
    actions,
    mutations
}
