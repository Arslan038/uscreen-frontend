export default {

    methods:{
        validationchecker(obj,keyarr){
           return  keyarr.filter(item=>obj[item]=='').length
        }
    },
    data(){
        return{

        }
    }
}