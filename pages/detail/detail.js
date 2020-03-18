import { Spu } from "../../models/spu";
import {ShoppingWay} from "../../core/enum";
import { SaleExplain } from "../../models/sale-explain";
import { getWindowHeightRpx } from "../../utils/system";

// pages/detail/detail.js
Page({

  data: {
    showRealm:false
  },

  onLoad: async function (options) {
    const pid = options.pid;
    const spu = await Spu.getDetail(pid);

    const explain = await SaleExplain.getFixed();
    const windowHeight = await getWindowHeightRpx();
    const h = windowHeight - 100; // 100 是底部tabbar的高度  自定义的tabbar高度是不包含在 windowHeight里的

    this.setData({
      spu,
      explain,
      h
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