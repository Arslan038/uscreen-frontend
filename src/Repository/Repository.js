import axios from 'axios'

const baseDomain = 'http://128.199.82.172:3000/';
const baseURL = `${baseDomain}api/`
// localStorage.getItem('uscreen-token').replace(/"/g,"")
export default axios.create({
  baseURL,
  headers: {'Content-Type' : 'application/json' , 'Authorization': `Bearer ${localStorage.getItem('uscreen-token')!=null ? localStorage.getItem('uscreen-token').replace(/"/g,"") :'' }`}
});
