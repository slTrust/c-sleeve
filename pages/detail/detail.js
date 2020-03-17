import { Spu } from "../../models/spu";

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
      showRealm:true
    })
  },

  onBuy(event){
    this.setData({
      showRealm:true
    })
  },

})