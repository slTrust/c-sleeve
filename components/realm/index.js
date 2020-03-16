import { FenceGroup } from "../models/fence-group"
import {Judger} from "../models/judger";

// components/realm/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    spu:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    judger:Object,
    previewImg:String
  },
  observers:{
    'spu':function(spu){
      if(!spu){
        return
      }
      const fenceGroup = new FenceGroup(spu);
      fenceGroup.initFences();
      const judger = new Judger(fenceGroup);
      this.data.judger = judger;
      const defaultSku = fenceGroup.getDefaultSku();
      if(defaultSku){
        this.bindSkuData(defaultSku);
      }else{
        this.bindSpuData();
      }
      this.bindInitData(fenceGroup);

      
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindSpuData(){
      const spu = this.properties.spu
      this.setData({
        previewImg:spu.img,
        title:spu.title,
        price:spu.price,
        discountPrice:spu.discountPrice
      });
    },
    bindSkuData(sku){
      this.setData({
        previewImg:sku.img,
        title:sku.title,
        price:sku.price,
        discountPrice:sku.discountPrice
      });
    },
    bindInitData(fenceGroup){
      this.setData({
        fences:fenceGroup.fences
      })
    },
    onCellTab(event){
      const {cell,x,y} = event.detail;
      const judger = this.data.judger;
      judger.judge(cell, x, y);
      this.setData({
        fences:judger.fenceGroup.fences
      });
    }
  }
})
