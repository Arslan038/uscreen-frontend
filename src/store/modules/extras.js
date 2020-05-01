const state = {
    industry:[],
    countries:[],
    currency:[],
    employer_packages:[],
    individual_packages:[]

};

const getters = {
    currency:state => state.currency,
    countries:state => state.countries,
    industry:state => state.industry,
    packages:state => state.packages,
    employer_packages:state => state.employer_packages,
    individual_packages:state => state.individual_packages,

};

const actions = {
};
const mutations = {
    setEmployerPackages(state,payload) {
        state.employer_packages=payload
    },
    setIndividualPackages(state,payload) {
        state.individual_packages=payload
    },
    setCountries(state,payload){
        state.countries=payload
    },
    setIndustry(state,payload){
        state.industry=payload
    },
    setCurrency(state,payload){
        state.currency=payload
    }
    
};

export default {
    state,
    getters,
    actions,
    mutations
}
