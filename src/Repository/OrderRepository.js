import Repository from './Repository';
const order_update_resource = 'order/update';
const order_list_resource = 'order/list';
const package_resource = 'package';
const package_items_resource = 'package/item';
const package_items_countries = 'package/item/pricing';
const new_order = 'order/create';
const order_charge = 'payment/charge';

export default {
  getPackages(payload){
    return Repository.get(`${package_resource}?UserRoleCode=${payload}`)
  },
  
  getPackageItemCountries(payload) {
    return Repository.get(`${package_items_countries}?PackageServiceId=${payload}`)
  },
  getPackageItems(payload) {
    return Repository.get(`${package_items_resource}?PackageServiceId=${payload}`)
  },
  getorders() {
    return Repository.get(`${order_list_resource}`+'?Page=1&Size=5')
  },
  order_charge(payload) {
    return Repository.post(`${order_charge}`,payload);
  },
  create_order(payload) {
    return Repository.post(`${new_order}`,payload);
  },
  // edit_order(payload) {
  //   return Repository.post(`${order_update_resource}`,payload);
  // }
}
