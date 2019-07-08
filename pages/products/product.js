// pages/products/product.js
import { Product } from 'product-model.js';
import { Cart } from '../carts/cart-model.js';
var product = new Product();
var cart = new Cart();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:null,
    countsArray:[1,2,3,4,5,6,7,8,9,10],
    productCounts:1,
    tabsTitle:['商品详情','产品参数','售后保障'],
    currentTabsIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    this.data.id = id;
    this._loadData();
  },

  // 获取的商品信息的数据绑定
  _loadData:function(){
    product.getDatailInfo(this.data.id,(data)=>{
     
      this.setData({
        cartTotalCounts: cart.getCartTotalCounts(),
        product:data
      })
    })
  },

  bindPickerChange: function(event){
    //console.log(event);
    var index = event.detail.value;
    var selectdCount = this.data.countsArray[index];
    this.setData({
      productCounts: selectdCount
    })
  },

  onTabsItemTap:function(event){
    var index = product.getDataSet(event,'index');
    this.setData({
      currentTabsIndex:index
    });
  },
  
  // 点击加入购物车
  onAddingToCartTap:function(event){
    this.addToCart();
    //var counts = this.data.cartTotalCounts + this.data.productCounts;
    // 点击加入购物车重新获取购物车中数量动态改变右上角购物车总数量
    this.setData({
      cartTotalCounts: cart.getCartTotalCounts()
    });
  },

  addToCart:function(){
    var tempObj = {};
    var keys = ['id', 'name', 'main_img_url', 'price'];
    
    for(var key in this.data.product){
      if(keys.indexOf(key) >= 0){
        tempObj[key] = this.data.product[key];
      }
    }
    
    cart.add(tempObj, this.data.productCounts);
  }

})