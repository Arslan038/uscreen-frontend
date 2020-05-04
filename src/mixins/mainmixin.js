export default {

    methods:{
        validationchecker(obj,keyarr){
            console.log(keyarr.filter(item=>obj[item]=='').length)
           return  keyarr.filter(item=>obj[item]=='').length
        }
    },
    data(){
        return{

        }
    }
}