const state = {
    loggedUser: null,
    allusers:[],
    notifications:{},
    userdetails:{},

};

const getters = {
    userdetails:state => state.userdetails,

    loggedUser:state => state.loggedUser,
    notifications:state => state.notifications,
    allusers:state => state.allusers,
    users: (state) => {
        return state.allusers.filter(item=>item.UserRoleCode=='USER')
    },
    employer: (state) => {
        return state.allusers.filter(item=>item.UserRoleCode=='EMPLOYER')
    }
    
};

const actions = {
};
const mutations = {
    setLoggedUser: (state, payload) => {
        if(localStorage.getItem('uscreen-token')==null){
            localStorage.setItem("uscreen-token",JSON.stringify(payload.Token))

        }
        localStorage.setItem("loggedUser",JSON.stringify(payload))

        state.loggedUser=payload

    },
    setAllUsers(state,payload){
        state.allusers=payload
        
    },
    setNotifications:(state,payload) =>{
        state.notifications=payload
    },
    setUserDetails:(state,payload) =>{
        if(localStorage.getItem('userdetails')==null){
            localStorage.setItem("userdetails",JSON.stringify(payload))

        }
        state.userdetails=payload

    },
    logout(state,payload){
        state.loggedUser=null;
        state.userdetails={}
        localStorage.removeItem('uscreen-token')
        localStorage.removeItem('loggedUser')
        localStorage.removeItem('inside')
        localStorage.removeItem('userdetails')

    }
    
};

export default {
    state,
    getters,
    actions,
    mutations
}
