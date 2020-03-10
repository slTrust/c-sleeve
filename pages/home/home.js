// pages/home/home.js
import { Theme } from "../../model/theme";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topTheme: null
  },

  /**
   * 生命周期函数--监听页面加载
   * JS 类型的约束
   * 业务逻辑
   * 数据绑定
   * view视图层 业务逻辑层 桥梁 中间层
   * MVC C controller C写业务  Model 写业务
   * Model / Login / Service
   * Service  / Mangeer
   */
  onLoad: async function (options) {
    const data = await Theme.getHomeLocationA();
    console.log(data);
    this.setData({
      topTheme: data[0]
    })
  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  }
})