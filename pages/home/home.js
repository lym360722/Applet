// pages/home/home.js
import {Home} from 'home-model.js';
var home = new Home();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  onLoad:function(){
    this._loadData();
  },

  _loadData:function(){
    // 首页顶部轮播图
    var id = 1;
    home.getBannerData(id,(res)=>{
      //console.log(res);
      this.setData({
        'bannerArray':res
      });
    });

    // 首页精选主题
    home.getThemeData((data)=>{
      
      this.setData({
        'themeArr': data
      });
    })

    // 首页最近新品
    home.getProductsData((data) => {
      
      this.setData({
        productsArr: data
      });
    })
  },

  // 点击banner图片跳转到banner商品详情页 【最近新品】共用此方法跳转到商品详情页
  onProductsItemTap:function(event){
    
    var id = home.getDataSet(event,'id');
    wx.navigateTo({
      url: '../products/product?id='+id
    })

  },

  // 点击精选主题图片跳转到精选主题商品列表页
  onThemesItemTap: function (event) {

    var id = home.getDataSet(event, 'id');
    var name = home.getDataSet(event,'name');
    wx.navigateTo({
      url: '../themes/theme?id=' + id + '&name=' + name
    })

  },

})