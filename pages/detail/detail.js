import { Spu } from "../../models/spu";
import {ShoppingWay} from "../../core/enum";

// pages/detail/detail.js
Page({

  data: {
    showRealm:false
  },

  onLoad: async function (options) {
    const pid = options.pid;
    const spu = await Spu.getDetail(pid);
    this.setData({
      spu
    })
  },
  onAddToCart(event){
    this.setData({
      showRealm:true,
      orderWay:ShoppingWay.CART
    })
  },

  onBuy(event){
    this.setData({
      showRealm:true,
      orderWay:ShoppingWay.BUY
    })
  },

  onGoToHome(event){
    wx.switchTab({
      url:'/pages/home/home'
    })
  },

  onGoToCart(event){
    wx.switchTab({
      url:'/pages/cart/care'
    })
  },

  onSpecChange(event){
    this.setData({
      specs:event.detail
    })
  }

})