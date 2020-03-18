import {getWidthSize} from "../../utils/system"
import {px2rpx} from "../../miniprogram_npm/lin-ui/utils/util"

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const res = await getWidthSize();
    const windowHeightRpx = px2rpx(res.windowHeight);

    // 60 是 搜索栏高度 
    // 20 是main的 margin-top 
    // 2  是main的border-top
    const h = windowHeightRpx - 60 - 20 - 2;
    this.setData({
      segHeight:h
    });
    /*
    rate

          750rpx               x
    ---------------- = --------------------
    res.screenHeight     res.windowHeight
    */
  },

  onGotoSearch(){
    wx.navigateTo({
      url:'/pages/search/search'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})