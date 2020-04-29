import Repository from './Repository';

const user_login_resource = 'auth/login';
const users_list_resource = 'user/list';
const user_signup_resource = 'user/signup';

const industry_resource = 'user/industry';
const currency_resource = 'currency';
const country_resource = 'geo/country';
const province_resource = 'geo/province';
const city_resource = 'geo/city';
const package_resource = 'api/package';

const help_resource = 'contact';

// api/geo/city?CountryId=14&ProvinceId=9611689


export default {
  
  getPackage(){
    return Repository.get(`${package_resource}`)
  },
  getIndustry(){
    return Repository.get(`${industry_resource}`)
  },
  getCurrency(){
    return Repository.get(`${currency_resource}`)
  },
  getCountries(){
    return Repository.get(`${country_resource}`)
  },
  getCity(payload){
    return Repository.get(`${city_resource}?CountryId=${payload.CountryId}&ProvinceId=${payload.ProvinceId}`)
  },
  getProvince(payload){
    return Repository.get(`${province_resource}?CountryId=${payload}`)
  },
  helpask(payload) {
    return Repository.post(`${help_resource}`, payload)
  }, 
  authenticatelogin(payload) {
    return Repository.post(`${user_login_resource}`, payload)
  },
  createaccount(payload) {
    return Repository.post(`${user_signup_resource}`, payload)
  },
  getusers() {
    return Repository.get(`${users_list_resource}`)
  },
  
  getsingleuser(payload) {
    
    return Repository.get(`${users_list_resource}`+'?Page=1&Size=5&UserKey='+payload)
  },
};
