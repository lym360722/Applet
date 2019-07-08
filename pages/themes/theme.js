// pages/themes/theme.js
import {Theme} from 'theme-model.js';
var theme = new Theme();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.id = options.id;
    this.data.name = options.name;
    this.onReady();
    this._loadData();
    
  },
  //动态设置theme专题页面顶部导航栏标题
  onReady:function(){
    wx.setNavigationBarTitle({
      title: this.data.name
    })
  },

  _loadData(){
    theme.getProductsData(this.data.id,(res)=>{
      //console.log(res);
      this.setData({
        'themeInfo': res
      });
    });
  }
})