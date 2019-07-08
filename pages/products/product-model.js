import { Base } from '../../utils/base.js';
class Product extends Base {
  constructor() {
    super();
  }
  // 获取商品详情
  // 对应商品的ID号
  getDatailInfo(id, callback) {
    var param = {
      url: 'product/' + id,
      sCallback: function (data) {
        callback && callback(data);
      }
    }
    this.request(param);
  }
}
export { Product }